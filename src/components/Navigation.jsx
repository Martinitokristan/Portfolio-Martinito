import React from 'react';
import './Navigation.css';

const Navigation = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navigation">
            <div className="nav-links">
                <button onClick={() => scrollToSection('about')} className="nav-link">
                    About
                </button>
                <button onClick={() => scrollToSection('projects')} className="nav-link">
                    Projects
                </button>
                <button onClick={() => scrollToSection('experience')} className="nav-link">
                    Experience
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
