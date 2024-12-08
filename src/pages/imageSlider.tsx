// ImageSlider.tsx
import React, { useState } from 'react';
import "../styling/imageSlider.scss";


interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from closing the project
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider" onClick={(e) => e.stopPropagation()}>
      <button className="slider-arrow left" onClick={goToPrevious}>
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-image"
      />
      <button className="slider-arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
