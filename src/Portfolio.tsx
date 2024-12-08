// src/App.tsx

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from './tabs/headerNavigation';
import LoadingSpinner from './tabs/LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MoveText.css';
import './styling/Tabs.scss'; // For Logo name and design styling
import './styling/Aboutme.scss'; // Ensure paths are correct
//import './styling/Credits.scss';
import './styling/Projects.scss';
import './styling/LoadingSpinner.scss';
import "./styling/imageSlider.scss";


import Aboutme from './pages/Aboutme';
//import Credits from './pages/Credits';

function App() {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in

  useEffect(() => {
    const logoTimer = setTimeout(() => setIsLogoLoaded(true), 1000); // Adjust as needed

    // Trigger fade-in after loading
    if (isLogoLoaded) {
      const fadeInTimer = setTimeout(() => setFadeIn(true), 200); // Adjust delay as needed
      return () => clearTimeout(fadeInTimer); // Cleanup
    }

    return () => clearTimeout(logoTimer); // Cleanup
  }, [isLogoLoaded]);

  if (!isLogoLoaded) {
    return <LoadingSpinner />; // Show spinner until loading is complete
  }

  return (
    <Router>
      <div>
        {/* Navigation Component with Logo */}
        <Navigation />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/Aboutme" replace />} />
            <Route
              path="/Aboutme"
              element={
                <div className={`fade-in ${fadeIn ? 'show' : ''}`}>
                  <Aboutme />
                </div>
              }
            />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
