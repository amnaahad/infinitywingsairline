import React, { useState } from 'react';

const GroupTravelForm = () => {
  const [formData, setFormData] = useState({
    fromCountry: '',
    toCountry: '',
    departureDate: '',
    adults: '',
    children: '',
    infants: '',
    groupName: '',
    groupType: '',
    passengers: '',
    flyingFrom: '',
    to: '',
    journeyType: '',
    departureTime: '',
    returnTime: '',
    cateringRequest: '',
    message: '',
    title: '',
    yourName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [airportOptions, setAirportOptions] = useState({
    from: [],
    to: []
  });

  const countryAirports = {
    Armenia: ["Zvartnots International Airport (EVN) - Yerevan"],
    Azerbaijan: ["Heydar Aliyev International Airport (GYD) - Baku"],
    Bahrain: ["Bahrain International Airport (BAH) - Manama"],
    Egypt: ["Cairo International Airport (CAI) - Cairo"],
    Georgia: ["Tbilisi International Airport (TBS) - Tbilisi"],
    Germany: ["Frankfurt Airport (FRA) - Frankfurt", "Munich Airport (MUC) - Munich"],
    Iran: ["Imam Khomeini International Airport (IKA) - Tehran"],
    Iraq: ["Baghdad International Airport (BGW) - Baghdad"],
    Italy: ["Leonardo da Vinci–Fiumicino Airport (FCO) - Rome"],
    Jordan: ["Queen Alia International Airport (AMM) - Amman"],
    Kazakhstan: ["Nursultan Nazarbayev International Airport (NQZ) - Nur-Sultan"],
    Kenya: ["Jomo Kenyatta International Airport (NBO) - Nairobi"],
    Kuwait: ["Kuwait International Airport (KWI) - Kuwait City"],
    Kyrgyzstan: ["Manas International Airport (FRU) - Bishkek"],
    Lebanon: ["Beirut-Rafic Hariri International Airport (BEY) - Beirut"],
    Malaysia: ["Kuala Lumpur International Airport (KUL) - Kuala Lumpur"],
    Maldives: ["Velana International Airport (MLE) - Malé"],
    Morocco: ["Mohammed V International Airport (CMN) - Casablanca"],
    Oman: ["Muscat International Airport (MCT) - Muscat"],
    Pakistan: ["Jinnah International Airport (KHI) - Karachi", "Allama Iqbal International Airport (LHE) - Lahore"],
    Qatar: ["Hamad International Airport (DOH) - Doha"],
    Russia: ["Sheremetyevo International Airport (SVO) - Moscow"],
    SaudiArabia: ["King Abdulaziz International Airport (JED) - Jeddah", "King Khalid International Airport (RUH) - Riyadh"],
    Somaliland: ["Hargeisa Egal International Airport (HGA) - Hargeisa"],
    Thailand: ["Suvarnabhumi Airport (BKK) - Bangkok"],
    Turkey: ["Istanbul Airport (IST) - Istanbul"],
    Uganda: ["Entebbe International Airport (EBB) - Entebbe"],
    UnitedArabEmirates: ["Dubai International Airport (DXB) - Dubai", "Abu Dhabi International Airport (AUH) - Abu Dhabi"],
    Uzbekistan: ["Islam Karimov Tashkent International Airport (TAS) - Tashkent"],
  };

  const countries = Object.keys(countryAirports);

  const handleCountryChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'fromCountry') {
      setAirportOptions({
        ...airportOptions,
        from: countryAirports[value] || []
      });
    } else if (name === 'toCountry') {
      setAirportOptions({
        ...airportOptions,
        to: countryAirports[value] || []
      });
    }
  };

  const validate = () => {
    let newErrors = {};
  
    if (!formData.fromCountry) newErrors.fromCountry = 'Please select a country.';
    if (!formData.toCountry) newErrors.toCountry = 'Please select a country.';
    if (!formData.departureDate) newErrors.departureDate = 'Please select a departure date.';
    if (!formData.adults || formData.adults < 1) newErrors.adults = 'Please enter a valid number of adults.';
    if (!formData.groupName) newErrors.groupName = 'Please enter the name of the group.';
    if (!formData.groupType) newErrors.groupType = 'Please select the type of group.';
    if (!formData.passengers || formData.passengers < 1) newErrors.passengers = 'Please enter the number of passengers.';
    if (!formData.flyingFrom) newErrors.flyingFrom = 'Please enter the departure airport.';
    if (!formData.to) newErrors.to = 'Please enter the destination.';
    if (!formData.journeyType) newErrors.journeyType = 'Please select the journey type.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.countryCode) newErrors.countryCode = 'Please enter the country code.';
    if (!formData.phoneNumber || !/^\d+$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Please enter a valid telephone number.';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Send form data to the server
        const response = await fetch('http://localhost:8002/api/groupTravel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        
        if (response.ok) {
          setSuccessMessage('Your request has been sent successfully!');
          console.log('Form submitted successfully!', result);

          // Clear form after submission
          setFormData({
            fromCountry: '',
            toCountry: '',
            departureDate: '',
            adults: '',
            children: '',
            infants: '',
            groupName: '',
            groupType: '',
            passengers: '',
            flyingFrom: '',
            to: '',
            journeyType: '',
            departureTime: '',
            returnTime: '',
            cateringRequest: '',
            message: '',
            title: '',
            yourName: '',
            email: '',
            countryCode: '',
            phoneNumber: '',
          });
        } else {
          console.error('Error submitting form:', result.message);
          setErrors({ submit: result.message });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: 'Error submitting form' });
      }
    }
  };
  const today = new Date().toISOString().split('T')[0];

  return (
    <div id="group-travel-form">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
            <h5 className="section-title px-3">Book a Flight</h5>
            <h4 className="mb-0">Group Flights, Premium Experience</h4>
          </div>
          <form className="group-travel-form" onSubmit={handleSubmit}>
     
            {/* Form Fields */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>From Country</label>
                <select name="fromCountry" value={formData.fromCountry} onChange={handleCountryChange}>
                  <option value="">Select a Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.fromCountry && <div className="error">{errors.fromCountry}</div>}
              </div>
              <div className="form-group col-md-6">
                <label>To Country</label>
                <select name="toCountry" value={formData.toCountry} onChange={handleCountryChange}>
                  <option value="">Select a Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.toCountry && <div className="error">{errors.toCountry}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Flying from</label>
                <select name="flyingFrom" value={formData.flyingFrom} onChange={handleChange}>
                  <option value="">Select your departure airport</option>
                  {airportOptions.from.map((airport, index) => (
                    <option key={index} value={airport}>
                      {airport}
                    </option>
                  ))}
                </select>
                {errors.flyingFrom && <div className="error">{errors.flyingFrom}</div>}
              </div>

              <div className="form-group col-md-6">
                <label>To</label>
                <select name="to" value={formData.to} onChange={handleChange}>
                  <option value="">Select your destination</option>
                  {airportOptions.to.map((airport, index) => (
                    <option key={index} value={airport}>
                      {airport}
                    </option>
                  ))}
                </select>
                {errors.to && <div className="error">{errors.to}</div>}
              </div>
            </div>

            <div className="form-row">
   <div className="form-group col-md-6">
                <label>Departure Date</label>
                <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} min={today} />
                {errors.departureDate && <div className="error">{errors.departureDate}</div>}
              </div>

              <div className="form-group col-md-6">
                <label>Return Date</label>
                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} min={formData.departureDate || today} />
                {errors.returnDate && <div className="error">{errors.returnDate}</div>}
              </div>
</div>

            <div className="form-row">
           
              <div className="form-group col-md-6">
                <label>Departure Time</label>
                <select name="departureTime" value={formData.departureTime} onChange={handleChange}>
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>Return Time</label>
                <select name="returnTime" value={formData.returnTime} onChange={handleChange}>
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Adults</label>
                <input type="number" name="adults" value={formData.adults} onChange={handleChange} min="1" />
                {errors.adults && <div className="error">{errors.adults}</div>}
              </div>

              <div className="form-group col-md-4">
                <label>Children</label>
                <input type="number" name="children" value={formData.children} onChange={handleChange} min="0" />
              </div>

              <div className="form-group col-md-4">
                <label>Infants</label>
                <input type="number" name="infants" value={formData.infants} onChange={handleChange} min="0" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Group Name</label>
                <input type="text" name="groupName" value={formData.groupName} onChange={handleChange} />
                {errors.groupName && <div className="error">{errors.groupName}</div>}
              </div>

              <div className="form-group col-md-6">
                <label>Group Type</label>
                <select name="groupType" value={formData.groupType} onChange={handleChange}>
                  <option value="">Select Type</option>
                  <option value="tourist">Tourist</option>
                  <option value="business">Business</option>
                  <option value="conference">Conference</option>
                  <option value="other">Other</option>
                </select>
                {errors.groupType && <div className="error">{errors.groupType}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Number of Passengers</label>
                <input type="number" name="passengers" value={formData.passengers} onChange={handleChange} min="1" />
                {errors.passengers && <div className="error">{errors.passengers}</div>}
              </div>

              <div className="form-group col-md-6">
                <label>Journey Type</label>
                <select name="journeyType" value={formData.journeyType} onChange={handleChange}>
                  <option value="">Select Journey Type</option>
                  <option value="oneWay">One Way</option>
                  <option value="roundTrip">Round Trip</option>
                </select>
                {errors.journeyType && <div className="error">{errors.journeyType}</div>}
              </div>
            </div>

            <div className="form-group">
              <label>Catering and Special Request</label>
              <textarea name="cateringRequest" value={formData.cateringRequest} onChange={handleChange} placeholder="E.g. allergies, dietary requirements"></textarea>
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message here"></textarea>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Your Contact Information</label>
                <div className="contact-group">
                  <select name="title" value={formData.title} onChange={handleChange}>
                    <option value="">Title</option>
                    <option value="mr">Mr.</option>
                    <option value="ms">Ms.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="dr">Dr.</option>
                  </select>
                 
                </div>
              </div>

              <div className="form-group col-md-6">
                <label>Your Name (Optional)</label>
                <input type="text" name="yourName" value={formData.yourName} onChange={handleChange} placeholder="Your name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>E-mail Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="form-group col-md-3">
                <label>Country Code</label>
                <input type="text" name="countryCode" value={formData.countryCode} onChange={handleChange} />
                {errors.countryCode && <div className="error">{errors.countryCode}</div>}
              </div>

              <div className="form-group col-md-3">
                <label>Telephone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
              </div>
            </div>

            <button type="submit">Submit</button>
            {successMessage && <div className="success-message">{successMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupTravelForm;