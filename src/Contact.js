import React, { useState } from "react";
import "./Contact.css";
import contactImage from "./Contact.png";

const Contact = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent("Contact from Apeiron Website");
        const body = encodeURIComponent(message);
        window.location.href = `mailto:theapeirongroup@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contact-container">
            <div className="contact-image-container">
                <img src={contactImage} alt="Contact Us" className="contact-full-image" />
            </div>

            <div className="contact-form-wrapper">
                <h2>Reach Out to Us!</h2>
                <p className="form-description">Got a question, idea, or want to collaborate? Drop us a message below.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <textarea
                        maxLength={1000}
                        placeholder="Write your message here (max 1000 characters)..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Send Email</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
