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

import navVideo from "./NavVideo.mov";
import nav1 from "./Nav1.jpg";
import nav2 from "./Nav2.jpg";
import nav3 from "./Nav3.jpg";

import navPitchHeader from "./nav@Pitch.jpeg";
import navPitch1 from "./Nav@pitch1.jpg";
import navPitch2 from "./Nav@pitch2.jpg";
import navPitch3 from "./Nav@pitch3.jpg";

import navNycHeader from "./Nav@NYC.png";
import navNyc1 from "./Nav@NYC1.jpg";
import navNyc2 from "./Nav@NYC2.jpg";
import navNyc3 from "./Nav@NYC3.jpg";

import ezuVideo from "./ezu.mp4";
import ezu1 from "./ezu1.jpg";
import ezu2 from "./ezu2.jpg";
import ezu3 from "./ezu3.jpg";

import tjayVideo from "./tjay.mp4";
import tjay1 from "./tjay1.jpg";
import tjay2 from "./tjay2.jpg";
import tjay3 from "./tjay3.jpg";

import temptedVideo from "./tempted.mp4";
import tempted1 from "./tempted1.jpg";
import tempted2 from "./tempted2.jpg";
import tempted3 from "./tempted3.jpg";

import meekmillVideo from "./meekmill.mp4";

import archivesVideo from "./ArchivesOnlyHighlight.mp4";

const Highlights = () => {
    const videoRefs = useRef([]);
    const videoObserverRef = useRef(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Use Intersection Observer for better performance on mobile
        videoObserverRef.current = new IntersectionObserver(
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

        // Observe all videos that are already in the refs array
        const currentVideoRefs = videoRefs.current;
        currentVideoRefs.forEach((video) => {
            if (video && videoObserverRef.current) {
                videoObserverRef.current.observe(video);
            }
        });

        return () => {
            if (videoObserverRef.current) {
                currentVideoRefs.forEach((video) => {
                    if (video) {
                        videoObserverRef.current.unobserve(video);
                    }
                });
            }
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

    const renderEvent = (title, date, tagline, pics = [], video, refIndex, credits, headerImage, headerClass) => (
        <div className="event-section" key={title}>
            <h2 className="event-title">{title}</h2>
            <p className="event-date">{date}</p>
            <p className="event-tagline">{tagline}</p>
            <div className="event-media">
                {video ? (
                    <video
                        src={video}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        poster={pics.length > 0 ? pics[0] : undefined}
                        className="event-video"
                        ref={(el) => {
                            // Clean up previous video if it exists
                            const previousVideo = videoRefs.current[refIndex];
                            if (previousVideo && videoObserverRef.current) {
                                videoObserverRef.current.unobserve(previousVideo);
                            }
                            
                            videoRefs.current[refIndex] = el;
                            // Observe the video immediately when ref is set
                            if (el && videoObserverRef.current) {
                                videoObserverRef.current.observe(el);
                            }
                        }}
                        style={{
                            imageRendering: '-webkit-optimize-contrast',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            willChange: isMobile ? 'transform' : 'auto'
                        }}
                    />
                ) : (
                    headerImage && (
                        <img
                            src={headerImage}
                            alt={`${title} header`}
                            className={`event-header-image ${headerClass || ""}`.trim()}
                            loading="lazy"
                            decoding="async"
                        />
                    )
                )}
            </div>
            {pics.length > 0 && (
                <div className={`event-photos ${isSmallScreen ? "two-one-layout" : ""}`}>
                    {pics.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${title}-${idx}`}
                            className="event-photo"
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
            )}
            {credits && <p className="event-credits">{credits}</p>}
        </div>
    );

    return (
        <div className="highlights-section">
            <div className="highlights-image-container">
                <img
                    src={highlightsImage}
                    alt="Highlights"
                    className="highlights-full-image"
                    loading="eager"
                    decoding="async"
                />
            </div>

            {renderEvent(
                "Nav @ NYC",
                "3/8/26",
                "City lights, high energy, and nonstop vibes.",
                [navNyc1, navNyc2, navNyc3],
                null,
                0,
                null,
                navNycHeader,
                "event-header-image-nyc"
            )}
            {renderEvent(
                "Nav @ Pitch Social",
                "3/5/26",
                "A packed night at Pitch Social.",
                [navPitch1, navPitch2, navPitch3],
                null,
                1,
                null,
                navPitchHeader,
                "event-header-image-standard"
            )}
            {renderEvent(
                "Nav @ Noto",
                "January 24, 2025",
                "A packed night of energy at Noto.",
                [nav1, nav2, nav3],
                navVideo,
                2,
                "Credits: Bhavin Mistry"
            )}
            {renderEvent(
                "Tempted x The Apeiron Group",
                "12/11/25",
                "An unforgettable night of music and energy.",
                [tempted1, tempted2, tempted3],
                temptedVideo,
                3
            )}
            {renderEvent(
                "Meek Mill @ Noto",
                "12/6/25",
                "An electrifying performance that brought the house down.",
                [],
                meekmillVideo,
                4
            )}
            {renderEvent(
                "Fright Night at Noto 4",
                "10/30/25",
                "A haunted night with only one rule: don't blink.",
                [notoIV1, notoIV2, notoIV3],
                notoIVVideo,
                5
            )}
            {renderEvent(
                "Archives Only",
                "7/25/25",
                "Hip Hop. Throwbacks. Pop. Archives Only",
                [],
                archivesVideo,
                6
            )}
            {renderEvent(
                "Saints vs Sinners IV ft. Kyle Richh",
                "04/10/25",
                "Heaven and hell collided — red horns, white wings, and unforgettable energy.",
                [saints1, saints2, saints3],
                saintsVideo,
                7
            )}
            {renderEvent(
                "Fright Night at NOTO III",
                "10/31/24",
                "A haunted night with only one rule: don't blink.",
                [],
                notoVideo,
                8
            )}
            {renderEvent(
                "EZU Club Tour",
                "04/13/24",
                "Desi heat turned all the way up. An unforgettable afterparty experience.",
                [ezu1, ezu2, ezu3],
                ezuVideo,
                9
            )}
            {renderEvent(
                "Official Lil Tjay Tour Afterparty",
                "12/01/23",
                "Apeiron lit up the city for Lil Tjay's afterparty — vibes unmatched.",
                [tjay1, tjay2, tjay3],
                tjayVideo,
                10
            )}
        </div>
    );
};

export default Highlights;
