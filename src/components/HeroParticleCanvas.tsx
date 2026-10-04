import React, { useRef, useEffect } from 'react';

interface HeroParticleCanvasProps {
  className?: string;
  paused?: boolean;
}

export const HeroParticleCanvas: React.FC<HeroParticleCanvasProps> = ({
  className = '',
  paused = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle system: 85 particles floating in 3D space
    const particles = Array.from({ length: 85 }, () => ({
      x: (Math.random() - 0.5) * window.innerWidth * 1.2,
      y: (Math.random() - 0.5) * window.innerHeight * 1.2,
      z: Math.random() * 600 - 300,
      size: Math.random() * 3 + 1.2,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.3 - 0.15,
      speedZ: (Math.random() - 0.5) * 0.5,
      baseAlpha: Math.random() * 0.6 + 0.25,
      colorType: Math.random() > 0.4 ? 'red' : 'gold',
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!paused && isVisible && !document.hidden) {
        mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
        mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

        angle += 0.003;
        const width = canvas.width;
        const height = canvas.height;
        const cx = width / 2;
        const cy = height / 2;

        ctx.clearRect(0, 0, width, height);

        // Render each particle in 3D perspective
        const fov = 500;
        const tiltOffsetX = mousePos.current.x * 60;
        const tiltOffsetY = mousePos.current.y * 40;

        particles.forEach((p) => {
          // Drift motion
          p.x += p.speedX;
          p.y += p.speedY;
          p.z += p.speedZ;

          // Wrap boundaries
          const boundX = width * 0.65;
          const boundY = height * 0.65;
          if (p.x < -boundX) p.x = boundX;
          if (p.x > boundX) p.x = -boundX;
          if (p.y < -boundY) p.y = boundY;
          if (p.y > boundY) p.y = -boundY;
          if (p.z < -250) p.z = 250;
          if (p.z > 250) p.z = -250;

          const scale = fov / (fov + p.z);
          if (scale > 0) {
            const px = cx + (p.x + tiltOffsetX) * scale;
            const py = cy + (p.y + tiltOffsetY) * scale;

            const pulse = Math.sin(angle * 2 + p.pulseOffset) * 0.2 + 0.8;
            const alpha = p.baseAlpha * pulse * Math.min(1, Math.max(0.1, scale));

            ctx.save();
            ctx.beginPath();
            ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);

            if (p.colorType === 'red') {
              ctx.fillStyle = `rgba(227, 0, 15, ${alpha * 0.75})`;
              ctx.shadowColor = 'rgba(227, 0, 15, 0.5)';
              ctx.shadowBlur = 8 * scale;
            } else {
              ctx.fillStyle = `rgba(217, 119, 6, ${alpha * 0.85})`;
              ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
              ctx.shadowBlur = 6 * scale;
            }

            ctx.fill();
            ctx.restore();
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [paused]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.95 }}
    />
  );
};
