import React, { useState, useEffect } from 'react';
import FlightHeader from '../components/FlightHeader';
import AddMeals from './AddMeals'; // Import AddMeals component

const AddSeats = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const [selectedSeats, setSelectedSeats] = useState({});
  const [activeComponent, setActiveComponent] = useState('seats');
  const [currentPassenger, setCurrentPassenger] = useState(null); // Track the selected passenger

  const bookingId = sessionStorage.getItem('bookingId');
  console.log('Booking ID:', bookingId);

  useEffect(() => {
    // Fetch booking details from sessionStorage
    const storedBookingDetails = sessionStorage.getItem('bookingDetails');
    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    }

    // Fetch passenger names from sessionStorage
    const storedAdultForms = JSON.parse(sessionStorage.getItem('adultForms')) || [];
    const storedChildForms = JSON.parse(sessionStorage.getItem('childForms')) || [];
    const storedInfantForms = JSON.parse(sessionStorage.getItem('infantForms')) || [];

    const allPassengers = [
      ...storedAdultForms.map(form => form.title && form.firstName && form.lastName ? `${form.title} ${form.firstName} ${form.lastName}` : null),
      ...storedChildForms.map(form => form.title && form.firstName && form.lastName ? `${form.title} ${form.firstName} ${form.lastName}` : null),
      ...storedInfantForms.map(form => form.title && form.firstName && form.lastName ? `${form.title} ${form.firstName} ${form.lastName}` : null),
    ].filter(Boolean); // Remove any null values
    
    // Initialize selectedSeats with the passenger names
    const initialSeats = allPassengers.reduce((acc, passenger) => {
      acc[passenger] = ''; // Empty seat initially
      return acc;
    }, {});

    setSelectedSeats(initialSeats);
  }, []);

  const seatMap = [
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
  ];

  const handleSeatClick = (rowIndex, seatIndex) => {
    if (!currentPassenger) {
      alert("Please select a passenger first.");
      return;
    }

    const selectedSeat = `${rowIndex + 1}${seatMap[rowIndex][seatIndex]}`;
    console.log("Seat clicked:", selectedSeat);

    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [currentPassenger]: selectedSeat,
    }));
  };

  const handleSubmitSeats = async () => {
    try {
      // Create an array of seat selection data
      const seatsData = Object.entries(selectedSeats)
        .filter(([_, seatNumber]) => seatNumber) // Filter out unselected seats
        .map(([passengerName, seatNumber]) => ({
          passengerName: String(passengerName),
          seatNumber: String(seatNumber),
        }));
  
      console.log('Seats data array:', seatsData);
  
      if (seatsData.length === 0) {
        console.error('No seats selected.');
        alert('Please select seats before submitting.');
        return;
      }
  
      // Create the seatstobesaved object with bookingId and seatsData
      const seatstobesaved = {
        bookingId: String(bookingId),
        seats: seatsData, // Add seatsData as a property
      };
      
  
      console.log('Request body:', JSON.stringify(seatstobesaved));
  
      // Send the data to the server
      const response = await fetch('http://localhost:8002/api/selected-seats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seatstobesaved),
      });
  
      const responseText = await response.text(); // Capture the response text
  
      if (response.ok) {
        console.log('Seats saved successfully');
        setActiveComponent('add-meals');
      } else {
        console.error('Error saving seats:', responseText); // Log the full response text
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  const renderComponent = () => {
    switch (activeComponent) {
      case 'add-meals':
        return <AddMeals />;
      default:
        return (
          <div className="seat-selection-container">
            <div className="seat-selection-left">
              <h2>Select seats for your trip</h2>
              <p>{bookingDetails.fromCountry} to {bookingDetails.toCountry}</p>
              <div className="passenger-list">
                <h3>Select passenger from the list below</h3>
                <ul>
                  {Object.entries(selectedSeats).map(([name, seat]) => (
                    <li 
                      key={name} 
                      className={`passenger-item ${currentPassenger === name ? 'active' : ''}`}
                      onClick={() => setCurrentPassenger(name)} // Set the current passenger when clicked
                    >
                      <span>{name}</span>
                      <span className="seat-number">{seat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="seat-map-legend">
                <h2>Seatmap Legend</h2>
                <div className="legend-item">
                  <span className="legend-color available"></span>
                  <span>Available</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color occupied"></span>
                  <span>Occupied</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color selected"></span>
                  <span>Selected</span>
                </div>
              </div>
            </div>

            <div className="seat-selection-right">
              <div className="seat-map">
                {seatMap.map((row, rowIndex) => (
                  <div key={rowIndex} className="seat-row">
                    {row.map((seat, seatIndex) => {
                      const seatNumber = `${rowIndex + 1}${seat}`;
                      const isSelected = Object.values(selectedSeats).includes(seatNumber);

                      return (
                        <div
                          key={seatIndex}
                          className={`seat ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleSeatClick(rowIndex, seatIndex)}
                        >
                          {seatNumber}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="seat-summary">
                <h4>Seats</h4>
                <ul>
                  {Object.entries(selectedSeats).map(([name, seat]) => (
                    <li key={name}>
                      {name} - {seat}
                    </li>
                  ))}
                </ul>
                <button 
                  className="confirm-selection-btn"
                  onClick={handleSubmitSeats} // Save seats and move to the next component
                >
                  Confirm selection
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <br />
      <FlightHeader />
      <br />
      {renderComponent()} {/* Render the active component */}
    </>
  );
};

export default AddSeats;
