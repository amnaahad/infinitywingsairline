import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    fromCountry: String,
    toCountry: String,
    fromAirport: String,
    toAirport: String,
    departDate: String,
    returnDate: String,
    tripType: String,
    fare: Number,
    tax: Number,
    total: Number,
    currency: String,
    passengers: {
        adults: Number,
        children: Number,
        infants: Number,
    }
}, { timestamps: true }); // This will add createdAt and updatedAt fields automatically

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
