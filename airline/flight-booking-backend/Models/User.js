// Models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  nationality: { type: String, required: true },
  country: { type: String, required: true },
  mobile: { type: String, required: true },
  dob: { type: Date, required: true },
  passport: { type: String },
  preferredLanguage: { type: String, default: 'English' },
  referringMemberEmail: { type: String },
  userId: { type: String, required: true, unique: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;