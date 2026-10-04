import React, { useRef, useState, useEffect } from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  staggerIndex?: number;
  onClick?: () => void;
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = '',
  maxTilt = 7,
  scale = 1.015,
  staggerIndex = 0,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 1. Ultra-fast Scroll Unrolling via IntersectionObserver (no blur, hardware accelerated)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Direct DOM 3D Cursor Tilt (Zero React state updates / zero re-renders)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = -((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    el.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const delayMs = Math.min(staggerIndex * 40, 180);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu ${className}`}
      style={{
        transformOrigin: 'top center',
        transform: isVisible
          ? 'perspective(800px) rotateX(0deg) translateY(0px) scale(1)'
          : 'perspective(900px) rotateX(-12deg) translateY(24px) scale(0.97)',
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
};
