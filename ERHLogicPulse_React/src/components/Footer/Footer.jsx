import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <img src="./src/assets/ERHIcon.png" alt="ERH LogicPulse Logo" />
                    <h2>ERH LogicPulse: WE POWER DIGITAL INNOVATION</h2>
                </div>
                <div className="footer-columns">
                    <div>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#work">Our Work</a></li>
                            <li><a href="#AboutUs">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Contact Us</h2>
                        <p>Email: maheshkumar.adarsh@gmail.com</p>
                    </div>
                    <div>
                        <h2>Social Media</h2>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com" className="icon-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://www.instagram.com" className="icon-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 by ERH LogicPulse. Powered and Designed by ERH LogicPulse</p>
            </div>
        </footer>
    );
}

export default Footer;
