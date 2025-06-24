import React, { useEffect, useRef } from "react";
import "./Highlights.css";
import highlightsImage from "./Highlights.png";

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

const Highlights = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            videoRefs.current.forEach((video) => {
                if (!video) return;
                const rect = video.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                if (isInView) {
                    video.play().catch(() => { });
                    video.muted = false;
                } else {
                    video.pause();
                    video.muted = true;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderEvent = (title, date, tagline, pics = [], video, refIndex) => (
        <div className="event-section">
            <h2 className="event-title">{title}</h2>
            <p className="event-date">{date}</p>
            <p className="event-tagline">{tagline}</p>
            <div className="event-media">
                <video
                    src={video}
                    controls
                    muted
                    playsInline
                    className="event-video"
                    ref={(el) => (videoRefs.current[refIndex] = el)}
                />
            </div>
            {pics.length > 0 && (
                <div className="event-photos">
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
                "Saints vs Sinners IV ft. Kyle Richh",
                "04/10/25",
                "Heaven and hell collided — red horns, white wings, and unforgettable energy.",
                [saints1, saints2, saints3],
                saintsVideo,
                0
            )}
            {renderEvent(
                "Fright Night at NOTO III",
                "10/31/24",
                "A haunted night with only one rule: don’t blink.",
                [],
                notoVideo,
                1
            )}
            {renderEvent(
                "EZU Club Tour",
                "04/13/24",
                "Desi heat turned all the way up. An unforgettable afterparty experience.",
                [ezu1, ezu2, ezu3],
                ezuVideo,
                2
            )}
            {renderEvent(
                "Official Lil Tjay Tour Afterparty",
                "12/01/23",
                "Apeiron lit up the city for Lil Tjay’s afterparty — vibes unmatched.",
                [tjay1, tjay2, tjay3],
                tjayVideo,
                3
            )}
        </div>
    );
};

export default Highlights;
