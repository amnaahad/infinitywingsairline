import React from "react";
import { Link, useLocation } from "react-router-dom";

const FlightHeader = () => {
    const location = useLocation();

    const tabs = [
        { path: "/book-a-flight", name: "Search" },
        { path: "/select-flight", name: "Select Flight" },
        { path: "/enter-details", name: "Enter Details" },
        { path: "/add-extras", name: "Add Extras" },
        { path: "/pay-confirm", name: "Pay & Confirm" }
    ];

    const isCompleted = (path) => {
        return tabs.findIndex(tab => tab.path === location.pathname) > tabs.findIndex(tab => tab.path === path);
    };

    const isDisabled = (path) => {
        return tabs.findIndex(tab => tab.path === location.pathname) < tabs.findIndex(tab => tab.path === path);
    };

    const isCurrentOrFuture = (path) => {
        return tabs.findIndex(tab => tab.path === location.pathname) <= tabs.findIndex(tab => tab.path === path);
    };

    return (
        <div className="flight-header">
            {tabs.map((tab, index) => {
                const completed = isCompleted(tab.path);
                const disabled = isDisabled(tab.path);
                const currentOrFuture = isCurrentOrFuture(tab.path);

                return currentOrFuture ? (
                    <Link
                        key={index}
                        to={tab.path}
                        className={`header-item ${disabled ? 'inactive' : ''} ${completed ? 'completed' : ''}`}
                    >
                        <i className={`fas fa-check-circle ${completed ? 'completed' : ''}`}></i>
                        <span>{tab.name}</span>
                    </Link>
                ) : (
                    <div
                        key={index}
                        className={`header-item inactive`}
                    >
                        <i className={`fas fa-check-circle ${completed ? 'completed' : ''}`}></i>
                        <span>{tab.name}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default FlightHeader;
