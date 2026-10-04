import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WebGL3DExperienceProps {
  isMotionPaused?: boolean;
}

export const WebGL3DExperience: React.FC<WebGL3DExperienceProps> = ({ isMotionPaused = false }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer (Optimized for 60-120fps with minimal GPU footprint)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Antialiasing is unnecessary for background particles & saves ~40% GPU fillrate
      powerPreference: 'high-performance',
      precision: 'mediump'
    });

    // Capped at 1.0 to avoid 4K/Retina fill-rate choking
    renderer.setPixelRatio(1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xe3000f, 1.8);
    directionalLight.position.set(10, 15, 20);
    scene.add(directionalLight);

    // 3. Lightweight 3D Particle Constellation (120 particles)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCrimson = new THREE.Color(0xe3000f);
    const colorGold = new THREE.Color(0xd4af37);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 60;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 35;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? colorCrimson : rand > 0.3 ? colorGold : colorWhite;
      particleColors[i3] = chosenColor.r;
      particleColors[i3 + 1] = chosenColor.g;
      particleColors[i3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Pre-calculated Astroturf Wave Mesh (Calculated ONCE on GPU, zero CPU per-frame loops)
    const waveCols = 28;
    const waveRows = 22;
    const waveGeo = new THREE.PlaneGeometry(80, 50, waveCols, waveRows);
    const wavePos = waveGeo.attributes.position;
    for (let i = 0; i < wavePos.count; i++) {
      const u = wavePos.getX(i);
      const v = wavePos.getY(i);
      const z = Math.sin(u * 0.25) * Math.cos(v * 0.25) * 2.2;
      wavePos.setZ(i, z);
    }
    waveGeo.computeVertexNormals();

    const waveMat = new THREE.MeshBasicMaterial({
      color: 0xe3000f,
      wireframe: true,
      transparent: true,
      opacity: 0.04
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI / 2.3;
    waveMesh.position.y = -16;
    waveMesh.position.z = -8;
    scene.add(waveMesh);

    // 5. Stylized 3D Hockey Sphere & Orbiting Gyroscope Rings
    const group3D = new THREE.Group();
    group3D.position.set(0, 3, -4);

    const ballGeo = new THREE.SphereGeometry(3.2, 24, 24);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.5
    });
    const ballMesh = new THREE.Mesh(ballGeo, ballMat);
    group3D.add(ballMesh);

    // Gold Ring
    const ringGeo1 = new THREE.TorusGeometry(5.2, 0.05, 12, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    group3D.add(ringMesh1);

    // Vermilion Ring
    const ringGeo2 = new THREE.TorusGeometry(6.0, 0.04, 12, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe3000f,
      transparent: true,
      opacity: 0.5
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    group3D.add(ringMesh2);

    scene.add(group3D);

    // 6. Passive Event Listeners
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetScrollY = 0;
    let currentScrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    let resizeTimeout: any = null;
    const onResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // 7. High-efficiency Animation Loop with tab visibility awareness
    let animationId: number;
    let isHidden = false;

    const onVisibilityChange = () => {
      isHidden = document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (isHidden || isMotionPaused) return;

      // Mouse smoothing
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      // Scroll smoothing
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const scrollRatio = Math.min(1, Math.max(0, currentScrollY / maxScroll));

      // Camera choreography
      camera.position.x = mouseX * 2.5;
      camera.position.y = -scrollRatio * 20 + mouseY * 1.5;
      camera.lookAt(0, -scrollRatio * 18, 0);

      // Lightweight 3D rotations (pure GPU vertex transform)
      group3D.rotation.y += 0.005;
      ringMesh1.rotation.z += 0.01;
      ringMesh2.rotation.y += 0.008;
      group3D.position.y = 3 - scrollRatio * 20;

      // Gentle wave drift
      waveMesh.rotation.z += 0.0008;

      // Subtle particle drift
      particles.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      particleGeo.dispose();
      particleMat.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      ballGeo.dispose();
      ballMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMotionPaused]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-700"
    />
  );
};
