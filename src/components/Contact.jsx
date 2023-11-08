import React from 'react';
import MouseTracking from './animations/MouseTracking';

const Contact = () => {
  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <MouseTracking>
      {(cardRef, lightRef) => (
        <section id="contact">
          <h2 className="contact__title">Contact</h2>
          <div className="contact__inner">
            <div className="contact__card" ref={cardRef}>
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
      )}
    </MouseTracking>
  )
}

export default Contact