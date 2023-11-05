import React from "react";

const Footer = () => {

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">

        <div className="footer__info">
          <div className="left">
            <div className="title" onClick={() => handleClick("https://smhrd.or.kr/")}>
              SMHRD 스마트인재개발원
            </div>
          </div>


          <div className="right">
            <div className="title" onClick={() => handleClick("https://sim-too.tistory.com/")}>
              SIM_TOO_DEVELOPER
            </div>
            <div className="title" onClick={() => handleClick("https://blog.naver.com/sim_too")}>
             SIM_TOO_INVESTMENT
            </div>
          </div>
        </div>

        <div className="footer__right">
          © 2023 SIM-TOO
        </div>
      </div>
    </footer>
  );
};

export default Footer;