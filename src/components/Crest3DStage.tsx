import React, { useRef, useEffect, useState } from 'react';
import { soundEngine } from '../utils/audio';

interface Crest3DStageProps {
  className?: string;
  size?: number;
}

export const Crest3DStage: React.FC<Crest3DStageProps> = ({ className = '', size = 460 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;
    let pulseScale = 1;
    let shockwaveRadius = 0;

    // Particles in 3D orbit
    const particles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 360,
      y: (Math.random() - 0.5) * 360,
      z: (Math.random() - 0.5) * 200,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.015 + 0.005,
      alpha: Math.random() * 0.7 + 0.3,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotationAngle(scrollY * 0.002);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = () => {
      // Smooth damp mouse tilt
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.08;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.08;

      angle += 0.008;
      const tiltX = mousePos.current.y * 0.35;
      const tiltY = mousePos.current.x * 0.35;

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Radial floodlight glow behind the 3D emblem
      const glowGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 200);
      glowGrad.addColorStop(0, 'rgba(225, 6, 0, 0.28)');
      glowGrad.addColorStop(0.5, 'rgba(225, 6, 0, 0.08)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 200, 0, Math.PI * 2);
      ctx.fill();

      // Shockwave animation if clicked
      if (shockwaveRadius > 0) {
        ctx.save();
        ctx.strokeStyle = `rgba(225, 6, 0, ${Math.max(0, 1 - shockwaveRadius / 220)})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, shockwaveRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        shockwaveRadius += 6;
        if (shockwaveRadius > 220) shockwaveRadius = 0;
      }

      // Draw floating 3D dust particles in orbit
      particles.forEach((p) => {
        p.z += Math.sin(angle * 2 + p.speed) * 0.8;
        const pAngle = angle * p.speed * 20;
        const rotX = p.x * Math.cos(pAngle) - p.z * Math.sin(pAngle);
        const rotZ = p.x * Math.sin(pAngle) + p.z * Math.cos(pAngle);
        const fov = 400;
        const scale = fov / (fov + rotZ);
        const px = cx + rotX * scale;
        const py = cy + p.y * scale;

        if (scale > 0) {
          ctx.save();
          ctx.fillStyle = rotZ > 0 ? `rgba(255, 215, 0, ${p.alpha * 0.6})` : `rgba(225, 6, 0, ${p.alpha * 0.7})`;
          ctx.beginPath();
          ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // 3D Medallion Transform
      ctx.save();
      ctx.translate(cx, cy);

      // Perspective scale based on tilt
      const perspectiveScaleX = Math.cos(tiltY);
      const perspectiveShearY = Math.sin(tiltX) * 0.2;
      ctx.transform(perspectiveScaleX, perspectiveShearY, 0, 1, 0, 0);

      // 1. Outer Vermilion Ring with metallic edge
      ctx.beginPath();
      ctx.arc(0, 0, 155 * pulseScale, 0, Math.PI * 2);
      ctx.fillStyle = '#E10600';
      ctx.shadowColor = 'rgba(225, 6, 0, 0.8)';
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Outer gold/white rim
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Thin inner gold ring
      ctx.beginPath();
      ctx.arc(0, 0, 143, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FBBF24';
      ctx.stroke();

      // 2. Void Black Inner Dial
      ctx.beginPath();
      ctx.arc(0, 0, 137, 0, Math.PI * 2);
      ctx.fillStyle = '#080808';
      ctx.fill();

      // Subtle radial pitch rings
      ctx.beginPath();
      ctx.arc(0, 0, 95, 0, Math.PI * 2);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();

      // 3. Ring Text: "KARNATAKA STATE HOCKEY ASSOCIATION · ESTD 1937"
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 9.5px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const topText = "KARNATAKA STATE HOCKEY ASSOCIATION";
      const topAngleSpan = Math.PI * 1.15;
      const startTopAngle = -Math.PI / 2 - topAngleSpan / 2;
      for (let i = 0; i < topText.length; i++) {
        const charAngle = startTopAngle + (i / (topText.length - 1)) * topAngleSpan;
        ctx.save();
        ctx.rotate(charAngle);
        ctx.translate(0, -118);
        ctx.fillText(topText[i], 0, 0);
        ctx.restore();
      }

      const bottomText = "★  THE HOUSE OF GLORY · 1937  ★";
      const botAngleSpan = Math.PI * 0.75;
      const startBotAngle = Math.PI / 2 + botAngleSpan / 2;
      for (let i = 0; i < bottomText.length; i++) {
        const charAngle = startBotAngle - (i / (bottomText.length - 1)) * botAngleSpan;
        ctx.save();
        ctx.rotate(charAngle);
        ctx.translate(0, -118);
        ctx.fillText(bottomText[i], 0, 0);
        ctx.restore();
      }
      ctx.restore();

      // 4. Crossed 3D Field Hockey Sticks
      ctx.save();
      const drawHockeyStick = (rot: number, mirror: boolean) => {
        ctx.save();
        ctx.rotate(rot);
        ctx.scale(mirror ? -1 : 1, 1);

        // Stick shaft
        ctx.beginPath();
        ctx.moveTo(-7, -80);
        ctx.lineTo(7, -80);
        ctx.lineTo(6, 45);
        // Hook toe curve
        ctx.quadraticCurveTo(6, 75, 30, 75);
        ctx.quadraticCurveTo(34, 75, 32, 65);
        ctx.quadraticCurveTo(20, 63, 14, 52);
        ctx.lineTo(13, -80);
        ctx.closePath();

        const stickGrad = ctx.createLinearGradient(-10, -80, 20, 75);
        stickGrad.addColorStop(0, '#E2E8F0');
        stickGrad.addColorStop(0.4, '#94A3B8');
        stickGrad.addColorStop(0.7, '#D4D4D8');
        stickGrad.addColorStop(1, '#E10600');
        ctx.fillStyle = stickGrad;
        ctx.fill();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Grip bindings
        ctx.strokeStyle = '#18181B';
        ctx.lineWidth = 2.5;
        for (let y = -75; y < -25; y += 7) {
          ctx.beginPath();
          ctx.moveTo(-6, y);
          ctx.lineTo(6, y + 3);
          ctx.stroke();
        }
        ctx.restore();
      };

      drawHockeyStick(-Math.PI / 4, false);
      drawHockeyStick(Math.PI / 4, true);
      ctx.restore();

      // 5. Mythological Royal Gandaberunda Double-Headed Eagle Emblem (Centerpiece)
      ctx.save();
      ctx.translate(0, -5);

      // Gold Bevel Shield
      ctx.beginPath();
      ctx.moveTo(0, -38);
      ctx.lineTo(32, -18);
      ctx.lineTo(26, 26);
      ctx.lineTo(0, 46);
      ctx.lineTo(-26, 26);
      ctx.lineTo(-32, -18);
      ctx.closePath();
      
      const shieldGrad = ctx.createLinearGradient(0, -38, 0, 46);
      shieldGrad.addColorStop(0, '#1E293B');
      shieldGrad.addColorStop(0.5, '#0F172A');
      shieldGrad.addColorStop(1, '#020617');
      ctx.fillStyle = shieldGrad;
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#FBBF24';
      ctx.stroke();

      // Royal Crest Eagle Silhouette (Double-Headed Gandaberunda)
      ctx.fillStyle = '#FFFFFF';
      
      // Left Eagle Head & Beak
      ctx.beginPath();
      ctx.moveTo(-4, -18);
      ctx.lineTo(-14, -28);
      ctx.lineTo(-24, -24);
      ctx.lineTo(-28, -18);
      ctx.lineTo(-22, -16);
      ctx.lineTo(-15, -18);
      ctx.closePath();
      ctx.fill();

      // Right Eagle Head & Beak
      ctx.beginPath();
      ctx.moveTo(4, -18);
      ctx.lineTo(14, -28);
      ctx.lineTo(24, -24);
      ctx.lineTo(28, -18);
      ctx.lineTo(22, -16);
      ctx.lineTo(15, -18);
      ctx.closePath();
      ctx.fill();

      // Royal Crown atop the heads
      ctx.fillStyle = '#FBBF24';
      ctx.beginPath();
      ctx.moveTo(-10, -28);
      ctx.lineTo(-7, -36);
      ctx.lineTo(0, -32);
      ctx.lineTo(7, -36);
      ctx.lineTo(10, -28);
      ctx.closePath();
      ctx.fill();

      // Eagle outstretched wings & chest
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(-6, -15);
      ctx.lineTo(-24, -2);
      ctx.lineTo(-20, 14);
      ctx.lineTo(-8, 22);
      ctx.lineTo(0, 26);
      ctx.lineTo(8, 22);
      ctx.lineTo(20, 14);
      ctx.lineTo(24, -2);
      ctx.lineTo(6, -15);
      ctx.closePath();
      ctx.fill();

      // Royal Red Heart jewel in chest
      ctx.beginPath();
      ctx.arc(0, 5, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#E10600';
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#FBBF24';
      ctx.stroke();

      ctx.restore(); // end Gandaberunda

      // 6. Central Hockey Turf Ball (dimpled ball)
      ctx.save();
      ctx.translate(0, 52);
      ctx.beginPath();
      ctx.arc(0, 0, 11, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#000000';
      ctx.stroke();

      // Dimple pattern
      ctx.fillStyle = '#CBD5E1';
      [-4, 0, 4].forEach(dx => {
        [-4, 0, 4].forEach(dy => {
          if (dx * dx + dy * dy < 50) {
            ctx.beginPath();
            ctx.arc(dx, dy, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });
      ctx.restore();

      ctx.restore(); // end 3D Medallion Transform

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    soundEngine.playStickStrike();
    soundEngine.playGloryChime();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mousePos.current.targetX = 0;
        mousePos.current.targetY = 0;
      }}
      className={`relative cursor-pointer select-none group flex flex-col items-center justify-center ${className}`}
      title="Click to strike the ball & trigger the acoustic stick impulse"
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="w-full max-w-[460px] h-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute -bottom-4 text-[10px] uppercase font-mono tracking-[0.25em] text-neutral-600 font-medium group-hover:text-ksha-red transition-all flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-ksha-red animate-ping" />
        Interactive 3D Crest · Click for Acoustic Strike
      </div>
    </div>
  );
};
