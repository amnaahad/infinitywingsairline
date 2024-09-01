import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const WingPoints = () => {
    return (
        <div className="wing-points">
            <Fade bottom>
                <div className="wing-points-image">
                    {/* Add background image or content here */}
                </div>
            </Fade>
            <Fade bottom>
                <div className="wing-points-content">
                    <Zoom>
                        <h2>WingPoints – Loyalty Program</h2>
                    </Zoom>
                    <Zoom delay={500}>
                        <p>
                            WingPoints, our loyalty program, is the most generous loyalty program
                            in the region. Based on a simple earn and redeem plan, WingPoints offers you
                            the maximum value for points earned. Join now and discover new possibilities
                            with WingPoints.
                        </p>
                    </Zoom>
                    <Zoom delay={1000}>
                        <button className="join-now-button">Join Now</button>
                    </Zoom>
                </div>
            </Fade>
        </div>
    );
};

export default WingPoints;
