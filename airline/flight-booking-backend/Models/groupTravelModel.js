import mongoose from 'mongoose';

const GroupTravelSchema = new mongoose.Schema({
  fromCountry: String,
  toCountry: String,
  departureDate: String,
  adults: Number,
  children: Number,
  infants: Number,
  groupName: String,
  groupType: String,
  passengers: Number,
  flyingFrom: String,
  to: String,
  journeyType: String,
  departureTime: String,
  returnTime: String,
  cateringRequest: String,
  message: String,
  title: String,
  yourName: String,
  email: String,
  countryCode: String,
  phoneNumber: String,
});

const GroupTravel = mongoose.model('GroupTravel', GroupTravelSchema);

export default GroupTravel;
