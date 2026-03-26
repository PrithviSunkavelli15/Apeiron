import React from "react";
import "./SocialsBar.css";
import instaLogo from "./Insta.png";
import tiktokLogo from "./tiktok.png";
import youtubeLogo from "./youtube.png";

const SocialsBar = () => {
    return (
        <footer className="socials-bar">
            <h3>Connect With Us</h3>
            <div className="social-icons">
                <a href="https://www.instagram.com/the.apeiron.group/" target="_blank" rel="noopener noreferrer">
                    <img src={instaLogo} alt="Instagram" loading="lazy" decoding="async" />
                </a>
                <a href="https://www.tiktok.com/@the.apeiron.group" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokLogo} alt="TikTok" className="tiktok-logo" loading="lazy" decoding="async" />
                </a>
                <a href="https://www.youtube.com/@TheApeironGroup" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" loading="lazy" decoding="async" />
                </a>
            </div>
        </footer>
    );
};

export default SocialsBar;
