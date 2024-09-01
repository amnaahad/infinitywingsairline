import React, { useState } from 'react';
import logo from '../assets/img/sample1.png';  // Import the logo image

const CheckInPage = () => {
  const [reservationId, setReservationId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8002/api/checkReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reservationId }),
      });

      const data = await response.json();

      if (data.exists) {
        // Redirect to BoardingPass component if reservation exists
        window.location.href = `/boardingpass/${reservationId}`;
      } else {
        alert('Reservation not found. Please check your details and try again.');
      }
    } catch (error) {
      console.error('Error checking reservation ID:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="check-in-container">
 
 <img src={logo} alt="Travela Logo" width="150" />
      <h1 className="heading">ONLINE CHECK-IN</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="pnr">Reservation Number (PNR)</label>
          <p>Example: 41222222</p>
          <input
            type="text"
            id="pnr"
            value={reservationId}
            onChange={(e) => setReservationId(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleSubmit}>Find Booking</button>
      </div>

      <style jsx>{`
        .check-in-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .logo {
          margin-bottom: 20px;
        
        }

        .heading {
          font-size: 36px;
          font-weight: bold;
          color: black;
          margin-bottom: 30px;
        }

        .form-container {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: left;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        .form-group p {
          font-size: 14px;
          color: #777;
          margin-bottom: 8px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .form-group input[type="date"] {
          padding: 9px;
        }

        .button {
          background-color: black;
          color: white;
          font-size: 18px;
          font-weight: bold;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 20px;
        }

        .button:hover {
          background-color: grey;
        }
      `}</style>
    </div>
  );
};

export default CheckInPage;
