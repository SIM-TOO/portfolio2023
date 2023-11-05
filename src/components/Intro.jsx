import React from "react";
import IntroTitle from "./animations/IntroTitle";
import IntroText from "./animations/IntroText";

const Intro = () => {

  // 타이틀 작성
  const titleText = ["WELCOME TO MY", "PORTFOLIO"]
  // 소개글 작성
  const introduceText = [
    "배움에는 왕도가 없다는 속담을 신념으로 삼아,",
    "프론트엔드 개발의 길을 묵묵히 걸어가는 개발자입니다.",
    "쉼 없이 새로운 기술을 탐색하고",
    "지식의 바다를 항해하며,",
    "각 프로젝트에 참신함을 더합니다."
  ];

  return (
    <section id="intro">
      {/* 인트로 */}
      <div class="intro__inner">
        {/* 타이틀 */}
        <IntroTitle texts={titleText} />
        {/* 소개글 */}
        <div className="intro__text">
          <IntroText texts={introduceText} />
        </div>
      </div>
    </section>
  );
};

export default Intro;