import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactInformation from './ContactInformation';

const PassengerInformation = () => {
  const location = useLocation();
  const { state } = location;

  const passengers = state?.passengers || {};
  const adults = passengers.adults || 1;
  const children = passengers.children || 0;
  const infants = passengers.infants || 0;

  const [activeTab, setActiveTab] = useState(1);
  const [adultForms, setAdultForms] = useState(Array(adults).fill({}));
  const [childForms, setChildForms] = useState(Array(children).fill({}));
  const [infantForms, setInfantForms] = useState(Array(infants).fill({}));
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isAllPassengersAdded, setIsAllPassengersAdded] = useState(false);
  const [currentSection, setCurrentSection] = useState('adults'); // Track current section (adults, children, or infants)

  useEffect(() => {
    console.log('adults:', adults, 'children:', children, 'infants:', infants);
    setAdultForms(Array(adults).fill({}));
    setChildForms(Array(children).fill({}));
    setInfantForms(Array(infants).fill({}));
    setActiveTab(1);
    setCurrentSection('adults');
  }, [adults, children, infants]);
  const saveToSessionStorage = () => {
    sessionStorage.setItem('adultForms', JSON.stringify(adultForms));
    sessionStorage.setItem('childForms', JSON.stringify(childForms));
    sessionStorage.setItem('infantForms', JSON.stringify(infantForms));
  };


  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    let updatedForms;

    if (currentSection === 'adults') {
      updatedForms = [...adultForms];
      updatedForms[activeTab - 1] = { ...updatedForms[activeTab - 1], [name]: value };
      setAdultForms(updatedForms);
    } else if (currentSection === 'children') {
      updatedForms = [...childForms];
      updatedForms[activeTab - 1] = { ...updatedForms[activeTab - 1], [name]: value };
      setChildForms(updatedForms);
    } else if (currentSection === 'infants') {
      updatedForms = [...infantForms];
      updatedForms[activeTab - 1] = { ...updatedForms[activeTab - 1], [name]: value };
      setInfantForms(updatedForms);
    }

    const currentForm = currentSection === 'adults'
      ? updatedForms[activeTab - 1]
      : currentSection === 'children'
        ? updatedForms[activeTab - 1]
        : updatedForms[activeTab - 1];
    const isComplete = currentForm.title && currentForm.firstName && currentForm.lastName && currentForm.nationality;
    setIsFormComplete(isComplete);
    saveToSessionStorage(); 
  };

  const handleNextPassenger = () => {
    if (currentSection === 'adults') {
      if (activeTab < adults) {
        setActiveTab((prevTab) => prevTab + 1);
        setIsFormComplete(false); // Reset form completion for the next passenger
      } else if (children > 0) { // Only move to children section if children > 0
        setCurrentSection('children');
        setActiveTab(1);
      } else if (infants > 0) { // Skip to infants if no children but infants exist
        setCurrentSection('infants');
        setActiveTab(1);
      } else {
        setIsAllPassengersAdded(true); // No children or infants, so all passengers are added
        console.log('All passengers added:', { adults: adultForms, children: childForms, infants: infantForms });
        saveToSessionStorage(); 
      }
    } else if (currentSection === 'children') {
      if (activeTab < children) {
        setActiveTab((prevTab) => prevTab + 1);
        setIsFormComplete(false); // Reset form completion for the next passenger
      } else if (infants > 0) { // Only move to infants section if infants > 0
        setCurrentSection('infants');
        setActiveTab(1);
      } else {
        setIsAllPassengersAdded(true); // No more sections, all passengers are added
        console.log('All passengers added:', { adults: adultForms, children: childForms, infants: infantForms });
        saveToSessionStorage(); 
      }
    } else if (currentSection === 'infants') {
      if (activeTab < infants) {
        setActiveTab((prevTab) => prevTab + 1);
        setIsFormComplete(false); // Reset form completion for the next passenger
      } else {
        setIsAllPassengersAdded(true);
        console.log('All passengers added:', { adults: adultForms, children: childForms, infants: infantForms });
        saveToSessionStorage(); 
      }
    }
  };
  

  const renderFormFields = () => {
    const currentFormData = currentSection === 'adults'
      ? adultForms[activeTab - 1] || {}
      : currentSection === 'children'
        ? childForms[activeTab - 1] || {}
        : infantForms[activeTab - 1] || {};

    return (
      <div className="form-section">
        <div className="form-group">
          <label>Title <span className="required">*</span></label>
          <select
            name="title"
            onChange={handleFieldChange}
            value={currentFormData.title || ''}
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr.</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs.</option>
            <option value="Dr">Dr.</option>
          </select>
        </div>
        <div className="form-group">
          <label>First Name <span className="required">*</span></label>
          <input
            type="text"
            name="firstName"
            placeholder={`Enter First Name for ${currentSection === 'adults' ? `Adult ${activeTab}` : currentSection === 'children' ? `Child ${activeTab}` : `Infant ${activeTab}`}`}
            onChange={handleFieldChange}
            value={currentFormData.firstName || ''}
          />
        </div>
        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input
            type="text"
            name="lastName"
            placeholder={`Enter Last Name for ${currentSection === 'adults' ? `Adult ${activeTab}` : currentSection === 'children' ? `Child ${activeTab}` : `Infant ${activeTab}`}`}
            onChange={handleFieldChange}
            value={currentFormData.lastName || ''}
          />
        </div>
        <div className="form-group">
          <label>Nationality <span className="required">*</span></label>
          <select
            name="nationality"
            onChange={handleFieldChange}
            value={currentFormData.nationality || ''}
          >
            <option value="">Please Select Nationality</option>
           
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Korea, North">Korea, North</option>
<option value="Korea, South">Korea, South</option>
<option value="Kosovo">Kosovo</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Sudan">South Sudan</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="Timor-Leste">Timor-Leste</option>
<option value="Togo">Togo</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Vatican City">Vatican City</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Vietnam</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            onChange={handleFieldChange}
            value={currentFormData.dob || ''}
          />
        </div>
        <div className="form-group">
          <label>Do you have WingPoints ID?</label>
          <div className="radio-group" onChange={handleFieldChange}>
            <label>
              <input
                type="radio"
                name="airrewards"
                value="yes"
             
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="airrewards"
                value="no"
               defaultChecked 
          
              />{' '}
              No
            </label>
          </div>
        </div>
      </div>
    );
  };

  const generateTabs = () => {
    const tabs = [];
    if (currentSection === 'adults') {
      for (let i = 1; i <= adults; i++) {
        tabs.push(
          <div
            key={`adult-${i}`}
            className={`ptab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            Adult {i}
          </div>
        );
      }
    } else if (currentSection === 'children') {
      for (let i = 1; i <= children; i++) {
        tabs.push(
          <div
            key={`child-${i}`}
            className={`ptab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            Child {i}
          </div>
        );
      }
    } else if (currentSection === 'infants') {
      for (let i = 1; i <= infants; i++) {
        tabs.push(
          <div
            key={`infant-${i}`}
            className={`ptab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            Infant {i}
          </div>
        );
      }
    }
    return tabs;
  };

  return (
    <div className="passenger-info">
      <h2>Enter Passenger Details</h2>
      <h3>Passenger Information</h3>
      {isAllPassengersAdded ? (
  <div className="success-message-container">
    <p className="success-message-text">All passengers details have been added successfully.</p>
    <ContactInformation />
  </div>
) : (
        <>
          <div className="passenger-tabs">
            {generateTabs()}
          </div>
          {renderFormFields()}
          <button
            className="next-passenger"
            onClick={handleNextPassenger}
            disabled={!isFormComplete}
          >
            {currentSection === 'infants' && activeTab === infants ? 'Finish' : 'Next Passenger'}
          </button>
          <br/><br/><br/>
        </>
      )}
    </div>
  );
};

export default PassengerInformation;
