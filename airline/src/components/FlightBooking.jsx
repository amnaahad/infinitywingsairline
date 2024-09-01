import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {
    const [tripType, setTripType] = useState('oneWay');
    const [selectedFromCountry, setSelectedFromCountry] = useState('');
    const [selectedToCountry, setSelectedToCountry] = useState('');
    const [fromAirports, setFromAirports] = useState([]);
    const [toAirports, setToAirports] = useState([]);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [generalMessage, setGeneralMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState({});
    const [fare, setFare] = useState(15655.00);
    const [tax, setTax] = useState(5992.90);
    const [total, setTotal] = useState(21647.90);
    const [countryAirports, setCountryAirports] = useState({});
    const [currency, setCurrency] = useState('PKR');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [fromAirport, setFromAirport] = useState('');
    const [toAirport, setToAirport] = useState('');

    const navigate = useNavigate();

    const adultFare = 15655.00;
    const childFare = 15655.00;
    const infantFare = 1565.50;

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const res = await fetch('http://localhost:8000/airports');
                const data = await res.json();
                setCountryAirports(data);
            } catch (error) {
                console.error('Error fetching airports:', error);
            }
        };
        fetchAirports();
    }, []);

    useEffect(() => {
        calculateFare();
    }, [adults, children, infants]);

    const handleFromCountryChange = (e) => {
        const country = e.target.value;
        setSelectedFromCountry(country);
        setFromAirports(countryAirports[country] || []);
    };

    const handleToCountryChange = (e) => {
        const country = e.target.value;
        setSelectedToCountry(country);
        setToAirports(countryAirports[country] || []);
    };

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const calculateFare = () => {
        const totalFare = (adults * adultFare) + (children * childFare) + (infants * infantFare);
        setFare(totalFare);
        setTotal(totalFare + tax);
    };

    const handleSearchFlightClick = async (e) => {
        e.preventDefault();

        const messages = {};

        if (!selectedFromCountry) {
            messages.fromCountry = "Please select a departure country.";
        }

        if (!selectedToCountry) {
            messages.toCountry = "Please select a destination country.";
        }

        if (!fromAirport) {
            messages.fromAirport = "Please select a departure airport.";
        }

        if (!toAirport) {
            messages.toAirport = "Please select a destination airport.";
        }

        if (!departDate) {
            messages.depart = "Please select a departure date.";
        }

        if (tripType === 'returnTrip' && !returnDate) {
            messages.return = "Please select a return date.";
        }

        if (Object.keys(messages).length > 0) {
            setValidationMessages(messages);
            setGeneralMessage("Please fill in all the required fields.");
            return;
        }

        sessionStorage.setItem('selectedCurrency', currency);
        sessionStorage.setItem('bookingDetails', JSON.stringify({
            fromCountry: selectedFromCountry,
            toCountry: selectedToCountry,
            fromAirport: fromAirport,
            toAirport: toAirport,
            departDate: departDate,
            returnDate: returnDate,
            tripType: tripType,
            fare: fare,
            tax: tax,
            total: total,
            currency: currency,
            passengers: {
                adults: adults,
                children: children,
                infants: infants,
            }
        }));

        const bookingDetails = {
            fromCountry: selectedFromCountry,
            toCountry: selectedToCountry,
            fromAirport: fromAirport,
            toAirport: toAirport,
            departDate: departDate,
            returnDate: returnDate,
            tripType: tripType,
            fare: fare,
            tax: tax,
            total: total,
            currency: currency,
            passengers: {
                adults: adults,
                children: children,
                infants: infants,
            }
        };

        try {
            const response = await fetch('http://localhost:8002/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Booking saved successfully with ID:', result.bookingId);
                sessionStorage.setItem('bookingId', result.bookingId); // Store booking ID in session storage
                navigate('/select-flight');
            } else {
                console.log('Error saving booking');
            }
        } catch (error) {
            console.error('Error connecting to server:', error);
        }
    };

    // Get today's date in 'YYYY-MM-DD' format
    const today = new Date().toISOString().split('T')[0];
    const greyBorderStyle = { borderColor: '#6c757d', borderWidth: '1px', borderStyle: 'solid' };

    return (
        <div id="group-travel-form">
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ width: '900px' }}>
                        <h5 className="section-title px-3">Book a Flight</h5>
                        <h4 className="mb-0">Plan Your Journey</h4>
                    </div>

                    <form className="group-travel-form" onSubmit={handleSearchFlightClick} style={{ maxWidth: '1000px' }}>
                        <div className="form-row">
                        <div className="form-group col-md-3">
                                <label htmlFor="fromCountry">From Country<span className='req'>*</span></label>
                                <select className="form-select" id="fromCountry" aria-label="From Country" onChange={handleFromCountryChange} style={greyBorderStyle} value={selectedFromCountry}>
                                    <option value="">Select a Country</option>
                                    {Object.keys(countryAirports).map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {validationMessages.fromCountry && (
                                    <div className="text-danger">{validationMessages.fromCountry}</div>
                                )}
                            </div>

                            {selectedFromCountry && (
                             <div className="form-group col-md-3">
                                    <label htmlFor="fromAirport">From Airport<span className='req'>*</span></label>
                                    <select className="form-select" id="fromAirport" aria-label="From Airport" style={greyBorderStyle} value={fromAirport} onChange={(e) => setFromAirport(e.target.value)}>
                                        <option value="">Select an Airport</option>
                                        {fromAirports.map((airport, index) => (
                                            <option key={index} value={airport}>
                                                {airport}
                                            </option>
                                        ))}
                                    </select>
                                    {validationMessages.fromAirport && (
                                        <div className="text-danger">{validationMessages.fromAirport}</div>
                                    )}
                                </div>
                            )}

<div className="form-group col-md-3">
                                <label htmlFor="toCountry">To Country<span className='req'>*</span></label>
                                <select className="form-select" id="toCountry" aria-label="To Country" onChange={handleToCountryChange} style={greyBorderStyle} value={selectedToCountry}>
                                    <option value="">Select a Country</option>
                                    {Object.keys(countryAirports).map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {validationMessages.toCountry && (
                                    <div className="text-danger">{validationMessages.toCountry}</div>
                                )}
                            </div>

                            {selectedToCountry && (
                                <div className="form-group col-md-3">
                                    <label htmlFor="toAirport">To Airport<span className='req'>*</span></label>
                                    <select className="form-select" id="toAirport" aria-label="To Airport" style={greyBorderStyle} value={toAirport} onChange={(e) => setToAirport(e.target.value)}>
                                        <option value="">Select an Airport</option>
                                        {toAirports.map((airport, index) => (
                                            <option key={index} value={airport}>
                                                {airport}
                                            </option>
                                        ))}
                                    </select>
                                    {validationMessages.toAirport && (
                                        <div className="text-danger">{validationMessages.toAirport}</div>
                                    )}
                                </div>
                            )}

                            
<div className="form-group col-md-3">
                                <label htmlFor="departDate">Departure Date<span className='req'>*</span></label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="departDate"
                                    value={departDate}
                                    onChange={(e) => setDepartDate(e.target.value)}
                                    min={today}
                                    style={greyBorderStyle}
                                />
                                {validationMessages.depart && (
                                    <div className="text-danger">{validationMessages.depart}</div>
                                )}
                            

                            {tripType === 'returnTrip' && (
                              <div>
                                    <label htmlFor="returnDate">Return Date<span className='req'>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="returnDate"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        min={departDate || today}
                                        style={greyBorderStyle}
                                    />
                                    {validationMessages.return && (
                                        <div className="text-danger">{validationMessages.return}</div>
                                    )}
                                </div>

                            )}
</div>
                               

<div className="form-group col-md-3">
    <label htmlFor="adults">Adults<span className='req'>*</span></label>
    <input type="number" className="form-control" id="adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))} min="1" max="9" style={greyBorderStyle} />
</div>

<div className="form-group col-md-3">
    <label htmlFor="children">Children</label>
    <input type="number" className="form-control" id="children" value={children} onChange={(e) => setChildren(Number(e.target.value))} min="0" max="7" style={greyBorderStyle} />
</div>

<div className="form-group col-md-3">
    <label htmlFor="infants">Infants</label>
    <input type="number" className="form-control" id="infants" value={infants} onChange={(e) => setInfants(Number(e.target.value))} min="0" max="1" style={greyBorderStyle} />
</div>
</div>
                        <div className="form-group col-md-3">
                                        <label htmlFor="currency">Currency</label>
                                        <select className="form-select" id="currency" aria-label="Currency" style={greyBorderStyle} value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                            <option value="PKR">PKR</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="AED">AED</option>
                                            <option value="AMD">AMD</option>
                                            <option value="INR">INR</option>
                                        </select>
                                    </div>  
                                    
                                    <div className="form-group col-md-3">
                <label>Journey Type</label>
                <select name="tripType" onChange={handleTripTypeChange}>
                  <option value="">Select Type</option>
                  <option value="oneWay">One Way</option>
                  <option value="returnTrip">Return Trip</option>
                </select>
                
              
        </div>

                                    <div className="form-group col-md-3">
                                        <label htmlFor="promoCode">Promo Code</label>
                                        <input type="text" className="form-control" id="promoCode" placeholder="Enter Promo Code" style={greyBorderStyle} />
                                    </div>
                                    <div className="col-md-12">
                                        {generalMessage && (
                                            <div className="alert alert-danger">
                                                {generalMessage}
                                            </div>
                                        )}
                        </div>
                            <button type="submit" >Search</button>
                        

                        {generalMessage && (
                            <div className="text-danger text-center mt-3">{generalMessage}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FlightBooking;
