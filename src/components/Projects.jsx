import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'Foundation (What I Know)',
        description: 'A robust admin dashboard for managing products and orders. Demonstrates solid React fundamentals, state management, and responsive design.',
        tech: ['React', 'Context API', 'CSS Grid'],
        link: '#'
    },
    {
        id: 2,
        title: 'Real-time Chat App',
        category: 'Growth (What I Learned)',
        description: 'A live messaging application using Socket.io. This project pushed me to learn about WebSockets, real-time data flow, and backend integration.',
        tech: ['Node.js', 'Socket.io', 'Express'],
        link: '#'
    },
    {
        id: 3,
        title: 'AI Task Manager',
        category: 'Vision (What I Aspire To)',
        description: 'An experimental task manager that uses AI to prioritize daily goals. Represents my interest in AI integration and intelligent UI.',
        tech: ['OpenAI API', 'Next.js', 'Tailwind'],
        link: '#'
    }
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="section-header">The Big Three</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card project-card">
                        <div className="project-category">{project.category}</div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-badge">{t}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.link} className="icon-link"><FaGithub /> Code</a>
                            <a href={project.link} className="icon-link"><FaExternalLinkAlt /> Live</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
