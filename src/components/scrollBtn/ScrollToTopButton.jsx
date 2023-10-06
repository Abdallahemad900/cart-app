import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollToTopButton.css'; // Create a CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add an event listener to track scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp className="icon" />
    </div>
  );
};

export default ScrollToTopButton;
