import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import landingImage from "./Events.png";
import frightnightImage from "./frightnight4.JPEG";
import apeironFlyer from "./ApeironFlyer.png";

// Preload critical images
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const UpcomingEvents = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [apeironImageLoaded, setApeironImageLoaded] = useState(false);

    // Preload critical images on component mount
    useEffect(() => {
        preloadImage(frightnightImage);
        preloadImage(apeironFlyer);
    }, []);

    return (
        <div className="events-section">
            {/* Top Landing Image */}
            <div className="events-image-container">
                <img src={landingImage} alt="Upcoming Events" className="events-full-image" />
            </div>

            {/* Trick Or Treat 2 Event */}
            <div className="events-row">
                <div className="events-left">
                    <h1 className="event-main-title">Trick Or Treat 2</h1>
                    <h2 className="event-featuring">Featuring Mickey Singh</h2>
                    <div className="event-date">10/26/25</div>
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
                            src={apeironFlyer}
                            alt="Trick Or Treat 2 Featuring Mickey Singh"
                            className={`events-media ${apeironImageLoaded ? 'image-loaded' : 'image-loading'}`}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setApeironImageLoaded(true)}
                        />
                        {!apeironImageLoaded && (
                            <div className="image-loading-placeholder">
                                <div className="loading-spinner"></div>
                            </div>
                        )}
                    </a>
                </div>
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
