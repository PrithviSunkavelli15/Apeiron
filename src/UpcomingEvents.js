import React from "react";
import "./UpcomingEvents.css";
import landingImage from "./Events.png";
import navFlyer from "./NAV.JPG";

const UpcomingEvents = () => {
    const handleNavClick = () => {
        window.open("https://flite.city/e/nav-noto?t=you", "_blank");
    };

    return (
        <div className="events-section">
            {/* Top Landing Image */}
            <div className="events-image-container">
                <img src={landingImage} alt="Upcoming Events" className="events-full-image" />
            </div>

            {/* Nav @ Noto Event */}
            <div className="events-row">
                <div className="events-left">
                    <h2 className="event-title-line">
                        <span>Nav @ Noto</span>
                    </h2>
                    <div className="event-date">January 24, 2025</div>
                </div>
                <div className="events-right">
                    <img
                        src={navFlyer}
                        alt="Nav @ Noto"
                        className="events-media event-flyer-clickable"
                        onClick={handleNavClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
