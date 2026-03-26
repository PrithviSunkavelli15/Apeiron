import React from "react";
import "./UpcomingEvents.css";
import landingImage from "./Events.png";
import empireInIvoryFlyer from "./EmpireInIvory.JPG";

const UpcomingEvents = () => {
    const handleEmpireInIvoryClick = () => {
        window.open("https://flite.city/e/empire-in-ivory?t=you", "_blank");
    };

    return (
        <div className="events-section">
            {/* Top Landing Image */}
            <div className="events-image-container">
                <img
                    src={landingImage}
                    alt="Upcoming Events"
                    className="events-full-image"
                    loading="eager"
                    decoding="async"
                />
            </div>

            {/* Empire in Ivory Event */}
            <div className="events-row">
                <div className="events-left">
                    <h2 className="event-title-line">
                        <span>Empire in Ivory</span>
                    </h2>
                    <div className="event-date">4/24/26</div>
                </div>
                <div className="events-right">
                    <img
                        src={empireInIvoryFlyer}
                        alt="Empire in Ivory"
                        className="events-media event-flyer-clickable"
                        onClick={handleEmpireInIvoryClick}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

        </div>
    );
};

export default UpcomingEvents;
