import React, { useState, useEffect } from "react";
import gsap from "gsap";

const IntroText = ({ texts }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".intro-text",
        { opacity: 0, y: -50 }, // 시작 상태
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power3.easeOut",
        }
      );
    }
  }, [visible]);

  return (
    <div className={`intro-text text ${visible ? "visible" : "hidden"}`}>
      {texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default IntroText;
