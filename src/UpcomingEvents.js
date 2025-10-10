import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import landingImage from "./Events.png";
import frightnightImage from "./frightnight4.JPEG";

// Preload critical images
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const UpcomingEvents = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Preload critical images on component mount
    useEffect(() => {
        preloadImage(frightnightImage);
    }, []);

    return (
        <div className="events-section">
            {/* Top Landing Image */}
            <div className="events-image-container">
                <img src={landingImage} alt="Upcoming Events" className="events-full-image" />
            </div>

            {/* Fright Night Event */}
            <div className="events-row">
                <div className="events-left">
                    <h2 className="event-title-line">
                        <span>Fright Night at Noto 4</span>
                    </h2>
                    <div className="event-date">10/30/25</div>
                    <a
                        href="https://flite.city/org/the-apeiron-group"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-tickets-button"
                    >
                        Buy Tickets
                    </a>
                </div>

                <div className="events-right">
                    <a
                        href="https://flite.city/org/the-apeiron-group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={frightnightImage}
                            alt="Fright Night at Noto 4"
                            className={`events-media ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setImageLoaded(true)}
                        />
                        {!imageLoaded && (
                            <div className="image-loading-placeholder">
                                <div className="loading-spinner"></div>
                            </div>
                        )}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
