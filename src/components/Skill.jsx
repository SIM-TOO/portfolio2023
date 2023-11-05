import React from 'react';
import SkillGraph from './animations/SkillGraph';

const Skill = () => {
  const skillText = [
    {
      title: "HTML",
      desc: '90%',
    },
    {
      title: "CSS",
      desc: "90%",
    },
    {
      title: "JavaScript",
      desc: "80%",
    },
    {
      title: "React.JS",
      desc: "80%",
    },
    {
      title: "SCSS",
      desc: "60%",
    },
    {
      title: "Java",
      desc: "40%",
    },
    {
      title: "pyhon",
      desc: "40%",
    },
  ];

  const addToRefs = SkillGraph(skillText);

  return (
    <section id="skill">
      <div className="skill__inner">
        <div className="skill__title">
          Skills
        </div>
        {skillText.map((skill, index) => (
          <div key={skill.title} className="skill__item">
            <div className="skill__name">{skill.title}</div>
            <div className="skill__desc">{skill.desc}</div>
            <div className="skill__bar" ref={addToRefs} style={{ width: 0 }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
