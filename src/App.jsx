import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutStack from './components/AboutStack';
import Experience from './components/Experience';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
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
    </div>
  );
}

export default App;
