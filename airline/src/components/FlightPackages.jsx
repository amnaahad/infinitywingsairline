import React, { useEffect } from "react";

const FlightPackages = ({ selectedPackage, onSelectPackage, ref, price }) => {
    const basicPrice = Math.round(price);
    const valuePrice = Math.round(price + (price * 0.30));
    const ultimatePrice = Math.round(price + (price * 0.50));

    const packages = [
        {
            id: 1,
            name: "Basic",
            price: basicPrice,
            included: [
                "10 Kg Carry-on Baggage"
            ],
            chargeable: [
                "Checked Baggage",
                "Meal, Seat",
                "Modification Fee (Min PKR 2500)",
                "Cancellation Fee (Min PKR 2500)"
            ],
            bestFor: "Our lowest fare"
        },
        {
            id: 2,
            name: "Value",
            price: valuePrice,
            included: [
                "10 Kg Carry-on Baggage",
                "23 Kg Checked Baggage",
                "Sandwich with water",
                "Free Seat (row 8 onwards)",
                "Free Modification (One Up to 24h)"
            ],
            chargeable: [
                "Cancellation Fee (Min PKR 2500)",
                "Checked Baggage"
            ],
            bestFor: "The essentials you need"
        },
        {
            id: 3,
            name: "Ultimate",
            price: ultimatePrice,
            included: [
                "15 Kg Carry-on Baggage",
                "46 Kg Checked Baggage",
                "Premium Meal",
                "2 Free Modification (Up to 6h)",
                "Free Cancellation (Up to 6h)",
                "50% Cash Refund (Up to 24h)",
                "Priority Check-In"
            ],
            chargeable: [
                "Checked Baggage"
            ],
            bestFor: "Best value for your money"
        }
    ];

    return (
        <div className="flight-packages" ref={ref}>
            {packages.map(pkg => (
                <div
    key={pkg.id}
    className={`package-option ${selectedPackage === pkg.id ? "selected" : ""}`}
    onClick={() => onSelectPackage(pkg)} // Pass the entire package object
>

                    <div className="package-header">
                        <h3>{pkg.name}</h3>
                        <p>{pkg.bestFor}</p>
                    </div>
                    <div className="package-details">
                        <h4>Included</h4>
                        <ul>
                            {pkg.included.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h4>Chargeable</h4>
                        <ul className="chargeable">
                            {pkg.chargeable.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="package-price">
                        <input
                            type="radio"
                            name="package"
                            value={pkg.id}
                            checked={selectedPackage === pkg.id}
                            onChange={() => onSelectPackage(pkg.id)}
                        />
                        <label>
                            Select
                        </label>
                        <p>{pkg.price}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default FlightPackages;
