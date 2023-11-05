import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCircle = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  useEffect(() => {
    gsap.to('.cursor-follower', 0.3, {
      x: position.x,
      y: position.y,
      ease: 'power3.out',
    });
  }, [position]);

  return <div className="cursor-follower" />;
};

export default CursorFollower;
