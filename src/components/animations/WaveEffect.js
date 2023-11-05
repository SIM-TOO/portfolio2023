import { useEffect } from 'react';
import gsap from 'gsap';

const WaveEffect = () => {
  useEffect(() => {
    const createWave = (e) => {
      const wave = document.createElement('div');
      wave.style.position = 'fixed';
      wave.style.borderRadius = '50%';
      wave.style.left = `${e.clientX}px`;
      wave.style.top = `${e.clientY}px`;
      wave.style.width = '0px';
      wave.style.height = '0px';
      wave.style.background = 'rgba(243, 243, 243, 0.25)';
      wave.style.transform = 'translate(-50%, -50%)';
      wave.style.pointerEvents = 'none';
      wave.style.zIndex = '9998';
      document.body.appendChild(wave);

      gsap.to(wave, {
        width: 100,
        height: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          document.body.removeChild(wave);
        },
      });
    };

    window.addEventListener('click', createWave);

    return () => {
      window.removeEventListener('click', createWave);
    };
  }, []);

  return null;
};

export default WaveEffect;
