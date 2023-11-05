import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const SkillGraph = (skillText) => {
  const barRefs = useRef([]);
  barRefs.current = [];

  const addToRefs = (el) => {
    if (el && !barRefs.current.includes(el)) {
      barRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barRefs.current.forEach((bar, index) => {
              gsap.fromTo(
                bar,
                { width: 0 },
                // 애니메이션 시간 실정
                { duration: 5, width: skillText[index].desc, ease: 'power3.out' }
              );
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // 50%가 보일 때 애니메이션 실행
      }
    );

    // barRefs에 대한 변경사항을 관찰합니다.
    barRefs.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 옵저버 정리
  }, [skillText]);

  return addToRefs;
};

export default SkillGraph;
