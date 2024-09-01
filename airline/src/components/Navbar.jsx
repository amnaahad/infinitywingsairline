import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/sample.png';  // Import the logo image
import InfinityEatsPDF from '../assets/InfinityEats.pdf';

import 'animate.css';

const Navbar = () => {
    const location = useLocation();

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-item nav-link active' : 'nav-item nav-link';
    };

    const getDropdownLinkClass = (base) => {
        return location.pathname.startsWith(base) ? 'nav-item dropdown active' : 'nav-item dropdown';
    };

    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-5 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <img src={logo} alt="Travela Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className={getNavLinkClass('/')}>Home</Link>
                        <div className={getDropdownLinkClass('/plan')}>
                            <Link to="/plan" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Plan</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/book-a-flight" className="dropdown-item">Book a Flight</Link>
                                <Link to="/group-travel-request" className="dropdown-item">Group Travel Requests</Link>
                                <Link to="/charter-flight-requests" className="dropdown-item">Charter Flight Requests</Link>
                                <a href={InfinityEatsPDF} className="dropdown-item" target="_blank" rel="noopener noreferrer">
  Infinity Eats
</a>

                            </div>
                        </div>
                        <div className={getDropdownLinkClass('/manage')}>
                            <Link to="/manage" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/modify-flight" className="dropdown-item">Modify Flight</Link>
                                <Link to="/cancel-flight" className="dropdown-item">Cancel Flight</Link>
                                <Link to="/add-wing-points-id" className="dropdown-item">Add WingPoints ID</Link>
                                <Link to="/check-flight-status" className="dropdown-item">Check Flight Status</Link>
                            </div>
                        </div>
                        <div className={getDropdownLinkClass('/add-extras')}>
                            <Link to="/add-extras" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add Extras</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/extras-baggage" className="dropdown-item">Add Baggage</Link>
                                <Link to="/extras-seat" className="dropdown-item">Add Seats</Link>
                                <Link to="/extras-baggage" className="dropdown-item">Add Meals</Link>
                            </div>
                        </div>
                        <Link to="/check-in" className={getNavLinkClass('/check-in')}>Check-In</Link>
                        <div className={getDropdownLinkClass('/air-rewards')}>
                            <Link to="/air-rewards" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wing Points</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/wing-points-login" className="dropdown-item">Login</Link>
                                <Link to="/join-wing-points" className="dropdown-item">Join WingPoints</Link>
                            </div>
                        </div>
                        <Link to="/blog" className={getNavLinkClass('/blog')}>Blogs</Link>
                        <div className={getDropdownLinkClass('/help')}>
                            <Link to="/help" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Help</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/faqs" className="dropdown-item">FAQs</Link>
                                <Link to="/contact-us" className="dropdown-item">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
