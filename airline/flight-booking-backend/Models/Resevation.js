// Models/Reservation.js
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  reservationId: {
    type: String,
    required: true,
    unique: true,
  },
  bookingId: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Booking', 
    required: true }, 
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
