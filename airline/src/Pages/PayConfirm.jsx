import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlightHeader from '../components/FlightHeader';
import '../css/PayConfirm.css';

const PayConfirm = () => {
  const navigate = useNavigate();
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [errors, setErrors] = useState({});
  const [flightSummary, setFlightSummary] = useState({});
  const [priceSummary, setPriceSummary] = useState({});
  const [bookingDetails, setBookingDetails] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [reservationId, setReservationId] = useState('');

  const paymentMethods = [
    { name: 'mastercard', icon: 'https://cdn-icons-png.flaticon.com/512/733/733250.png' },
    { name: 'visa', icon: 'https://cdn-icons-png.flaticon.com/512/733/733247.png' },
    { name: 'link', icon: 'https://cdn-icons-png.flaticon.com/512/733/733275.png' },
    { name: 'nayapay', icon: 'https://cdn-icons-png.flaticon.com/512/733/733591.png' },
  ];
  const bookingId = sessionStorage.getItem('bookingId');
  console.log('Booking ID:', bookingId);
  

  useEffect(() => {
    const storedFlightSummary = sessionStorage.getItem('flightSummary');
    const storedPriceSummary = sessionStorage.getItem('priceSummary');
    const storedBookingDetails = sessionStorage.getItem('bookingDetails');
    const storedTotalBill = sessionStorage.getItem('totalBill');
    
    if (storedFlightSummary) {
      setFlightSummary(JSON.parse(storedFlightSummary));
    }
    if (storedPriceSummary) {
      const parsedPriceSummary = JSON.parse(storedPriceSummary);
      setPriceSummary(parsedPriceSummary);
      const extraPrice = parseInt(parsedPriceSummary.extraPrice) || 0;
      const totalBill = parseInt(storedTotalBill) || 0;
      setTotalPrice(extraPrice + totalBill); // Calculate the total price
    }
    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    }

    // Generate and set a unique reservation ID
    const generateReservationId = () => {
      const id = 'RES' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      setReservationId(id);
    };

    generateReservationId();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!cardNumber) newErrors.cardNumber = 'Card number is required.';
    if (!expirationMonth) newErrors.expirationMonth = 'Expiration month is required.';
    if (!expirationYear) newErrors.expirationYear = 'Expiration year is required.';
    if (!securityCode) newErrors.securityCode = 'Security code is required.';
    if (!nameOnCard) newErrors.nameOnCard = 'Name on card is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const months = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
  ];

  const years = [];
  for (let i = 0; i < 12; i++) {
    const year = 2024 + i;
    years.push(year.toString());
  }
  const handleConfirmPayment = async () => {
    if (validateForm()) {
      try {
        const bookingId = sessionStorage.getItem('bookingId');
        const response = await fetch('http://localhost:8002/api/reservations', {
          method: 'POST',
          
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ reservationId, bookingId }),
        });
        
        if (!response.ok) {
          throw new Error('Error saving reservation ID');
        }

        // Proceed with payment processing
        navigate('/booked'); // Redirect to Booked page
      } catch (error) {
        console.error('Error:', error);
        // Optionally handle the error
      }
    }
  };


  return (
    <div className="pageContainer">
      <FlightHeader />
      <br />
      <br />
      <div className="contentContainer">
      
          <br />
          <div className="reservationSummary">
            <br />
            <h2 className="sectionTitle">Reservation Summary</h2>
            <div className="flightDetails">
              <div className='Flight-Summary'>
                <h3 className="subHeader">
                  {bookingDetails.fromCountry && bookingDetails.toCountry
                    ? `${bookingDetails.fromCountry} to ${bookingDetails.toCountry}`
                    : 'Flight Route'}
                </h3>
                <p className="text">{flightSummary.flightCode || 'Flight Code'}</p>
                <p className="text">{flightSummary.departureTime || 'Departure Time'}</p>
                <p className="text">{flightSummary.arrivalTime || 'Arrival Time'}</p>
                {/* Add additional flight details if available */}
              </div>
              <div className='Price-Summary'>
                Price Breakdown for
                {bookingDetails.passengers?.adults > 0 ? ` ${bookingDetails.passengers.adults} Adult${bookingDetails.passengers.adults > 1 ? 's' : ''}` : ''}
                {bookingDetails.passengers?.children > 0 ? `, ${bookingDetails.passengers.children} Child${bookingDetails.passengers.children > 1 ? 'ren' : ''}` : ''}
                {bookingDetails.passengers?.infants > 0 ? `, ${bookingDetails.passengers.infants} Infant${bookingDetails.passengers.infants > 1 ? 's' : ''}` : ''}
                <p className="text">Total Fare : {priceSummary.currency}{priceSummary.totalFare || 'totalFare'}</p>
                <p className="text">Airport Tax & Surcharge : {priceSummary.currency}{priceSummary.tax || 'Tax & Surcharge'}</p>
                <h3 className="totalPrice">Total All Inclusive: <br />  {priceSummary.currency} {totalPrice || 'Total Price'}</h3>
              </div>
            </div>
            <div className="reservationIdContainer">
              <h4 className="reservationIdLabel">Reservation ID:</h4>
              <p className="reservationIdValue">{reservationId}</p>
            </div>
          </div>
   

        <div className="mainContent">
          <div className="paymentOptions">
            <h3 className="sectionTitle">Would You Like to Pay Using Your Air Rewards Points?</h3>
            <div className="radioGroup">
              <label className="radioLabel">
                <input type="radio" id="yes" name="points" value="yes" required />
                Yes
              </label>
              <label className="radioLabel">
                <input type="radio" id="no" name="points" value="no" defaultChecked required />
                No
              </label>
            </div>

            <h3 className="sectionTitle">Would You Like to Pay Using Voucher or Credit from Your Earlier Reservation?</h3>
            <div className="radioGroup">
              <label className="radioLabel">
                <input type="radio" id="voucher-yes" name="voucher" value="yes" required />
                Yes
              </label>
              <label className="radioLabel">
                <input type="radio" id="voucher-no" name="voucher" value="no" defaultChecked required />
                No
              </label>
            </div>
          </div>

          <div>
            <h3 className="sectionTitle">Please Select Your Payment Method</h3>
            <div className="paymentMethodOptions">
              {paymentMethods.map((method) => (
                <label
                  key={method.name}
                  className={`paymentMethodLabel ${hoveredMethod === method.name ? 'paymentMethodLabelHover' : ''} ${selectedMethod === method.name ? 'paymentMethodSelected' : ''}`}
                  onMouseEnter={() => setHoveredMethod(method.name)}
                  onMouseLeave={() => setHoveredMethod(null)}
                  onClick={() => setSelectedMethod(method.name)}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.name}
                    className="radioInput"
                    required
                  />
                  <img src={method.icon} alt={method.name} className="paymentMethodImg" />
                  <p className="paymentMethodText">
                    {method.name.charAt(0).toUpperCase() + method.name.slice(1)} (PKR)
                  </p>
                </label>
              ))}
            </div>
            {errors.selectedMethod && <p className="errorText">{errors.selectedMethod}</p>}
          </div>

          <div className="cardDetails">
            <label className="inputLabel">
              Card Number
              <input
                type="text"
                className="inputField"
                placeholder="Enter your card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              {errors.cardNumber && <p className="errorText">{errors.cardNumber}</p>}
            </label>
            <div className="expirationSecurity">
              <label className="inputLabel">
                Expiration Month
                <select
                  className="inputField"
                  value={expirationMonth}
                  onChange={(e) => setExpirationMonth(e.target.value)}
                  required
                >
                  <option value="">Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                {errors.expirationMonth && <p className="errorText">{errors.expirationMonth}</p>}
              </label>

              <label className="inputLabel">
                Expiration Year
                <select
                  className="inputField"
                  value={expirationYear}
                  onChange={(e) => setExpirationYear(e.target.value)}
                  required
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.expirationYear && <p className="errorText">{errors.expirationYear}</p>}
              </label>

              <label className="inputLabel">
                Security Code
                <input
                  type="password"
                  className="inputField"
                  placeholder="Enter the security code"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                  required
                />
                {errors.securityCode && <p className="errorText">{errors.securityCode}</p>}
              </label>
            </div>
            <label className="inputLabel">
              Name on Card
              <input
                type="text"
                className="inputField"
                placeholder="Enter the name on card"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
              />
              {errors.nameOnCard && <p className="errorText">{errors.nameOnCard}</p>}
            </label>
          </div>

          <button
            type="button"
            className="confirmButton"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
