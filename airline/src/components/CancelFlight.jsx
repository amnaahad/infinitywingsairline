import React, { useState } from 'react';
import '../css/ModifyFlight.css'
import logo from '../assets/img/sample1.png';  // Import the logo image

const ModifyFlight = () => {
    const [reservationNumber, setReservationNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle form submission
        console.log({
            reservationNumber,
            lastName,
            departureDate
        });

        // Reset the form fields
        setReservationNumber('');
        setLastName('');
        setDepartureDate('');
    };

    return (
        <div className="container">
            <br /><br /><br />
            <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
            <img src={logo} alt="Travela Logo"
        width="150"
      />
              <h1 className="heading">Cancel Flight</h1> 
            </div>
            <p>
            If you wish to cancel your flight, the balance will be credited back to you towards a future use and within a year of your original booking. The cancellation will be subject to a cancellation fee.
            </p>
            <p>
            You can cancel online through below form or by contacting our <a href="#">call center</a>, visiting our <a href="#">sales offices</a> or travel partners.
            </p>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="reservation-number">Reservation Number</label>
                    <input
                        type="text"
                        id="reservation-number"
                        name="reservation-number"
                        value={reservationNumber}
                        onChange={(e) => setReservationNumber(e.target.value)}
                        required
                    />

                    <label htmlFor="last-name">Contact Person Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="departure-date">Departure Date</label>
                    <input
                        type="date"
                        id="departure-date"
                        name="departure-date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        required
                    />

                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default ModifyFlight;
