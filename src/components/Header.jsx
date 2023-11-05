import React, { useState } from 'react'

const Header = () => {

  // header에 보여줄 메뉴를 배열로 만듭니다.
  const headerNav = [
    {
      title: "intro",
      url: "#intro",
    },
    {
      title: "PROJECT",
      url: "#port",
    },
    {
      title: "skill",
      url: "#skill",
    },
    {
      title: "contact",
      url: "#contact",
    },
  ];

  // 모바일 메뉴(햄버거) 변수
  const [show, setShow] = useState(false);

  // show 상태를 토글하는 함수
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        {/* 로고 홈페이지 이동 */}
        <div className="header__logo">
          <a href="/">portfolio<em>SIM-TOO</em></a>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {/* 리스트로 표시 */}
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        {/* 모바일 내비게이션 토글 */}
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header