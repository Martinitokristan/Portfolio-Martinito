import React from 'react';
import profileAwake from '../assets/profile-awake.png';
import profileSleeping from '../assets/profile-sleeping.png';
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import './Sidebar.css';

const Sidebar = ({ theme }) => {
    const profileImg = theme === 'dark' ? profileSleeping : profileAwake;
    return (
        <aside className="sidebar">
            {/* Profile Section */}
            <div className="glass-card profile-section">
                <div className="profile-img-container">
                    <img src={profileImg} alt="Profile" className="profile-img" />
                </div>
                <h1 className="h1-name">Kristan C. Martinito</h1>
                <p className="role-title">Full Stack Developer</p>
            </div>

            {/* Hero Statement (was About Section) */}
            <div className="glass-card">
                <h3 className="section-title">Who I Am</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    I am a Junior Full Stack Developer passionate about accessible UI and building scalable web applications.
                </p>
            </div>

            {/* Currently Learning (Growth Tab) */}
            <div className="glass-card">
                <h3 className="section-title">Currently Learning</h3>
                <div className="hobbies-list">
                    {['Next.js 14', 'GraphQL', 'Advanced TypeScript', 'Docker'].map((item, index) => (
                        <span key={index} className="hobby-tag" style={{ borderColor: 'var(--accent-color)' }}>{item}</span>
                    ))}
                </div>
            </div>

            {/* Hobbies Section */}
            <div className="glass-card">
                <h3 className="section-title">Hobbies</h3>
                <div className="hobbies-list">
                    {['Photography', 'Gaming', 'Traveling', 'Music', 'Coding'].map((hobby, index) => (
                        <span key={index} className="hobby-tag">{hobby}</span>
                    ))}
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="glass-card">
                <h3 className="section-title">Tech Stack</h3>
                <div className="tech-stack-grid">
                    <div className="tech-item" title="React"><FaReact /></div>
                    <div className="tech-item" title="JavaScript"><FaJs /></div>
                    <div className="tech-item" title="HTML5"><FaHtml5 /></div>
                    <div className="tech-item" title="CSS3"><FaCss3 /></div>
                    <div className="tech-item" title="Node.js"><FaNodeJs /></div>
                    <div className="tech-item" title="Git"><FaGitAlt /></div>
                    <div className="tech-item" title="TypeScript"><SiTypescript /></div>
                    <div className="tech-item" title="GitHub"><FaGithub /></div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
