import React, { useEffect, useState } from 'react';
import Particle from './Particle';

const ParticleBackground = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particleCount = Math.min(35, Math.floor(windowDimensions.width / 30));

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {[...Array(particleCount)].map((_, i) => (
        <Particle
          key={i}
          size={`${8 + Math.random() * 20}px`}
          x={Math.random() * windowDimensions.width}
          y={Math.random() * windowDimensions.height}
          delay={Math.random() * 5}
          duration={6 + Math.random() * 8}
          color={`rgba(99, 102, 241, ${0.2 + Math.random() * 0.4})`}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;