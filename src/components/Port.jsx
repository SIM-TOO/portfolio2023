import React from 'react'
import image01 from '../assets/img/port00/port00-1.png';
import image02 from '../assets/img/port00/port00-2.png';
import image03 from '../assets/img/port00/port00-3.png';
import image11 from '../assets/img/port01/port01-1.png';
import image12 from '../assets/img/port01/port01-2.png';
import image13 from '../assets/img/port01/port01-3.png';
import image21 from '../assets/img/port02/port02-1.png';
import image22 from '../assets/img/port02/port02-2.png';
import image23 from '../assets/img/port02/port02-3.png';
import image31 from '../assets/img/port03/port03-1.png';
import image32 from '../assets/img/port03/port03-2.png';
import image33 from '../assets/img/port03/port03-3.png';
import ImageSlider from './animations/ImageSlider';


const Port = () => {



  const portText = [
    {
      img: [image01, image02, image03],
      title: "Vite PortFolio",
      text: ["개인프로젝트", "HTML CSS JS VITE"],
      git: "https://github.com/SIM-TOO/vite-portfolio",
      view: "https://tv.kakao.com/channel/4397165/cliplink/442241974",

    },
    {
      img: [image11, image12, image13],
      title: "WithDAY",
      text: ["팀프로젝트", "HTML CSS JS JAVA", "프론트엔드 40% 백엔드 30%"],
      git: "https://github.com/SIM-TOO/CoPebble",
      view: "https://tv.kakao.com/channel/4397165/cliplink/440170327",

    },

    {
      img: [image21, image22, image23],
      title: "React PortFolio",

      text: ["개인프로젝트", "SCSS JS React"],
      git: "https://github.com/SIM-TOO/portfolio2023",
      view: "https://tv.kakao.com/channel/4397165/cliplink/442250975",

    },
    {
      img: [image31, image32, image33],
      title: "eyecon",
      text: ["팀프로젝트", "Tailwind JS React SpringBoot Flask", "프론트엔드 60%"],
      git: "https://github.com/SIM-TOO/eyeconFront",
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
              <div className="title">
                <div>
                  {port.title}
                </div>
              </div>
              <div className="btn">
                <a href={port.git}>git</a>
                <a href={port.view}>view</a>
              </div>

              <div className="text" >{port.text[0]}</div>
              <div className="text">{port.text[1]}</div>
              <div className="text">{port.text[2]}</div>
              <div className="text">{port.text[3]}</div>
              <div className="text">{port.text[4]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Port