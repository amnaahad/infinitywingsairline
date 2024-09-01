import mongoose from 'mongoose';

const selectedMealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },  // Reference to the booking
  });
  
  const SelectedMeal = mongoose.model('SelectedMeal', selectedMealSchema);
  
  export default SelectedMeal;
  