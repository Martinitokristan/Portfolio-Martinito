import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutStack from './components/AboutStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="main-grid">
        <div className="left-column">
          <AboutStack />
        </div>
        <div className="right-column">
          <Experience />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
