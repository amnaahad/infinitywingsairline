import React from 'react';

const GroupTravelBenefits = () => {
  return (
    <div className="benefits-container"  style={{ color: 'white' }}>
      <section>
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">At the Airport</h5>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Advance Check-In</h3>
            <p>Pre-arranged, advance check-in</p>
          </div>
          <div className="benefit-card">
            <h3>Group Check-in Desk</h3>
            <p>Exclusive check-in desks just for your group</p>
          </div>
          <div className="benefit-card">
            <h3>Luggage Tags</h3>
            <p>Group label luggage tags, for easy identification on arrival</p>
          </div>
          <div className="benefit-card">
            <h3>Visa Arrangement</h3>
            <p>We arrange visas to the UAE if members of group require them</p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">On Board</h5>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Sitting Together As A Group</h3>
            <p>Sitting Together As A Group</p>
          </div>
          <div className="benefit-card">
            <h3>Personalised Menus</h3>
            <p>Personalised menus and headrests with your organisation’s logo</p>
          </div>
          <div className="benefit-card">
            <h3>Onboard Welcome</h3>
            <p>Onboard welcome announcements for your group</p>
          </div>
          <div className="benefit-card">
            <h3>Group's Language</h3>
            <p>Cabin crew who speak your group’s language</p>
          </div>
          <div className="benefit-card">
            <h3>Celebratory Beverages</h3>
            <p>Pre-paid celebratory beverages and chocolates on most routes</p>
          </div>
          <div className="benefit-card">
            <h3>Dietary Meals</h3>
            <p>Meals to meet special religious or dietary requirements</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GroupTravelBenefits;
