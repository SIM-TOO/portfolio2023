import React, { useRef, useEffect } from 'react';

const Contact = () => {

  const frameRef = useRef(null);
  const cardRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const card = cardRef.current;
    const light = lightRef.current;

    let x, y, width, height;

    function updateMetrics() {
      const rect = frame.getBoundingClientRect();
      x = rect.x;
      y = rect.y;
      width = rect.width;
      height = rect.height;
    }

    function mouseMove(e) {
      updateMetrics();
      const left = e.clientX - x;
      const top = e.clientY - y;
      const centerX = left - width / 2;
      const centerY = top - height / 2;
      const d = Math.sqrt(centerX ** 2 + centerY ** 2);
      const rotationDegree = d / 200;
      card.style.transform = `rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${rotationDegree}deg)`;
      card.style.boxShadow = `${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)`;
      light.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)`;
    }

    function resetCardStyle() {
      card.style.boxShadow = '';
      card.style.transform = '';
      light.style.backgroundImage = '';
    }

    frame.addEventListener('mousemove', mouseMove);
    frame.addEventListener('mouseleave', resetCardStyle);
    window.addEventListener('resize', updateMetrics);

    return () => {
      frame.removeEventListener('mousemove', mouseMove);
      frame.removeEventListener('mouseleave', resetCardStyle);
      window.removeEventListener('resize', updateMetrics);
    };
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" ref={frameRef}>
      <h2 className="contact__title">Contact</h2>
      <div className="contact__inner">

        <div className="contact__card " ref={cardRef}>
          <div id="light" ref={lightRef}></div>
          <div className="contact__text">
            <div className="text"> Thank you for reviewing my portfolio</div>
            <div className="text"> front-end developer </div>
            <div className="text"> Lee Seung Hun </div>
          </div>
        </div>


        <div className="contact__link">
          <div className="text" onClick={() => handleClick("https://sim-too.tistory.com/")}>
            BLOG : SIM_TOO_DEVELOPER
          </div>

          <div className="text" onClick={() => handleClick("mailto:leesh6172@naver.com")}>
            MAIL : leesh6137@naver.com
          </div>

          <div className="text" onClick={() => handleClick("https://blog.naver.com/sim_too")}>
            BLOG : SIM_TOO_INVESTMENT
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact