import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MouseTracking = ({ children }) => {
    const frameRef = useRef(null);
    const cardRef = useRef(null);
    const lightRef = useRef(null);

    useEffect(() => {
        const frame = frameRef.current;
        const card = cardRef.current;
        const light = lightRef.current;
        let x, y, width, height;
        function updateMetrics() {
            const rect = frame.getBoundingClientRect();
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        function mouseMove(e) {
            updateMetrics();
            const left = e.clientX - x;
            const top = e.clientY - y;
            const centerX = left - width / 2;
            const centerY = top - height / 2;

            // GSAP 애니메이션을 사용하여 그림자와 변환 효과를 부드럽게 처리
            gsap.to(card, {
                boxShadow: `${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)`,
                duration: 0.3, // 애니메이션 지속 시간
                ease: 'power2.out', // 애니메이션 이징 함수
            });

            gsap.to(light, {
                backgroundPosition: `${left}px ${top}px`,
                duration: 0.3, // 애니메이션 지속 시간
                ease: 'power2.out', // 애니메이션 이징 함수
            });
        }

        function resetCardStyle() {
            // 초기 스타일로 되돌리는 애니메이션 추가
            gsap.to(card, {
                boxShadow: '0 0 1rem 0.5rem var(--black200)',
                duration: 0.3, // 애니메이션 지속 시간
                ease: 'power2.out', // 애니메이션 이징 함수
            });

            gsap.to(light, {
                backgroundPosition: 'center',
                duration: 0.3, // 애니메이션 지속 시간
                ease: 'power2.out', // 애니메이션 이징 함수
            });
        }

        frame.addEventListener('mousemove', mouseMove);
        frame.addEventListener('mouseleave', resetCardStyle);
        window.addEventListener('resize', updateMetrics);

        return () => {
            frame.removeEventListener('mousemove', mouseMove);
            frame.removeEventListener('mouseleave', resetCardStyle);
            window.removeEventListener('resize', updateMetrics);
        };
    }, []);

    return (
        <div ref={frameRef}>
            {children(cardRef, lightRef)}
        </div>
    );
}

export default MouseTracking;
