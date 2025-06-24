import React from "react";
import "./UpcomingEvents.css";
import eventsImage from "./Events.png"; // Make sure this image exists in src folder

const UpcomingEvents = () => {
    return (
        <div className="events-section">
            <div className="events-image-container">
                <img src={eventsImage} alt="Upcoming Events" className="events-full-image" />
            </div>
            <div className="events-message">
                <p>
                    No events just yet but stay tuned for our next drop. Follow us on socials to get the drop first.
                </p>
            </div>
        </div>
    );
};

export default UpcomingEvents;
