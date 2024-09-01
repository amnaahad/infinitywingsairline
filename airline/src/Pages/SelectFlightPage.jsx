import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import DateCarousel from "../components/DateCarousel";
import FlightHeader from "../components/FlightHeader";
import FlightPackages from "../components/FlightPackages"

import '../css/SelectFlight.css'

// Dummy data representing flights

const datesData = [
    { day: "Monday", date: "10 Sep 2024", price: "PKR 128718" },
    { day: "Tuesday", date: "11 Sep 2024", price: "PKR 130000" },
    { day: "Wednesday", date: "12 Sep 2024", price: "PKR 125000" },
    { day: "Thursday", date: "13 Sep 2024", price: "PKR 128720" },
    { day: "Friday", date: "14 Sep 2024", price: "PKR 130718" },
    { day: "Saturday", date: "15 Sep 2024", price: "PKR 289718" },
    { day: "Sunday", date: "16 Sep 2024", price: "PKR 128720" },
    { day: "Monday", date: "17 Sep 2024", price: "PKR 128918" },
    { day: "Tuesday", date: "18 Sep 2024", price: "PKR 138918" },
    // Add more dates as needed
];


const SelectFlightPage = () => {
    const [selectedDate, setSelectedDate] = useState(datesData[0].date);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [currency, setCurrency] = useState('PKR');
    const [bookingDetails, setBookingDetails] = useState({});
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showPackages, setShowPackages] = useState(false);
    const [baggageInfo, setBaggageInfo] = useState(null);
    const [showSummary, setShowSummary] = useState(false); 
    const [resetKey, setResetKey] = useState(0);
    const [adultFare, setAdultFare] = useState(0);
    const [childFare, setChildFare] = useState(0);
    const [infantFare, setInfantFare] = useState(0);
    const [extraPrice, setExtraPrice] = useState(0);
    const [totalFare, setTotalFare] = useState(0);
    const [tax, setTax] = useState(0);
    const flightSummaryRef = useRef(null);

    const [flightsData, setFlightsData] = useState([]);

    useEffect(() => {
        const fetchFlightsData = async () => {
            try {
                const res = await fetch('http://localhost:8000/flightsData');
                const data = await res.json();
                setFlightsData(data);
            } catch (error) {
                console.log('Error fetching data');
            }
        };

        fetchFlightsData();

        const storedBookingDetails = sessionStorage.getItem('bookingDetails');
        const storedCurrency = sessionStorage.getItem('selectedCurrency');

        if (storedBookingDetails) {
            setBookingDetails(JSON.parse(storedBookingDetails));
        }
        if (storedCurrency) {
            setCurrency(storedCurrency);
        }
    }, []);

    const formatPrice = (price) => {
        if (currency === 'USD') {
            return `USD ${(parseInt(price.replace(/[^\d]/g, '')) / 280).toFixed(2)}`;
        }
        if (currency === 'EUR') {
            return `EUR ${(parseInt(price.replace(/[^\d]/g, '')) / 320).toFixed(2)}`;
        }
        return price;
    };
    
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setSelectedFlight(null);
        setShowPackages(false);
        setShowSummary(false); // Hide summary when date changes
    };

    const handleFlightSelection = (flightId) => {
        const selectedFlight = flightsData.find(flight => flight.id === flightId);
        if (selectedFlight) {
            setSelectedFlight(selectedFlight);

            // Extract the price from the selected flight and remove the currency symbol
            const flightPrice = parseInt(selectedFlight.price.replace(/[^\d]/g, ''));

            // Calculate fares based on the selected flight price
            setAdultFare(flightPrice);
            setChildFare(flightPrice * 0.5);
            setInfantFare(flightPrice * 0.1);
        }
    };

    const handleBookNow = () => {
        setShowPackages(true);
        if (flightSummaryRef.current) {
            flightSummaryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSelectPackage = (pkg) => {
        setShowSummary(true);
        setSelectedPackage(pkg.id);
        setExtraPrice(pkg.price || 0);
    
        // Extract both Checked Baggage and Carry-on Baggage
        const checkedBaggage = pkg.included.find(item => item.includes('Checked Baggage'));
        const carryOnBaggage = pkg.included.find(item => item.includes('Carry-on Baggage'));
    
        // Store both in sessionStorage
        const baggageInfo = {
            checked: checkedBaggage || 'None',
            carryOn: carryOnBaggage || 'None'
        };
        sessionStorage.setItem('baggageInfo', JSON.stringify(baggageInfo));
    };
    
    const filteredFlights = flightsData.filter(flight =>
        flight.date === selectedDate &&
        flight.departureCountry === bookingDetails.fromCountry &&
        flight.arrivalCountry === bookingDetails.toCountry
    );

    const calculateFare = (passengerType, count) => {
        if (passengerType === 'adult') {
            return adultFare * count;
        } else if (passengerType === 'child') {
            return childFare * count;
        } else if (passengerType === 'infant') {
            return infantFare * count;
        }
        return 0;
    };
    const navigate = useNavigate();

const handleContinue = () => {
  navigate('/enter-details', {
        state: {
        passengers: {
        adults: bookingDetails.passengers.adults,
        children: bookingDetails.passengers.children,
        infants: bookingDetails.passengers.infants,
      },
    },
  });
};
    useEffect(() => {
        const total =
            calculateFare('adult', bookingDetails.passengers?.adults || 0) +
            calculateFare('child', bookingDetails.passengers?.children || 0) +
            calculateFare('infant', bookingDetails.passengers?.infants || 0);
        
        setTotalFare(total);
        setTax(extraPrice - total);
        // Store the price summary in sessionStorage
        sessionStorage.setItem('priceSummary', JSON.stringify({
            totalFare: totalFare,
            tax: tax,
            extraPrice: extraPrice,
            currency: currency,
        }));
     
       
    }, [adultFare, childFare, infantFare, extraPrice, bookingDetails]);

    useEffect(() => {
        if (selectedFlight) {
            sessionStorage.setItem('flightSummary', JSON.stringify({
                flightCode: selectedFlight.flightCode,
                departureTime: selectedFlight.departureTime,
                arrivalTime: selectedFlight.arrivalTime,
                date: selectedFlight.date,
                fromCountry: bookingDetails.fromCountry,
                toCountry: bookingDetails.toCountry,
            }));
        }
    }, [selectedFlight]);


    return (
        <>
            <br /><br />
            <FlightHeader />

            <div className="select-flight bg-white">
                <DateCarousel
                    dates={datesData}
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                />

                <h1><center>Select Flight From {bookingDetails.fromCountry} to {bookingDetails.toCountry}</center></h1>
                {showPackages && (
                    <FlightPackages
                    price={totalFare}
                    ref={flightSummaryRef}
                    key={resetKey} // Add key to force re-render
                    selectedPackage={selectedPackage}
                    onSelectPackage={handleSelectPackage}
                    />

                )}

                <div className="flight-optionss">
                    {filteredFlights.length === 0 ? (
                        <div className="no-flights-message">
                            <p>No flights available for the selected route and date.</p>
                        </div>
                    ) : (
                        filteredFlights.map((flight) => (
                            <div
                                key={flight.id}
                                className={`flight-option ${selectedFlight?.id === flight.id ? "selected" : ""}`}
                                onClick={() => handleFlightSelection(flight.id)}
                            >
                                <div className="flight-time">
                                    <span>{flight.departureTime}</span>
                                    <span>{flight.arrivalTime}</span>
                                </div>
                                <div className="flight-details">
                                    <p>{flight.duration} / {flight.stops} {flight.stops > 1 ? 'stops' : 'stop'}</p>
                                    <p>{flight.airline} - {flight.flightCode}</p>
                                    {flight.operatedBy && <p>Operated by {flight.operatedBy}</p>}

                                    {flight.stops > 0 && (
                                        <div className="flight-stops">
                                            {flight.stopLocations && flight.stopDurations && flight.stopLocations.map((location, index) => (
                                                <p key={index}>
                                                    Stop {index + 1}: {location} for {flight.stopDurations[index]}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flight-price">
                                    <p>Price: {formatPrice(flight.price)}</p>
                                    <button className="book-now" onClick={handleBookNow}>Book Now</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <br /><br />
                
                {showSummary &&(
                    <>
                    <h1><center>Summary of Your Selection</center></h1>
                <div className="summary-container">
                    <div className="price-summary">
                        <h4>
                            Price Breakdown for
                            {bookingDetails.passengers?.adults > 0 ? ` ${bookingDetails.passengers.adults} Adult${bookingDetails.passengers.adults > 1 ? 's' : ''}` : ''}
                            {bookingDetails.passengers?.children > 0 ? `, ${bookingDetails.passengers.children} Child${bookingDetails.passengers.children > 1 ? 'ren' : ''}` : ''}
                            {bookingDetails.passengers?.infants > 0 ? `, ${bookingDetails.passengers.infants} Infant${bookingDetails.passengers.infants > 1 ? 's' : ''}` : ''}
                        </h4>

                        {bookingDetails.passengers?.adults > 0 && (
                            <div>
                                <span>{bookingDetails.passengers.adults > 0 ? ` ${bookingDetails.passengers.adults} x Adult${bookingDetails.passengers.adults > 1 ? 's' : ''}` : ''}: </span>
                                <span>{formatPrice(adultFare.toString())}</span>
                            </div>
                        )}
                        {bookingDetails.passengers?.children > 0 && (
                            <div>
                                <span>{bookingDetails.passengers.children > 0 ? ` ${bookingDetails.passengers.children} x Child${bookingDetails.passengers.children > 1 ? 'ren' : ''}` : ''}: </span>
                                <span>{Math.round(formatPrice(childFare.toString()))}</span>
                            </div>
                        )}
                        {bookingDetails.passengers?.infants > 0 && (
                            <div>
                                <span>{bookingDetails.passengers.infants > 0 ? ` ${bookingDetails.passengers.infants} x Infant${bookingDetails.passengers.infants > 1 ? 's' : ''}` : ''}: </span>
                                <span>{Math.round(formatPrice(infantFare.toString()))}</span>
                            </div>
                        )}
                        {selectedPackage && (
                            <div>
                                <span>Airport Tax & Surcharge: {selectedPackage.name}:</span>
                                <span>{formatPrice(tax.toString())}</span>
                            </div>
                        )}


                        <div>
                            <strong>Total all inclusive:</strong>
                            <span>{formatPrice((totalFare + extraPrice).toString())}</span>
                        </div>


                    </div>

                    <div className="flight-summary">
                        <div className="flight-summary-details">
                            <h4> {bookingDetails.fromCountry} to {bookingDetails.toCountry}</h4>
                            <p>Flight Code: {selectedFlight?.flightCode}</p>
                            <p>Departure: {selectedFlight?.date} {selectedFlight?.departureTime}</p>
                            <p>Arrival: {selectedFlight?.date} {selectedFlight?.arrivalTime}</p>
                        </div>
                    </div>
                </div>
                 {/* Add the "Continue to Passenger Details" button */}
            <div className="continue-button-container">
                <button className="continue-button" onClick={handleContinue}>
                    Continue to Passenger Details 
                </button>
            </div>  
                    </>
                )}
                    
            </div>
        </>
    );
};

export default SelectFlightPage;