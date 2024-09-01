import React from 'react';
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item">
                            <h4>Get In Touch</h4>
                            <a href="#"><i className="fas fa-home me-2"></i> Airport Road,Nur Khan AirBase,RWP</a>
                            <a href="mailto:info@example.com"><i className="fas fa-envelope me-2"></i> infinitywingsinfo@gmail.com</a>
                            <a href="tel:+01234567890"><i className="fas fa-phone me-2"></i> +92 345 6789075</a>
                            <a href="fax:+01234567890"><i className="fas fa-print me-2"></i> +92 345 6237890</a>
                            <div className="d-flex align-items-center mt-3">
                                <div className="social-icons">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item">
                            <h4>Book Your Trip</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Book Flight</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Charter Booking</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Group Booking</a>
                        </div>
                        <div className="footer-item mt-3">
                            <h4>Fly with us</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Press</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Gift Cards</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Magazine</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item">
                            <h4>Loyalty</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Join WingPoints</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> About WingPoints</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> General</a>
                        </div>
                        <div className="footer-item mt-3">
                            <h4>Blogs</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> General</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Destination</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> WingPoints</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item">
                            <h4>Payments</h4>
                            <div className="footer-bank-card">
                                <a href="#"><i className="fab fa-cc-amex fa-2x"></i></a>
                                <a href="#"><i className="fab fa-cc-visa fa-2x"></i></a>
                                <a href="#"><i className="fas fa-credit-card fa-2x"></i></a>
                                <a href="#"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                                <a href="#"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                <a href="#"><i className="fab fa-cc-discover fa-2x"></i></a>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
            
            <div className="container-fluid copyright text-body py-4">
            <div className="container">
                <div className="row g-4 text-center justify-content-center">
                    <div className="col-md-6 mb-md-0">
                        <i className="fas fa-copyright me-2"></i>
                        <a className="text-white" href="#">Infinity Wings</a>, All rights reserved.
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Footer;
