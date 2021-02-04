import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
// import dotenv from 'dotenv';
import listEndpoints from 'express-list-endpoints';

// dotenv.config();
// console.log("Our hero is:" + process.env.HERO);

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

// user validation
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

//! google review details?

const Review =  mongoose.model('Review', {
    author: { 
        type: String,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    text: {
        type: String,
        required: true,
        minlength: [5, "Review must be at least 5 characters"],
        maxlength:  [200, "Review must be at most 200 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const User = mongoose.model('User', userSchema);

if (process.env.RESET_DATABASE) {
  console.log('Resetting database!');
  const seedDatabase = async () => {
  
  await User.deleteMany();
  await Review.deleteMany();
  

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

// Sign-up
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

// Login
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


app.get('/secret', authenticateUser);
app.get('/secret', (req, res) => {
	const secretMessage = `This is a secret message for ${req.user.email}`;
	console.log(`SecretMessage in endpoint ${secretMessage}`);
	res.status(200).json({ secretMessage });
});

//? secure endpoint, user needs to be logged in to access this
app.get('/users/:id', authenticateUser);
app.get('/users/:id', (req, res) => {
	const secretMessage = `This is a secret message for ${req.user.name}`;
	console.log(`SecretMessage in endpoint ${secretMessage}`);
	res.status(200).json({ secretMessage });

});


// // Get user specific information
// app.get('/users/:id/profile', authenticateUser);
// app.get('/users/:id/profile', async (req, res) => {
//   const user = await User.findOne({ _id: req.params.id });
//   const publicProfileMessage = `This is a public profile message for ${user.email}`;
//   const privateProfileMessage = `This is a private profile message for ${user.email}`;

//   console.log(`Authenticated req.user._id: '${req.user._id.$oid}'`);
//   console.log(`Requested     user._id    : '${user._id}'`);
//   console.log(`Equal   : ${req.user_id == user._id}`);

//   // Decide private or public here
//   if (req.user._id.$oid === user._id.$oid) {
//     // Private
//     res.status(200).json({ profileMessage: privateProfileMessage });
//   } else {
//     // Public information or Forbidden (403) because the users don't match
//     res.status(200).json({ profileMessage: publicProfileMessage });
//   }
// });


app.get('/reviews', async (req, res) => {
    try {
    const reviews = await Review.find()
        .sort({createdAt: 'desc'})
        .limit(10)
        .exec(); 
        res.status(200).json(reviews);
    } catch (err) {
      res.status(404).json({ message: 'Page not found', error: err.errors })
    }
  });
  
  app.post('/reviews', async (req, res) => {
    const { message, email } = req.body;
    const review = new Review({ message, email });
  
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

