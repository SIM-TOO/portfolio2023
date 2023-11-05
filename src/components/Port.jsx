import React from 'react'
import image01 from '../assets/img/port00/port00-1.png';
import image02 from '../assets/img/port00/port00-2.png';
import image03 from '../assets/img/port00/port00-3.png';
import image11 from '../assets/img/port01/port01-1.png';
import image12 from '../assets/img/port01/port01-2.png';
import image13 from '../assets/img/port01/port01-3.png';
import ImageSlider from './animations/ImageSlider';


const Port = () => {



  const portText = [
    {
      img: [image01, image02, image03],
      text: ["vite portfolio"],
      title: "개인프로젝트",
      git: "https://github.com/SIM-TOO/vite-portfolio#%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
      view: "https://tv.kakao.com/channel/4397165/cliplink/442241974",

    },
    {
      img: [image11, image12, image13],
      text: ["WithDAY"],
      title: "팀프로젝트",
      git: "https://github.com/2023-SMHRD-SW-DataDesign-1/CoPebble#-withday-%ED%8C%80%EB%AA%85-%EC%BD%94%EB%94%A9%EC%A1%B0%EC%95%BD%EB%8F%8C-copebble",
      view: "https://tv.kakao.com/channel/4397165/cliplink/440170327",

    },

    {
      img: [],
      text: ["react portfolio"],
      title: "개인프로젝트",
      git: "",
      view: "",

    },
    {
      img: [],
      text: ["eyecon-현재진행중"],
      title: "팀프로젝트-현재진행중",
      git: "",
      view: "",
    },
  ];

  return (
    <section id="port">
      <div className="port__inner">
        <h2 className="port__title">Project</h2>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="img">
                <ImageSlider imgs={port.img} />
              </div>
              <div className="text">
                <div>{port.text[0]}</div>
                <div>{port.text[1]}</div>
                <div>{port.text[2]}</div>
              </div>
              <h3 className="title">
                {port.title}
              </h3>
              <div className="btn">
                <a href={port.git}>git</a>
                <a href={port.view}>view</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Port