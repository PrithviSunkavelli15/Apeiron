import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import landingImage from "./LandingPage.png";
import landingVideo from "./videoOneEdit.mp4";
import NY from "./NY.png";
import Philly from "./Philly.png";
import PS from "./PS.png";
import mapAP from "./mapAP.png";

const LandingPage = () => {
    const videoRef = useRef(null);
    const [transitioning, setTransitioning] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [muted, setMuted] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            video.muted = muted;
            
            // Enhanced video quality settings
            video.preload = "auto";
            video.playsInline = true;
            video.autoplay = true;
            
            // Set video quality preferences
            if (video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) {
                video.setAttribute('data-quality', 'high');
            }
            
            // Optimize video playback
            video.addEventListener('loadedmetadata', () => {
                // Force high quality rendering
                video.style.imageRendering = '-webkit-optimize-contrast';
                setVideoLoaded(true);
            });
            
            // Additional quality events
            video.addEventListener('canplay', () => {
                video.style.filter = 'contrast(1.1) saturate(1.05) brightness(1.02)';
                
                // Force high quality rendering
                if (video.videoWidth >= 1920) {
                    // 4K optimization
                    video.style.transform = 'scale(1.001) translateZ(0)';
                    video.style.filter += ' sharpness(1.2)';
                } else if (video.videoWidth >= 1280) {
                    // HD optimization
                    video.style.transform = 'scale(1.0005) translateZ(0)';
                    video.style.filter += ' sharpness(1.1)';
                }
            });
            
            // Optimize video quality on play
            video.addEventListener('play', () => {
                // Force hardware acceleration
                video.style.willChange = 'transform';
                video.style.transform = 'translateZ(0)';
            });
            
            video.play().catch(() => {});
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
                    className={`landing-video ${showImage ? "fade-out-smooth" : ""} ${videoLoaded ? "video-loaded" : "video-loading"}`}
                    src={landingVideo}
                    autoPlay
                    playsInline
                    muted={muted}
                    preload="auto"
                    poster=""
                    crossOrigin="anonymous"
                    style={{
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translate3d(0, 0, 0)',
                        backfaceVisibility: 'hidden'
                    }}
                />
                
                {/* Video Loading Overlay */}
                {!videoLoaded && (
                    <div className="video-loading-overlay">
                        <div className="loading-spinner"></div>
                        <p>Loading High-Quality Video...</p>
                    </div>
                )}
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

                <div className="map-image-container">
                    <img src={mapAP} alt="Apeiron Map" className="map-image" />
                </div>

                <div className="image-row">
                    <Link to="/events" className="image-card">
                        <img src={NY} alt="NYC" />
                    </Link>
                    <div className="image-card">
                        <img src={Philly} alt="Philly" />
                    </div>
                    <div className="image-card">
                        <img src={PS} alt="Penn State" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
