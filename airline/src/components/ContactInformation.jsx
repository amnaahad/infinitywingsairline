import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactInformation = () => {
  const navigate = useNavigate();

  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileDuringTravel, setMobileDuringTravel] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    if (country && email && mobile && mobileDuringTravel) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [country, email, mobile, mobileDuringTravel]);

  const handleAddExtras = () => {
    if (isFormComplete) {
      navigate('/add-extras');
    }
  };

  return (
    <div className="contact-info">
      <br></br>
      <h3>Contact Information</h3>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" checked readOnly />
          Adult 1 will be the contact person. The entered last name will be necessary for cancellation and modification.
        </label>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label>Country of Residence <span className="required">*</span></label>
          <input
            type="text"
            placeholder="Please Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <div className="mobile-group">
            <input
              type="text"
              placeholder="Country Code"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
       
              onChange={(e) => setMobileDuringTravel(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Mobile During Travel</label>
          <div className="mobile-group">
            <input
              type="text"
              placeholder="Country Code"
              value={mobile}
              onChange={(e) => setMobileDuringTravel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
         
              onChange={(e) => setMobileDuringTravel(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br/>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          I will keep the same mobile number during travel.
        </label>
        <label>
          <input type="checkbox" />
    We'll send you updates about our special offers, holidays, and inspiring news on flights and travel products.
        </label>
        <label>
          <input type="checkbox" />
          I would like to join <span className="rewards-highlight">WingPoints</span>, Infinity Wing's loyalty program.
        </label>
      </div>
      <button
        className="continue-btn"
        onClick={handleAddExtras}
        disabled={!isFormComplete} // Disable button if form is incomplete
      >
        Continue to Extras
      </button>
    </div>
  );
};

export default ContactInformation;
