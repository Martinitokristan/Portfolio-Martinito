import React from 'react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: 'Junior Frontend Developer',
        company: 'Tech Innovations Inc.',
        date: '2023 - Present',
        description: 'Leading the frontend team in rebuilding the core product dashboard using React and TypeScript. Improved performance by 40% and implemented a comprehensive design system.',
        tags: ['React', 'TypeScript', 'Redux', 'Performance']
    },
    {
        id: 2,
        role: 'Junior Full Stack Developer',
        company: 'Creative Solutions Studio',
        date: '2021 - 2023',
        description: 'Developed and maintained client websites and robust web applications. Collaborated closely with designers to ensure pixel-perfect functionality and responsiveness.',
        tags: ['Node.js', 'React', 'MongoDB', 'AWS']
    },
    {
        id: 3,
        role: 'Junior Web Developer',
        company: 'StartUp Hub',
        date: '2020 - 2021',
        description: 'Assisted in the development of the company marketing site. Fixed bugs and implemented new UI features based on user feedback.',
        tags: ['HTML/CSS', 'JavaScript', 'Bootstrap']
    }
];

const Experience = () => {
    return (
        <section className="experience-container">
            <h2 className="experience-header">Experience</h2>
            {experiences.map((exp) => (
                <div key={exp.id} className="glass-card job-card">
                    <div className="job-header">
                        <div>
                            <span className="job-role">{exp.role}</span>
                            <span style={{ margin: '0 8px', color: 'var(--text-secondary)' }}>@</span>
                            <span className="job-company">{exp.company}</span>
                        </div>
                        <span className="job-date">{exp.date}</span>
                    </div>
                    <p className="job-desc">{exp.description}</p>
                    <div className="tags-container">
                        {exp.tags.map((tag, idx) => (
                            <span key={idx} className="tech-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
