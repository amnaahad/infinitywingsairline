import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Hero2 from '../components/Hero2'
import img1 from '../assets/img/faq.jpg';// Import Font Awesome CSS
import '../css/FAQs.css'

const FAQsPage = () => {
  const [activeTab, setActiveTab] = useState('Booking');
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const renderFAQContent = (faq) => {
    switch (faq) {
      case 'Fare types':
        return (
          <div>
            <h6>Fare types</h6>
            <p><strong>What are the available fare types?</strong></p>
            <p>Fly Jinnah offers Basic, Value, Value Flex, and Ultimate fare options.</p>
            <p><strong>What does the Basic fare offer?</strong></p>
            <p>This is the cheapest fare on most flights and includes a 10 kg handbag. Additional baggage allowance and other services, including seats and meals, can be purchased separately.</p>
            <p><strong>What does the Value fare offer?</strong></p>
            <p>The price includes a 10 kg handbag, 23 kg checked baggage, a sandwich with water, seat selection from row 8 onwards (subject to change without prior notice), and 1 modification up to 24 hours. These services can be upgraded, and more services can be added at an additional cost.</p>
            <p><strong>What does the Value Flex fare offer?</strong></p>
            <p>It is the most popular fare option. The price includes a 10 kg handbag, 23 kg checked baggage, a hot meal with a soft drink, seat selection from row 8 onwards (subject to change without prior notice), 1 modification up to 6 hours, and cancellation up to 6 hours. These services can be upgraded, and more services can be added at an additional cost.</p>
            <p><strong>What does the Ultimate fare type offer?</strong></p>
            <p>This fare includes a 10 kg handbag, 46 kg checked baggage, a choice of any meal from our exclusive menu (including salad, drink, and dessert), choice of any seat including the front row seat (subject to change without prior notice), 2 modifications up to 6 hours, cancellation up to 6 hours, 50% cash refund (up to 24 hours), and priority check-in. Additional services can be purchased separately.</p>
          </div>
        );
      case 'Duplicate payments':
        return (
          <div>
            <h6>Duplicate payments</h6>
            <p>If your debit or credit card is debited multiple times for the same booking, in most cases, our system will automatically refund the extra amount. If you are not refunded automatically, please contact us through any of the customer support channels, and our staff will assist you.</p>
          </div>
        );
      case 'Army Concession Vouchers':
        return (
          <div>
            <h6>Army Concession Vouchers</h6>
            <p><strong>APW ticket for the Army:</strong> To get the APW ticket for the Army, please visit our Sales Office with the following documents:</p>
            <ul>
              <li>Original APW voucher along with its duplicate copy</li>
              <li>Move order letter</li>
              <li>Move sanction letter</li>
            </ul>
            <p><strong>APW ticket for the Navy and Airforce:</strong> To get the APW ticket for the Navy and Airforce, please visit our Sales Office with the following documents:</p>
            <ul>
              <li>Original APW voucher along with its duplicate copy</li>
              <li>Move sanction letter</li>
            </ul>
            <p><strong>TAC ticket:</strong> To get the TAC ticket, please visit our Sales Office carrying the original APW voucher along with its duplicate copy.</p>
            <p><strong>Terms and conditions for vouchers:</strong> All vouchers must be valid for 30 days from the date of issuance, must not be torn, and must have a signature and stamp. Name changes are not allowed for both APW and TAC tickets.</p>
          </div>
        );
      case 'Booking confirmation':
        return (
          <div>
            <h6>Booking confirmation</h6>
            <p>Once you have paid for your reservation and a reservation number is generated/an e-ticket is sent to your email, your booking is considered confirmed, and there is no need to contact us for any validation.</p>
          </div>
        );
      case 'Refund':
        return (
          <div>
            <h6>Refund</h6>
            <p>Fly Jinnah does not have a refund policy. Instead, the amount that you have paid will be retained in the form of Fly Jinnah Credit after deducting the cancellation charges and all of the other applied charges. The passenger will be able to use this amount on future flights that fall within one year from the payment date.</p>
          </div>
        );
      case 'Cancellations':
        return (
          <div>
            <h6>Cancellations</h6>
            <p>You can cancel your reservation online, by contacting the Fly Jinnah call center, or by visiting our sales offices and partner travel agents. Your reservation number will be required for this process, and a cancellation fee will be applied.</p>
            <p>You can cancel your reservation up to 24 hours before the scheduled departure time if you hold a Basic Fare. However, if you purchased Flexi, you will be able to do the cancellation up to 6 hours before the scheduled departure time without any cancellation charge.</p>
            <p>Some reservations are not eligible for cancellations, such as Promotional Tickets, Free Tickets, etc.</p>
          </div>
        );
      case 'Payments':
        return (
          <div>
            <h6>Payments</h6>
            <p><strong>Ways to Pay:</strong></p>
            <ul>
              <li><strong>Online payment:</strong> Pay online through credit/debit card. Click here to retrieve your booking and then click on the "Make Payment" button.</li>
              <li><strong>Contact center:</strong> Call our contact center and provide your reservation number (PNR). If you don't have a booking yet, the contact center can create one for you.</li>
              <li><strong>Cash:</strong> Cash payments can be accepted at our sales offices, partner travel agents, and at the airports prior to departure.</li>
            </ul>
            <p><strong>Payment Methods:</strong></p>
            <ul>
              <li><strong>Mastercard:</strong> International Master debit and credit cards are accepted in supported payment currencies.</li>
              <li><strong>Visa:</strong> International Visa debit and credit cards are accepted in supported payment currencies.</li>
            </ul>
          </div>

        );
         // At the Airport FAQs
      case 'Check-in procedures':
        return (
          <div>
            <h3>Check-in procedures</h3>
            <p>Passengers are advised to arrive at the airport at least 2 hours before the scheduled departure time. Please ensure you have your ticket, valid ID, and any necessary travel documents ready for the check-in process.</p>
            <p>Check-in counters generally close 45 minutes before the flight's departure time, so make sure to check in early to avoid any last-minute rush.</p>
          </div>
        );
      case 'Missed flights':
        return (
          <div>
            <h3>Missed flights</h3>
            <p>If you miss your flight, please contact the airline's customer service as soon as possible. Depending on the fare type, you may be eligible for rebooking on the next available flight or a refund, though cancellation and no-show fees may apply.</p>
          </div>
        );
      // ... other At the Airport FAQs ...

      // Baggage FAQs
      case 'Carry-on baggage':
        return (
          <div>
            <h3>Carry-on baggage</h3>
            <p>Passengers are allowed one carry-on bag with a maximum weight of 10 kg and dimensions not exceeding 55 cm x 40 cm x 20 cm. Additionally, passengers can carry a small personal item such as a laptop bag, handbag, or briefcase.</p>
          </div>
        );
      case 'Checked baggage':
        return (
          <div>
            <h3>Checked baggage</h3>
            <p>The checked baggage allowance depends on your fare type. Typically, it ranges from 23 kg to 46 kg. Please check your fare details for the exact baggage allowance and ensure your bags meet the weight and size limits to avoid additional charges.</p>
          </div>
        );
      // ... other Baggage FAQs ...

      // Onboard FAQs
      case 'Smoking and drinking':
        return (
          <div>
            <h3>Smoking and drinking</h3>
            <p>Smoking, including the use of electronic cigarettes, is strictly prohibited on all flights. Alcohol consumption is also not permitted onboard.</p>
          </div>
        );
      case 'Seat allocation':
        return (
          <div>
            <h3>Seat allocation</h3>
            <p>Seats can be selected during booking or check-in. If you have a specific seat preference, it is recommended to select your seat as early as possible, as availability may be limited closer to the departure date.</p>
          </div>
        );
      // ... other Onboard FAQs ...

      // Flight delays and cancellations FAQs
      case 'Flight Delays':
        return (
          <div>
            <h3>Flight Delays</h3>
            <p>In case of flight delays, passengers will be informed through the contact information provided at the time of booking. The airline will make arrangements for meals and accommodation if the delay extends beyond a certain period.</p>
          </div>
        );
      // ... other Flight delays and cancellations FAQs ...

      // Special Assistance FAQs
      case 'Pregnant women':
        return (
          <div>
            <h3>Pregnant women</h3>
            <p>Pregnant women are advised to consult their doctor before flying. If you are beyond 28 weeks pregnant, you may be required to provide a medical certificate confirming your fitness to fly. Certain restrictions apply after 36 weeks of pregnancy.</p>
          </div>
        );
      case 'Passengers with special needs':
        return (
          <div>
            <h3>Passengers with special needs</h3>
            <p>Passengers requiring special assistance should notify the airline at least 48 hours before departure. This includes wheelchair assistance, assistance for visual or hearing impairments, and any other special requirements.</p>
          </div>
        );
      // ... other Special Assistance FAQs ...

      default:
        return null;
    }
  };

  const renderTabContent = () => {
    if (selectedFAQ) {
      return (
        <div>
          <i className='btn-back fas fa-arrow-left' onClick={() => setSelectedFAQ(null)}></i>
          {renderFAQContent(selectedFAQ)}
        </div>
      );
    }
    // existing code for rendering tabs
  

    switch (activeTab) {
      case 'Booking':
        return (
          <ul>
            <li onClick={() => setSelectedFAQ('Fare types')}>Fare types</li>
            <li onClick={() => setSelectedFAQ('Duplicate payments')}>Duplicate payments</li>
            <li onClick={() => setSelectedFAQ('Army Concession Vouchers')}>Army Concession Vouchers</li>
            <li onClick={() => setSelectedFAQ('Booking confirmation')}>Booking confirmation</li>
            <li onClick={() => setSelectedFAQ('Refund')}>Refund</li>
            <li onClick={() => setSelectedFAQ('Cancellations')}>Cancellations</li>
            <li onClick={() => setSelectedFAQ('Payments')}>Payments</li>
            
          </ul>
        );
      case 'At the Airport':
        return (
          <ul>
            <li onClick={() => setSelectedFAQ('Check-in procedures')}>Check-in procedures</li>
            <li onClick={() => setSelectedFAQ('Missed flights')}>Missed flights</li>
           
          </ul>
        );
      case 'Baggage':
        return (
          <ul>
            <li onClick={() => setSelectedFAQ('Carry-on baggage')}> Carry-on baggage</li>
            <li onClick={() => setSelectedFAQ('Checked baggage')}>Checked baggage</li>
            
          </ul>
        );
      case 'Onboard':
        return (
          <ul>
            <li onClick={() => setSelectedFAQ('Smoking and drinking')}>Smoking and drinking</li>
            <li onClick={() => setSelectedFAQ('Seat allocation')}>Seat allocation</li>
          </ul>
        );
      case 'Flight Delays and Cancellations':
        return (
          <ul>
            <li onClick={() => setSelectedFAQ('Flight Delays')}>Flight Delays</li>
          </ul>
        );
      case 'Special Assistance':
        return (
          <ul>
            <li onClick={() => setSelectedFAQ('Pregnant women')}>Pregnant women</li>
            <li onClick={() => setSelectedFAQ('Passengers with special needs')}>Passengers with special needs</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>

            <Hero2 
       
       image={img1} // Use the imported image
     />
         <div className="faqs-page">
      <div className="faqs-heading-container">
        <div className="faqs-heading-bar"></div>
      </div>

      <div className="faqs-container">

        <div className="faqs-header">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
      
            <h1 className="section-title px-3">Frequently Asked Questions</h1>
          </div>
         
        </div>

        <div className="faqs-help">
          <h2 style={{marginLeft:'20px'}}>How can we help you?</h2>
          <p style={{marginLeft:'20px'}}>If you have a question about your booking, please select from the menu below:</p>
          <div class="chat-icon-container">
  <a href="https://your-chat-service-link" class="chat-icon" target="_blank" title="Chat with Us">
    <i class="fas fa-comment-dots"></i>
  </a>
</div>

          <div className="faqs-tabs">
            <ul className="tabs-nav">
              <li
                className={activeTab === 'Booking' ? 'active' : ''}
                onClick={() => setActiveTab('Booking')}
              >
                Booking
              </li>
              <li
                className={activeTab === 'At the Airport' ? 'active' : ''}
                onClick={() => setActiveTab('At the Airport')}
              >
                At the Airport
              </li>
              <li
                className={activeTab === 'Baggage' ? 'active' : ''}
                onClick={() => setActiveTab('Baggage')}
              >
                Baggage
              </li>
              <li
                className={activeTab === 'Onboard' ? 'active' : ''}
                onClick={() => setActiveTab('Onboard')}
              >
                Onboard
              </li>
              <li className={activeTab === 'Flight Delays and Cancellations' ? 'active' : ''}
                onClick={() => setActiveTab('Flight Delays and Cancellations')}
                >Flight Delays and Cancellations</li>
              <li className={activeTab === 'Special Assistance' ? 'active' : ''}
                onClick={() => setActiveTab('Special Assistance')}
                >Special Assistance</li>
            </ul>

            <div className="tabs-content">
              <div className="tab-content active">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQsPage;
