import React, { useEffect, useRef, useState } from "react";
import "./Highlights.css";
import highlightsImage from "./Highlights.png";

import notoIVVideo from "./frightnightIV.mp4";
import notoIV1 from "./notoIV1.jpg";
import notoIV2 from "./notoIV2.jpg";
import notoIV3 from "./notoIV3.jpg";

import saintsVideo from "./saints.mp4";
import saints1 from "./saints1.jpg";
import saints2 from "./saints2.jpg";
import saints3 from "./saints3.jpg";

import notoVideo from "./frightnight.mp4";

import ezuVideo from "./ezu.mp4";
import ezu1 from "./ezu1.jpg";
import ezu2 from "./ezu2.jpg";
import ezu3 from "./ezu3.jpg";

import tjayVideo from "./tjay.mp4";
import tjay1 from "./tjay1.jpg";
import tjay2 from "./tjay2.jpg";
import tjay3 from "./tjay3.jpg";

import archivesVideo from "./ArchivesOnlyHighlight.mp4";

const Highlights = () => {
    const videoRefs = useRef([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Use Intersection Observer for better performance on mobile
        const videoObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        if (video.paused) {
                            video.play().catch(() => { });
                        }
                        video.muted = false;
                    } else {
                        video.pause();
                        video.muted = true;
                    }
                });
            },
            {
                threshold: 0.3, // 30% of video must be visible
                rootMargin: '50px' // Start loading 50px before video comes into view
            }
        );

        // Observe all videos
        videoRefs.current.forEach((video) => {
            if (video) {
                videoObserver.observe(video);
            }
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) {
                    videoObserver.unobserve(video);
                }
            });
        };
    }, []);

    // Check screen width on mount and resize
    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            setIsSmallScreen(width <= 1024); // iPad and smaller
            setIsMobile(width <= 768); // Mobile devices
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const renderEvent = (title, date, tagline, pics = [], video, refIndex) => (
        <div className="event-section" key={title}>
            <h2 className="event-title">{title}</h2>
            <p className="event-date">{date}</p>
            <p className="event-tagline">{tagline}</p>
            <div className="event-media">
                <video
                    src={video}
                    controls
                    muted
                    playsInline
                    preload={isMobile ? "none" : "metadata"}
                    className="event-video"
                    ref={(el) => (videoRefs.current[refIndex] = el)}
                    style={{
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        willChange: isMobile ? 'transform' : 'auto'
                    }}
                />
            </div>
            {pics.length > 0 && (
                <div className={`event-photos ${isSmallScreen ? "two-one-layout" : ""}`}>
                    {pics.map((img, idx) => (
                        <img key={idx} src={img} alt={`${title}-${idx}`} className="event-photo" />
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="highlights-section">
            <div className="highlights-image-container">
                <img src={highlightsImage} alt="Highlights" className="highlights-full-image" />
            </div>

            {renderEvent(
                "Fright Night at Noto 4",
                "10/30/25",
                "A haunted night with only one rule: don't blink.",
                [notoIV1, notoIV2, notoIV3],
                notoIVVideo,
                0
            )}
            {renderEvent(
                "Archives Only",
                "7/25/25",
                "Hip Hop. Throwbacks. Pop. Archives Only",
                [],
                archivesVideo,
                1
            )}
            {renderEvent(
                "Saints vs Sinners IV ft. Kyle Richh",
                "04/10/25",
                "Heaven and hell collided — red horns, white wings, and unforgettable energy.",
                [saints1, saints2, saints3],
                saintsVideo,
                2
            )}
            {renderEvent(
                "Fright Night at NOTO III",
                "10/31/24",
                "A haunted night with only one rule: don't blink.",
                [],
                notoVideo,
                3
            )}
            {renderEvent(
                "EZU Club Tour",
                "04/13/24",
                "Desi heat turned all the way up. An unforgettable afterparty experience.",
                [ezu1, ezu2, ezu3],
                ezuVideo,
                4
            )}
            {renderEvent(
                "Official Lil Tjay Tour Afterparty",
                "12/01/23",
                "Apeiron lit up the city for Lil Tjay's afterparty — vibes unmatched.",
                [tjay1, tjay2, tjay3],
                tjayVideo,
                5
            )}
        </div>
    );
};

export default Highlights;
