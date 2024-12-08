// src/components/LoadingSpinner.tsx
//import React from 'react';
import "../styling/LoadingSpinner.scss"; // Ensure the path and file name are correct

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-container"></div>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;