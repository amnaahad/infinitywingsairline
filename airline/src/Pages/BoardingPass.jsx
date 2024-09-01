import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/BoardingPass.css';

const BoardingPass = () => {
  const { reservationId } = useParams();

  return (
    <>
    <br/><br/><br/>
    <div class="boarding-pass">
   
  <div class="boarding-pass-left">
  <div className="barcode barcode-left"></div>
  <div className="economy-class"><strong>ULTIMATE PACKAGE</strong></div>
  <div className="boarding-pass-header">
            <i className="material-icons">airplane_ticket</i> BOARDING PASS
          </div>
    <div class="boarding-pass-info">
      <div className="flex">
      <div>
      <p>PASSENGER: <strong>JOHN SMITH</strong></p>
      <p>FROM: <strong>NYC</strong></p>
      <p>TO: <strong>LA</strong></p>
      <p>FLIGHT: <strong>BA11122</strong></p>
      <p>DEPARTURE DATE: <strong>25 MAY</strong></p>
      <p>DEPARTURE TIME: <strong>20:10</strong></p>
      </div>

      <div class="seat-box">
        <p>SEAT</p>
        <p><strong>18C</strong></p>
        <p>ZONE 3</p>
        
      </div>
      </div>
      
      <div class="gate-info">
        <p>GATE CLOSES 15 MINUTES BEFORE DEPARTURE</p>
      </div>
    </div>

  </div>


  <div class="boarding-pass-right">
  <div className="barcode barcode-right"></div>

  <div className="boarding-pass-header">
            <i className="material-icons">airplane_ticket</i> BOARDING PASS
          </div>
    <div class="boarding-pass-info">
      <div>
      <div className="margin">
      <p>PASSENGER: <strong>JOHN SMITH</strong></p>
      <p>FROM: <strong>NYC</strong></p>
      <p>TO: <strong>LA</strong></p>
      <p>FLIGHT: <strong>BA11122</strong></p>
      <p>SEAT: <strong> 18C</strong></p>
      <p>GATE: <strong>B27</strong></p>
      <p>DEPARTURE DATE: <strong>25 MAY</strong></p>
      </div>
      </div>
    </div>
  </div>
</div>

<br/><br/><br/>
    </>
  );
};

export default BoardingPass;
