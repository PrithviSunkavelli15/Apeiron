// src/pages/AboutUs.js
import React from "react";
import "./AboutUs.css";
import largeImage from "./About.png";

const AboutUs = () => {
    return (
        <div className="about-image-container">
            <img
                src={largeImage}
                alt="About Us"
                className="about-full-image"
                loading="eager"
                decoding="async"
            />
        </div>
    );
};

export default AboutUs;
