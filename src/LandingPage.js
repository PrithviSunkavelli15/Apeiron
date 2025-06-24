import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import landingImage from "./LandingPage.png";
import landingVideo from "./videoOneEdit.mp4";
import NY from "./NY.png";
import Philly from "./Philly.png";
import PS from "./PS.png";

const LandingPage = () => {
    const videoRef = useRef(null);
    const [transitioning, setTransitioning] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            video.muted = muted;
            video.play().catch(() => { });
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (video.currentTime >= 15 && !transitioning) {
                setTransitioning(true);
                const fadeInterval = setInterval(() => {
                    if (video.volume > 0.05) {
                        video.volume = Math.max(0, video.volume - 0.05);
                    } else {
                        video.volume = 0;
                        clearInterval(fadeInterval);
                    }
                }, 250);
                setShowImage(true);
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }, [transitioning]);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setMuted(video.muted);
            if (!video.muted) {
                video.play();
            }
        }
    };

    return (
        <div className="landing-page">
            <div className="landing-hero">
                <video
                    ref={videoRef}
                    className={`landing-video ${showImage ? "fade-out-smooth" : ""}`}
                    src={landingVideo}
                    autoPlay
                    playsInline
                    muted={muted}
                />
                <img
                    src={landingImage}
                    alt="Landing"
                    className={`landing-image ${showImage ? "fade-in-smooth" : "hidden-image"}`}
                />
                {muted && (
                    <button onClick={toggleMute} className="unmute-button">
                        Click to play with sound
                    </button>
                )}
            </div>

            <div className="value-prop-container">
                <h1 className="value-prop-title">The Next-Gen Nightlife Brand</h1>

                <div className="image-row">
                    <Link to="/events" className="image-card">
                        <img src={NY} alt="NYC" />
                    </Link>
                    <Link to="/events" className="image-card">
                        <img src={Philly} alt="Philly" />
                    </Link>
                    <Link to="/events" className="image-card">
                        <img src={PS} alt="Penn State" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
