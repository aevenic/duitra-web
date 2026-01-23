import React, { useState, useEffect } from 'react';

const HalftoneEffect = ({ className = "" }) => {
  const [halftoneStyle, setHalftoneStyle] = useState({});

  useEffect(() => {
    // Generate Random Halftone Pattern
    const opacities = [0.8, 0.5, 0.3, 0.2, 0.1];
    const cellSize = 6;
    const gridSize = 15; // Increased grid size to hide the repeat
    const images = [];
    const positions = [];

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const opacity = opacities[Math.floor(Math.random() * opacities.length)];
        images.push(`radial-gradient(rgba(110, 161, 255, ${opacity}) 1.5px, transparent 0)`);
        positions.push(`${x * cellSize}px ${y * cellSize}px`);
      }
    }

    setHalftoneStyle({
      backgroundImage: images.join(','),
      backgroundPosition: positions.join(','),
      backgroundSize: `${cellSize * gridSize}px ${cellSize * gridSize}px`,
      backgroundRepeat: 'repeat'
    });
  }, []);

  return (
    <div
      className={`absolute top-0 bottom-0 -left-64 -right-64 pointer-events-none z-0 transform-gpu opacity-80 ${className}`}
      style={halftoneStyle}
    />
  );
};

export default HalftoneEffect;
