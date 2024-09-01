import React from 'react';
import Fade from 'react-reveal/Fade';

const WhyInfinityWings = () => {
    return (
        <div className="why-infinity-wings-container">
            <h2
                className="section-title px-3"
                style={{
                    fontSize: '32px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 'bold',
                    color: 'grey',
                    textAlign: 'center',  /* Ensures the text is centered */
                    whiteSpace: 'nowrap'  /* Keeps the text on a single line */
                }}
            >
                Why Infinity Wings?
            </h2>
            <div className="why-infinity-wings">
                <div className="feature">
                    <Fade left> {/* Animation for the image */}
                        <div className="feature-img-container">
                            <img src="/src/assets/img/wimg1.jpg" alt="Feature 1" />
                        </div>
                    </Fade>
                    <div className="feature-text-container">
                        <h5>Luxurious Lounge</h5>
                        <p><br />Relax in our exclusive lounges and enjoy a luxurious start to your journey with Infinity Wings.<br /><br /></p>
                        <a href='#'>Explore our lounges</a>
                    </div>
                </div>
                <div className="feature">
                    <Fade right> {/* Animation for the image */}
                        <div className="feature-img-container">
                            <img src="/src/assets/img/wing-2.webp" alt="Feature 2" />
                        </div>
                    </Fade>
                    <div className="feature-text-container">
                        <h5>Stay Connected in the Sky</h5>
                        <p><br />Enjoy high-speed Wi-Fi at 40,000 feet with Infinity Wings. Stay connected for work or leisure.<br /><br /></p>
                        <a href='#'>Learn more</a>
                    </div>
                </div>
                <div className="feature">
                    <Fade bottom> {/* Animation for the image */}
                        <div className="feature-img-container">
                            <img src="/src/assets/img/wing-3.webp" alt="Feature 3" />
                        </div>
                    </Fade>
                    <div className="feature-text-container">
                        <h5>Premium Seating </h5>
                        <p><br />Enjoy spacious seats with ample legroom and lie-flat options for a restful flight with Infinity Wings.<br /><br /></p>
                        <a href='#'>Choose your seats</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyInfinityWings;
