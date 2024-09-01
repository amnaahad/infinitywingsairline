import mongoose from 'mongoose';

const selectedSeatSchema = new mongoose.Schema({
  bookingId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Booking', 
    required: true 
  },  // Reference to the booking
  passengerName: { 
    type: String, 
    required: true 
  },
  seatNumber: { 
    type: String, 
    required: true 
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Ensure a seat is unique per booking
selectedSeatSchema.index({ bookingId: 1, seatNumber: 1 }, { unique: true });

const SelectedSeat = mongoose.model('SelectedSeat', selectedSeatSchema);

export default SelectedSeat;
