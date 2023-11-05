import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const IntroTitle = ({ texts }) => {
    const elementRef = useRef();
    const q = gsap.utils.selector(elementRef);

    useEffect(() => {
        // 모든 텍스트에 대한 애니메이션 설정
        gsap.fromTo(
            q(".char"),
            { opacity: 0 },
            {
                duration: 0.6,
                opacity: 1,
                stagger: 0.07,
                ease: "power2.out",
            }
        );
    }, [q]);

    // 텍스트 배열을 순회하며 각 줄을 span 요소로 감싸기
    const splitText = texts.map((line, lineIndex) => (
        <div key={lineIndex} className={`intro__title ${lineIndex === 1 ? 'two' : ''}`}>
            {line.split("").map((char, index) => (
                <span key={index} className="char">
                    {char}
                </span>
            ))}
        </div>
    ));

    return <h1 ref={elementRef}>{splitText}</h1>;
};

export default IntroTitle;
