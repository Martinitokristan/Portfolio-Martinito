import React from 'react';
import './AboutStack.css';
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub, FaFileDownload, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const AboutStack = () => {
    return (
        <div className="about-stack-container">
            {/* About */}
            <div id="about" className="glass-card about-card">
                <h3 className="section-title">About Me</h3>
                <p className="about-text">
                    I am a 3rd-year Bachelor of Science in Information Technology student at Father Saturnino Urios University, passionate about building modern and user-centered digital solutions. I am currently deriving deep into Web Development, exploring its endless possibilities and learning new technologies every day.
                </p>
                <p className="about-text mt-4">
                    I believe in learning slowly but surely—making consistent progress with each project I build. While I enjoy playing games in my spare time, I'm now fully focused on my studies and honing my development skills. Every line of code I write brings me closer to becoming a professional developer.
                </p>
                <p className="about-text mt-4">
                    I enjoy solving real-world problems through technology and transforming creative ideas into functional applications. I'm continuously exploring new tools, frameworks, and best practices to improve my craft. My goal is to keep learning, keep building, and keep growing in this exciting field.
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
                        {[
                            { Icon: FaReact, name: 'React', class: 'react' },
                            { Icon: FaJs, name: 'JavaScript', class: 'js' },
                            { Icon: FaHtml5, name: 'HTML5', class: 'html' },
                            { Icon: FaCss3, name: 'CSS3', class: 'css' },
                            { Icon: SiTailwindcss, name: 'Tailwind', class: 'tailwind' }
                        ].map((item, index) => (
                            <div
                                key={item.name}
                                className="tech-item"
                                style={{
                                    '--i': index,
                                    '--rx': (Math.random() * 20 - 10) + 'px',
                                    '--ry': (Math.random() * -15 - 5) + 'px',
                                    '--rr': (Math.random() * 20 - 10) + 'deg'
                                }}
                            >
                                <item.Icon className={`tech-icon ${item.class}`} />
                                <span className="tech-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="stack-category">
                    <span className="category-label">Backend & Tools</span>
                    <div className="tech-grid">
                        {[
                            { Icon: FaNodeJs, name: 'Node.js', class: 'node' },
                            { Icon: SiTypescript, name: 'TypeScript', class: 'ts' },
                            { Icon: FaGitAlt, name: 'Git', class: 'git' },
                            { Icon: FaGithub, name: 'GitHub', class: 'github' }
                        ].map((item, index) => (
                            <div
                                key={item.name}
                                className="tech-item"
                                style={{
                                    '--i': index + 5,
                                    '--rx': (Math.random() * 20 - 10) + 'px',
                                    '--ry': (Math.random() * -15 - 5) + 'px',
                                    '--rr': (Math.random() * 20 - 10) + 'deg'
                                }}
                            >
                                <item.Icon className={`tech-icon ${item.class}`} />
                                <span className="tech-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Currently Learning Section */}
                <div className="stack-category" style={{ marginTop: '2rem' }}>
                    <span className="category-label">Currently Learning</span>
                    <div className="tech-grid">
                        {[
                            { Icon: FaReact, name: 'Next.js', class: 'nextjs' }, // Reusing React icon for now if Next icon unavailable, or generic
                            { Icon: FaFileDownload, name: 'SEO', class: 'seo' },
                            { Icon: FaDatabase, name: 'Databases', class: 'db' }
                        ].map((item, index) => (
                            <div
                                key={item.name}
                                className="tech-item"
                                style={{
                                    '--i': index + 10,
                                    '--rx': (Math.random() * 20 - 10) + 'px',
                                    '--ry': (Math.random() * -15 - 5) + 'px',
                                    '--rr': (Math.random() * 20 - 10) + 'deg'
                                }}
                            >
                                {/* Note: Using generic icons available in the file's imports or existing libraries */}
                                <item.Icon className={`tech-icon ${item.class}`} />
                                <span className="tech-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStack;
