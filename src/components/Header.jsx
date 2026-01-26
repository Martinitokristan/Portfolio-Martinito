import React, { useState } from 'react';
import profileOpen from '../assets/default.jpg';
import profileSplit from '../assets/profile-split.png';
import profileCover from '../assets/coverface.png';
import { FaMapMarkerAlt, FaEnvelope, FaFileDownload, FaCheckCircle, FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';
import ContactModal from './ContactModal';

const Header = ({ theme, toggleTheme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Image logic: 
    // Default = Open Eye (default.jpg)
    // Dark Mode = Closed Eye (left side of profile-split)
    // Hover = Cover Face (coverface.png)

    let currentImg = profileOpen;
    let imgStyle = { objectFit: 'cover' };

    if (isHovered) {
        currentImg = profileCover;
        imgStyle = { ...imgStyle, transform: 'scale(1.4)' };
    } else if (theme === 'dark') {
        currentImg = profileSplit;
        imgStyle = { ...imgStyle, objectPosition: 'left', transform: 'scale(1.4)' };
    }

    return (
        <>
            <header className="header-container">
                <div className="header-content">
                    <div
                        className="profile-wrapper"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={currentImg}
                            alt="Profile"
                            className="header-profile-img"
                            style={imgStyle}
                        />
                    </div>

                    <div className="header-info">
                        <div className="name-row">
                            <h1 className="header-name">Kristan C. Martinito</h1>
                            <FaCheckCircle className="verified-badge" title="Verified" />
                        </div>

                        <div className="location-row">
                            <FaMapMarkerAlt className="location-icon" />
                            <span>Butuan City, Agusan Del Norte</span>
                        </div>

                        <p className="header-role">BSIT Student / Aspiring Web Developer</p>

                        <div className="header-actions">
                            <button className="action-btn primary">
                                <FaFileDownload /> View Resume
                            </button>
                            <button className="action-btn secondary" onClick={() => setIsModalOpen(true)}>
                                <FaEnvelope /> Send Email
                            </button>
                        </div>
                    </div>
                </div>

                <button className="header-theme-toggle" onClick={toggleTheme}>
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </header>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Header;
