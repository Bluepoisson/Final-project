// import mongoose from 'mongoose';

// const Schemas = => {
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 2,
//   },
//   accessToken: {
//     type: String,
//     default: () => crypto.randomBytes(128).toString('hex'),
//     unique: true,
//   },
// });

// // // user validation
// // userSchema.pre('save', async function (next) {
// // 	const user = this;

// // 	if (!user.isModified('password')) {
// // 		return next();
// // 	}

// //   const salt = bcrypt.genSaltSync();
// // 	user.password = bcrypt.hashSync(user.password, salt);
// // 	next();
// // });

// const clinicSchema = new mongoose.Schema({
//   formatted_address: {
//     type: String
//   },
//   formatted_phone_number: {
//     type: Number
//   },
//   name: { 
//     type: String,
//     unique: true
//   },
//   opening_hours: {
//     type: Array,
//   },
//   rating:{
//     type: Number
//   }
  
// });


// const reviewSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//     clinic: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Clinic',
//         required: true
//     },
//     reception: {
//       type: Array,
//     },
//     timely: {
//       type: Array,
//     },
//     helpful: {
//       type: Array,
//     },
//     recommendation: {
//       type: Array,
//     },
//     testimonial: {
//       type: String,
//       maxLength: 200
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// }

// export default Schemas;




