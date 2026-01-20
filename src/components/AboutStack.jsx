import React from 'react';
import './AboutStack.css'; // Will create/rename Sidebar.css
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import Projects from './Projects'; // Import Projects here to nest inside left col

const AboutStack = () => {
    return (
        <div className="about-stack-container">
            {/* Hero Statement */}
            <div className="glass-card about-card">
                <h3 className="section-title">About</h3>
                <p className="about-text">
                    I am a 4th-year Bachelor of Science in Information Technology student at La Consolacion University Philippines, passionate about building modern and user-centered digital solutions. I am currently focusing on Web Development, Mobile Application Development, and Software Engineering.
                </p>
                <p className="about-text mt-4">
                    I enjoy solving real-world problems through technology—whether by developing systems that improve daily processes or by creating innovative ideas and turning them into functional applications. I am continuously learning, exploring new tools, and enhancing my skills to grow into a professional developer.
                </p>
                <p className="about-text mt-4">
                    I am actively seeking an Internship / OJT opportunity where I can apply what I've learned and gain hands-on industry experience. I am based in Butuan City, Agusan Del Norte.
                </p>
            </div>

            {/* Tech Stack Section */}
            <div className="glass-card stack-card">
                <h3 className="section-title">Tech Stack</h3>
                <div className="stack-category">
                    <span className="category-label">Frontend</span>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <FaReact className="tech-icon react" />
                            <span className="tech-name">React</span>
                        </div>
                        <div className="tech-item">
                            <FaJs className="tech-icon js" />
                            <span className="tech-name">JavaScript</span>
                        </div>
                        <div className="tech-item">
                            <FaHtml5 className="tech-icon html" />
                            <span className="tech-name">HTML5</span>
                        </div>
                        <div className="tech-item">
                            <FaCss3 className="tech-icon css" />
                            <span className="tech-name">CSS3</span>
                        </div>
                        <div className="tech-item">
                            <SiTailwindcss className="tech-icon tailwind" />
                            <span className="tech-name">Tailwind</span>
                        </div>
                    </div>
                </div>
                <div className="stack-category">
                    <span className="category-label">Backend & Tools</span>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <FaNodeJs className="tech-icon node" />
                            <span className="tech-name">Node.js</span>
                        </div>
                        <div className="tech-item">
                            <SiTypescript className="tech-icon ts" />
                            <span className="tech-name">TypeScript</span>
                        </div>
                        <div className="tech-item">
                            <FaGitAlt className="tech-icon git" />
                            <span className="tech-name">Git</span>
                        </div>
                        <div className="tech-item">
                            <FaGithub className="tech-icon github" />
                            <span className="tech-name">GitHub</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects (Big Three) integrated into left column */}
            <Projects />
        </div>
    );
};

export default AboutStack;
