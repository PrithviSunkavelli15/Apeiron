import React from "react";
import "./UpcomingEvents.css";
import landingImage from "./Events.png";

const UpcomingEvents = () => {
    return (
        <div className="events-section">
            {/* Top Landing Image */}
            <div className="events-image-container">
                <img src={landingImage} alt="Upcoming Events" className="events-full-image" />
            </div>

            {/* Coming Soon Message */}
            <div className="events-row">
                <div className="events-left">
                    <h2 className="event-title-line">
                        <span>New Events Coming Soon</span>
                    </h2>
                    <div className="event-date">Stay Tuned</div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
