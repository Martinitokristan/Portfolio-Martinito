import React from 'react';
import profileAwake from '../assets/profile-awake.png';
import profileSleeping from '../assets/profile-sleeping.png';
import { FaMapMarkerAlt, FaEnvelope, FaFileDownload, FaCheckCircle, FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    const profileImg = theme === 'dark' ? profileSleeping : profileAwake;

    return (
        <header className="glass-card header-container">
            <div className="header-content">
                <div className="profile-wrapper">
                    <img src={profileImg} alt="Profile" className="header-profile-img" />
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
                        <button className="action-btn secondary">
                            <FaEnvelope /> Send Email
                        </button>
                    </div>
                </div>
            </div>

            <button className="header-theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
};

export default Header;
