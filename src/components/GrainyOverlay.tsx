import React, { useEffect, useState } from 'react';
import '../App.css';

const GrainyOverlay: React.FC = () => {
  const [pageHeight, setPageHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.body.clientHeight); // Use clientHeight to prevent extra space
    };

    // Update on load, resize, and scroll
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    updateHeight(); // Set initial height

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  return (
    <div 
      className="grainy-overlay"
      style={{ height: `${pageHeight}px` }} // Dynamically update height
    ></div>
  );
};

export default GrainyOverlay;
