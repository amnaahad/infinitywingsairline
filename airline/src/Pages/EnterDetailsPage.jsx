import React from 'react'
import FlightHeader from "../components/FlightHeader";
import PessengerInformation from '../components/PessengerInformation'

import '../css/EnterDetails.css'

const EnterDetailsPage = () => {
  return (
    <div>
        <br /><br />
        <FlightHeader />
        <br /><br />
      <PessengerInformation />
    </div>
  )
}

export default EnterDetailsPage
