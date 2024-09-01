import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FlightHeader from '../components/FlightHeader';
import AddSeats from '../components/AddSeats';
import AddMeals from '../components/AddMeals';
import AddBaggage from '../components/AddBaggage';
import '../css/AddMeals.css';
import '../css/AddSeats.css';
import '../css/AddExtras.css';

const AddExtrasPages = () => {
  const [activeComponent, setActiveComponent] = useState('extras');
  const navigate = useNavigate(); // Initialize useNavigate

  const renderComponent = () => {
    switch (activeComponent) {
      case 'addSeats':
        return <AddSeats />;
      case 'addMeals':
        return <AddMeals />;
      case 'addBaggage':
        return <AddBaggage />;
      default:
        return renderExtrasPage();
    }
  };

  const renderExtrasPage = () => (
    <div className="extras-container">
      <h2 className="extras-title">Select extras for your trip</h2>
      <br />
      <div className="extras-section">
        <div className="section-left">
          <h4  style={{color:'black'}}>
            {/* Seats SVG Icon */}
            Seats
          </h4>
          <div className="section-description">
            Please select your preferred seat from the available options to enhance your comfort during the flight.
          </div>
          <div className="section-details"></div>
        </div>
        <div className="section-right">
          <button
            className="edit-selection-button1"
            onClick={() => setActiveComponent('addSeats')}
          >
            <span className="icon">✏️</span>Select
          </button>
        </div>
      </div>

      <div className="extras-section">
        <div className="section-left">
          <h4  style={{color:'black'}}>
            {/* Meals SVG Icon */}
            Meals
          </h4>
          <div className="section-description">
          Indulge in a delicious meal by selecting your preferred option from our in-flight menu, tailored to satisfy your taste.
          </div>
          <div className="section-details"></div>
        </div>
        <div className="section-right">
          <button
            className="edit-selection-button2"
            onClick={() => setActiveComponent('addMeals')}
          >
            <span className="icon">✏️</span>Select
          </button>
        </div>
      </div>

      <div className="extras-section">
        <div className="section-left">
          <h4 style={{color:'black'}}>
            {/* Baggage SVG Icon */}
            Baggage
          </h4>
          <div className="section-description">
            We’ve saved you time and selected a baggage allowance for you. 
          </div>
          <div className="section-details"></div>
        </div>
        <div className="section-right">
          <button
            className="edit-selection-button3"
            onClick={() => setActiveComponent('addBaggage')}
          >
            <span className="icon">✏️</span>Select
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="extras-page">
      <br />
      <FlightHeader />
      <br />
      {renderComponent()}
    </div>
  );
};

export default AddExtrasPages;
