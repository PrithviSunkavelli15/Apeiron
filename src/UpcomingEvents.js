import React, { useRef, useState, useEffect } from "react";
import "./UpcomingEvents.css";
import landingImage from "./Events.png";
import eventPoster from "./archivesEventPoster.png";
import eventVideo from "./archivesOnly.mp4";

const UpcomingEvents = () => {
    const videoRef = useRef(null);
    const [showPoster, setShowPoster] = useState(false);
    const fadeIntervalRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => {
            if (
                video &&
                video.duration &&
                video.currentTime >= video.duration - 3 &&
                !fadeIntervalRef.current
            ) {
                fadeIntervalRef.current = setInterval(() => {
                    if (video.volume > 0.05) {
                        video.volume = Math.max(0, video.volume - 0.05);
                    } else {
                        video.volume = 0;
                        clearInterval(fadeIntervalRef.current);
                        fadeIntervalRef.current = null;
                    }
                }, 200);
            }
        };

        const handleEnded = () => setShowPoster(true);

        if (video) {
            video.volume = 1;
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("ended", handleEnded);
        }

        return () => {
            if (video) {
                video.removeEventListener("timeupdate", handleTimeUpdate);
                video.removeEventListener("ended", handleEnded);
            }
            clearInterval(fadeIntervalRef.current);
        };
    }, []);

    // IntersectionObserver to control playback
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5, // 50% of the video must be in view
            }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="events-section">
            {/* Top Landing Image */}
            <div className="events-image-container">
                <img src={landingImage} alt="Upcoming Events" className="events-full-image" />
            </div>

            {/* Horizontal Content */}
            <div className="events-row">
                <div className="events-left">
                    <h2 className="event-title-line">
                        <span>Archives</span>
                        <span className="event-subtitle">Only</span>
                    </h2>
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
                    {!showPoster ? (
                        <video
                            ref={videoRef}
                            src={eventVideo}
                            className="events-media"
                            controls
                            playsInline
                            muted={false}
                        />
                    ) : (
                        <a
                            href="https://www.instagram.com/p/DLYc2qHMaIj/?img_index=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={eventPoster}
                                alt="Archives Only Poster"
                                className="events-media fade-in"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
