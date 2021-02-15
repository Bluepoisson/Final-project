import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
// import dotenv from 'dotenv';
import listEndpoints from 'express-list-endpoints';
import escapeStringRegexp from 'escape-string-regexp';

import { createRequire } from 'module';
//! could not import clinics-data from './data/clinics-data.json' because of type error json was not recognized. Deconstructing worked.
const require = createRequire(import.meta.url);
const clinicsData = require('./data/clinics-data.json');


// dotenv.config();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/finalProject';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 2,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
    unique: true,
  },
});

//? user validation
userSchema.pre('save', async function (next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

  const salt = bcrypt.genSaltSync();
	user.password = bcrypt.hashSync(user.password, salt);
	next();
});


const authenticateUser = async (req, res, next) => {
  try {
    const accessToken = req.header('Authorization');
    const user = await User.findOne({ accessToken });
    if (!user) {
      throw 'User not found';
    }
    req.user = user;
    next();
  } catch (err) {
    const errorMessage = 'Please try logging in again';
    console.log(errorMessage);
    res.status(401).json({ error: errorMessage });
  }
};

const clinicSchema = new mongoose.Schema({
  formatted_address: {
    type: String
  },
  formatted_phone_number: {
    type: Number
  },
  name: { 
    type: String,
    unique: true
  },
  opening_hours: {
    type: Array,
  },
  rating:{
    type: Number
  }
  
});

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
    clinic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinic',
        // required: true
    },
    reception: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    // needs: {
    //   type: String,
    // },
    recommendation: {
      type: String,
      required: true
    },
    // testimonial: {
    //   type: String,
    //   maxLength: 200
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model('User', userSchema);
const Clinic = mongoose.model('Clinic', clinicSchema);
const Review = mongoose.model('Review', reviewSchema);

if (process.env.RESET_DATABASE) {
  console.log('Resetting database!');
  const seedDatabase = async () => {
  
  await Clinic.deleteMany();

  clinicsData.forEach(item => {
    const newClinic = new Clinic(item);
    newClinic.save();
  })
  }
  seedDatabase();
}

//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();



app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({ error: 'Service Unavailable' })
  }
})

app.get('/', (req, res) => {
    res.send(listEndpoints(app))
  })

//? Register
app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await new User({
      email,
      password,
    }).save();
    res.status(200).json({ userId: user._id, accessToken: user.accessToken });
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err });
  }
});

//? Login
app.post('/sessions', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ userId: user._id, accessToken: user.accessToken });
    } else {
      throw 'User not found';
    }
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});


//? all clinics inc. name + openingHOurs query 
app.get('/clinics', async (req, res) => {

  const { name, opening_hours } = req.query;
  
  let allClinics = null;
  try {
    if(name){
      const regExName = escapeStringRegexp(name);
        allClinics = await Clinic.find({ name: { $regex: regExName } });
        // console.log(regExname `this is regeexname`);
    }  else if(opening_hours) {
      const regExOpenHours = escapeStringRegexp(opening_hours);
      allClinics = await Clinic.find({ opening_hours: { $regex: regExOpenHours } });
      // console.log(regExOpenHours `this is regexopenh`);
    } else {
      allClinics = await Clinic.find(req.query);
    }

    if(allClinics) { 
    res.status(200).json(allClinics);
    } else {
      res.status(404).json({ error: 'Data not found' })
    }
    } catch (err) {
      res.status(404).json({ message: 'Page not found', error: err.errors })
    }
});

//? single clinic endpoint
app.get('/clinics/:id', async (req, res) => { 
  try {
    const clinicId = await Clinic.findById({ _id: req.params.id})
      if(clinicId) {
        res.status(200).json(clinicId)
      } else {
        res.json(400).json({ error: 'Data not found' });
      }
    } catch (err) {
      res.status(404).json({ message: 'Clinic id not found', error: err.errors })
    }
  })

app.post('/clinics', async (req, res) => {
    const { formatted_address, formatted_phone_number, name, opening_hours, rating } = req.body;
    const clinic = new Clinic({formatted_address, formatted_phone_number, name, opening_hours, rating });
    try {
      const savedClinic = await clinic.save();
      res.status(200).json(savedClinic);
    } catch (err) {
      res.status(400).json({ message: 'Bad request. Could not save clinic to the database', error: err.errors });
    }
});

//? user review endpoint
app.post('/reviews', authenticateUser)
app.post('/reviews/', async (req, res) => {
  const user = req.user
  const { reception, time, recommendation, createdAt } = req.body
  const review = new Review({  user, reception, time, recommendation, createdAt });

  try {
    const savedReview = await review.save();
    res.status(200).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: 'Bad request. Could not save review to the database', error: err.errors });
  }
});



// //? user review endpoint w/ clinic
// app.post('/clinics/:id/reviews', authenticateUser)
// app.post('/clinics/:id/reviews', async (req, res) => {

//   const clinicId = req.params.id

//   const { reception, time, recommendation, createdAt } = req.body
//   const review = new Review({  clinicId, user, reception, time, recommendation, createdAt });

//   try {
//     const savedReview = await review.save();
//     res.status(200).json(savedReview);
//   } catch (err) {
//     res.status(400).json({ message: 'Bad request. Could not save review to the database', error: err.errors });
//   }
// });


  app.post('/reviews/:clinicId', authenticateUser);
  app.post('/reviews/:clinicId', async (req, res) => {
    const user = req.user
    const clinicId = req.params.clinicId
    const clinic = await Clinic.findById(clinicId)
    const { reception, time, recommendation, createdAt } = req.body
    const review = new Review({  user, clinic, reception, time, recommendation, createdAt });
    try {
      const savedReview = await review.save();
      res.status(200).json(savedReview);
    } catch (err) {
      res.status(400).json({ message: 'Bad request. Could not save review to the database', error: err.errors });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});