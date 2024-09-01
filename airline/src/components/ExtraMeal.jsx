import React, { useState } from 'react';
import '../css/ModifyFlight.css'
import logo from '../assets/img/sample1.png';  // Import the logo image

const ModifyFlight = () => {
    const [reservationNumber, setReservationNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [captchaChecked, setCaptchaChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!captchaChecked) {
            alert('Please verify you are not a robot.');
            return;
        }

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
        setCaptchaChecked(false);
    };

    return (
        <div className="container">
            <br /><br /><br />
            <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
            <img src={logo} alt="Travela Logo"
        width="150"
      />
              <h1 className="heading">Add Meals</h1> 
            </div>

          
            <p>
            Enjoy a more personalized journey with Fly Jinnah. <a href="#">Select the meal</a> of your choice offered by our Sky Café menu prior to your flight. While booking online, you can choose from a wide selection of sumptuous onboard food and beverages at extremely affordable prices.
            </p>
            <p>
            You can pre-select your meals instantly online through below form or by contacting our <a href="#">call center</a>, visiting our <a href="#">sales offices</a> or travel partners.
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
            <div className="captcha-container">
                <div className="captcha-box">
                    <input
                        type="checkbox"
                        id="not-robot"
                        checked={captchaChecked}
                        onChange={(e) => setCaptchaChecked(e.target.checked)}
                    />
                    <label htmlFor="not-robot">I'm not a robot</label>
                </div>
            </div>
        </div>
    );
};

export default ModifyFlight;
