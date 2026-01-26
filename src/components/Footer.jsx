import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // TODO: Replace these with your actual social media links
    const socialLinks = {
        facebook: 'https://www.facebook.com/share/1CrRszR2ka/',
        instagram: 'https://www.instagram.com/rizzztan?igsh=Y2I4bzU1b3EyYWpo',
        twitter: 'https://x.com/krstn23274845', 
        github: 'https://github.com/Martinitokristan'    
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </div>
                <p className="footer-copy">
                    &copy; {currentYear} Kristan C. Martinito. All Rights Reserved.
                </p>
                <p className="footer-status">
                    Developed in Butuan City, Agusan Del Norte, Philippines
                </p>
            </div>
        </footer>
    );
};

export default Footer;
