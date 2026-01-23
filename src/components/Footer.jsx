import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-by">
                    Designed & Built by <span className="highlight">Kristan C. Martinito</span>
                </p>
                <p className="footer-copy">
                    &copy; {currentYear} • Full Stack Aspirant
                </p>
                <div className="footer-status">
                    Made with <FaHeart className="heart-icon" /> in Butuan City
                </div>
            </div>
        </footer>
    );
};

export default Footer;
