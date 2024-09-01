import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React, { useEffect } from 'react';

import './css/bootstrap.min.css'; // Importing Bootstrap CSS
import './css/style.css'; // Importing custom CSS
import { Helmet } from 'react-helmet';
import 'animate.css';

import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import BookFlightPage from './Pages/BookFlightPage';
import GroupTravelRequestPage from './Pages/GroupTravelRequestPage'
import CharterFlightRequestPage from './Pages/CharterFlightRequestPage'
import ModifyFlightPage from './Pages/ModifyFlightPage';
import CancelFlightPage from './Pages/CancelFlightPage';
import AddWingPointsPage from './Pages/AddWingPointsPage';
import FlightStatusPage from './components/FlightStatusPage';
import AddExtras from './Pages/AddExtras';
import CheckInPage from './Pages/CheckInPage';
import LoginPage from './Pages/LoginPage';
import JoinPage from './Pages/JoinPage';
import BlogsPage from './Pages/BlogsPage';
import FAQsPage from './Pages/FAQsPage';
import ContactUsPage from './Pages/ContactUsPage';
import SelectFlightPage from './Pages/SelectFlightPage';
import EnterDetailsPage from './Pages/EnterDetailsPage';
import ExtrasMeal from './Pages/ExtrasMeal';
import ExtrasSeats from './Pages/ExtrasSeats';
import ExtrasBaggage from './Pages/ExtrasBaggage';

import JoinwpPage from './Pages/JoinwpPage';
import PayConfirm from './Pages/PayConfirm';
import Booked from './Pages/Booked';
import BoardingPass from './Pages/BoardingPass';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/book-a-flight' element={<BookFlightPage />} />
            <Route path='/group-travel-request' element={<GroupTravelRequestPage />} />
            <Route path='/charter-flight-requests' element={<CharterFlightRequestPage />} />
            <Route path='/modify-flight' element={<ModifyFlightPage />} />
            <Route path='/cancel-flight' element={<CancelFlightPage />} />
            <Route path='/add-wing-points-id' element={<AddWingPointsPage />} />
            <Route path='/check-flight-status' element={<FlightStatusPage />} />
            <Route path='/add-extras' element={<AddExtras />} />
            <Route path='/Check-In' element={<CheckInPage />} />
            <Route path='/wing-points-login' element={<LoginPage />} />
            <Route path='/join-wing-points' element={<JoinPage />} />
            <Route path='/blog' element={<BlogsPage />} />
            <Route path='/faqs' element={<FAQsPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path="/select-flight" element={<SelectFlightPage />} />
            <Route path="/enter-details" element={<EnterDetailsPage />} />
            <Route path="/join-wp" element={<JoinwpPage />} />
            <Route path="/pay-confirm" element={<PayConfirm />} />
            <Route path="/booked" element={<Booked />} />
            <Route path="/extras-meal" element={<ExtrasMeal/>} />
            <Route path="/extras-seat" element={<ExtrasSeats />} />
            <Route path="/extras-baggage" element={<ExtrasBaggage/>} />
            <Route path="/boardingpass/:reservationId" element={<BoardingPass/>} />
        </Route>

    )
);






const App = () => {
    useEffect(() => {
        const scripts = [
            { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js", id: "jquery" },
            { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", id: "bootstrap" },
            { src: "src/lib/easing/easing.min.js", id: "easing" },
            { src: "src/lib/waypoints/waypoints.min.js", id: "waypoints" },
            { src: "src/lib/owlcarousel/owl.carousel.min.js", id: "owlcarousel" },
            { src: "src/lib/lightbox/js/lightbox.min.js", id: "lightbox" },
            { src: "src/js/main.js", id: "main" },
    

        ];
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        scripts.forEach(script => {
            const scriptElement = document.createElement("script");
            scriptElement.src = script.src;
            scriptElement.id = script.id;
            scriptElement.async = true;
            document.body.appendChild(scriptElement);
        });
        return () => {
            // Cleanup scripts when the component unmounts
            scripts.forEach(script => {
                const scriptElement = document.getElementById(script.id);
                if (scriptElement) document.body.removeChild(scriptElement);
            });
        }
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Travela - Tourism Website Template</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="" name="keywords" />
                <meta content="" name="description" />

                {/* Google Web Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap" rel="stylesheet" />

                {/* Icon Font Stylesheet */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* Libraries Stylesheet */}
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />


                {/* Customized Bootstrap Stylesheet */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />

                {/* Template Stylesheet */}
                <link href="css/style.css" rel="stylesheet" />
                
            </Helmet>
            <>

                <RouterProvider router={router} />

            </>

            {/* Your other components here */}
        </>
    );
};

export default App;
