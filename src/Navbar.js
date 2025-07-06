// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./corner.PNG";

const Navbar = () => {
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
        setAboutDropdown(false);
    };

    const handleBuyTickets = () => {
        window.open("https://flite.city/org/the-apeiron-group", "_blank");
        closeMenu();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="Apeiron Logo" className="logo-img" />
                </Link>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => !isMobile && setAboutDropdown(true)}
                        onMouseLeave={() => !isMobile && setAboutDropdown(false)}
                        onClick={() => isMobile && setAboutDropdown(!aboutDropdown)}
                    >
                        <span className="dropdown-toggle">About Us ▾</span>
                        {aboutDropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to="/board" onClick={closeMenu}>Team</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/events" onClick={closeMenu}>Upcoming Events</Link></li>
                    <li><Link to="/highlights" onClick={closeMenu}>Highlights</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>

                    {isMobile && (
                        <li className="mobile-login">
                            <button onClick={handleBuyTickets}>Buy Tickets</button>
                        </li>
                    )}
                </ul>

                <div className="login-button desktop-only">
                    <button onClick={handleBuyTickets}>Buy Tickets</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
