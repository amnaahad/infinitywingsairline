import React, { useState } from 'react';
import  '../css/FlightStatus.css'

const FlightStatusPage = () => {
  const [searchBy, setSearchBy] = useState('route');

  return (
    <div className="flight-status-page">
      <div className="flight-status-form">
        <br></br>
        <br></br>
        <h2>Flight Status</h2>
        <div className="form-group">
          <label>Choose Date</label>
          <input type="date" placeholder="DD/MM/YYYY" />
        </div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="searchBy"
              checked={searchBy === 'route'}
              onChange={() => setSearchBy('route')}
            />
            Search by flight route
          </label>
          <label>
            <input
              type="radio"
              name="searchBy"
              checked={searchBy === 'number'}
              onChange={() => setSearchBy('number')}
            />
            Search by flight number
          </label>
        </div>
        {searchBy === 'route' ? (
          <div className="route-inputs">
            <div className="form-group">
              <label>Flying from</label>
              <input type="text" placeholder="Karachi (KHI)" />
            </div>
            <div className="form-group">
              <label>to</label>
              <input type="text" />
            </div>
          </div>
        ) : (
          <div className="form-group">
            <label>Flight Number</label>
            <input type="text" />
          </div>
        )}
        <button className="check-status-btn">Check Status</button>
      </div>

      <div className="flight-status-table">
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Date</th>
              <th>Departure Airport</th>
              <th>Arrival Airport</th>
              <th>Operated by</th>
              <th>Scheduled Departure Time</th>
              <th>Scheduled Arrival Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace these rows with dynamic content */}
            <tr>
              <td>G9543</td>
              <td>20/08/2024</td>
              <td>Karachi (KHI)</td>
              <td>Sharjah (SHJ)</td>
              <td>Air Arabia</td>
              <td>10:35</td>
              <td>11:35</td>
              <td>Flight Arrived at 11:37</td>
            </tr>
            <tr>
              <td>G9543</td>
              <td>20/08/2024</td>
              <td>Karachi (KHI)</td>
              <td>Sharjah (SHJ)</td>
              <td>Air Arabia</td>
              <td>10:35</td>
              <td>11:35</td>
              <td>Flight Arrived at 11:37</td>
            </tr>
            <tr>
              <td>G9543</td>
              <td>20/08/2024</td>
              <td>Karachi (KHI)</td>
              <td>Sharjah (SHJ)</td>
              <td>Air Arabia</td>
              <td>10:35</td>
              <td>11:35</td>
              <td>Flight Arrived at 11:37</td>
            </tr>
            <tr>
              <td>G9543</td>
              <td>20/08/2024</td>
              <td>Karachi (KHI)</td>
              <td>Sharjah (SHJ)</td>
              <td>Air Arabia</td>
              <td>10:35</td>
              <td>11:35</td>
              <td>Flight Arrived at 11:37</td>
            </tr>
            <tr>
              <td>G9543</td>
              <td>20/08/2024</td>
              <td>Karachi (KHI)</td>
              <td>Sharjah (SHJ)</td>
              <td>Air Arabia</td>
              <td>10:35</td>
              <td>11:35</td>
              <td>Flight Arrived at 11:37</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightStatusPage;
