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

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xe3000f, 2.5);
    directionalLight.position.set(15, 20, 25);
    scene.add(directionalLight);

    const goldLight = new THREE.PointLight(0xffb703, 3, 60);
    goldLight.position.set(-15, -10, 20);
    scene.add(goldLight);

    // 3. 3D Particle Constellation (Red & Gold)
    const particleCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const originalPositions = new Float32Array(particleCount * 3);

    const colorRed = new THREE.Color('#E3000F');
    const colorGold = new THREE.Color('#D4AF37');
    const colorWhite = new THREE.Color('#FFFFFF');

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 85;
      const y = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 60;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      scales[i] = Math.random() * 2.5 + 0.8;

      // Color variation
      const rand = Math.random();
      const chosenColor = rand > 0.6 ? colorRed : rand > 0.25 ? colorGold : colorWhite;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle sprite using canvas texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(0.7, 'rgba(227, 0, 15, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.4,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 4. Undulating 3D Wireframe Field (Astroturf Waves)
    const waveGeo = new THREE.PlaneGeometry(90, 90, 36, 36);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0xe3000f,
      wireframe: true,
      transparent: true,
      opacity: 0.05
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI / 2.3;
    waveMesh.position.y = -18;
    waveMesh.position.z = -10;
    scene.add(waveMesh);

    // 5. Stylized 3D Hockey Sphere & Orbiting Gyroscope Rings
    const group3D = new THREE.Group();
    group3D.position.set(0, 4, -5);

    // Ball
    const ballGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.65,
      wireframe: false
    });
    const ballMesh = new THREE.Mesh(ballGeo, ballMat);
    group3D.add(ballMesh);

    // Orbit Ring 1 (Gold)
    const ringGeo1 = new THREE.TorusGeometry(5.8, 0.06, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    group3D.add(ringMesh1);

    // Orbit Ring 2 (Vermilion)
    const ringGeo2 = new THREE.TorusGeometry(6.6, 0.05, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe3000f,
      transparent: true,
      opacity: 0.5
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    group3D.add(ringMesh2);

    scene.add(group3D);

    // 6. Interactive Mouse & Scroll State
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    let targetScrollY = 0;
    let currentScrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Click interactive ripple
    const onPointerDown = () => {
      ballMat.color.setHex(0xe3000f);
      setTimeout(() => {
        ballMat.color.setHex(0xffffff);
      }, 350);
    };
    window.addEventListener('pointerdown', onPointerDown);

    // 7. Animation Loop
    let clock = new THREE.Clock();
    let animationId: number;

    const wavePos = waveGeo.attributes.position;
    const waveCount = wavePos.count;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (isMotionPaused) {
        renderer.render(scene, camera);
        return;
      }

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll tracking
      currentScrollY += (targetScrollY - currentScrollY) * 0.06;
      const scrollRatio = currentScrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);

      // Camera choreography based on scroll
      camera.position.x = mouse.x * 4;
      camera.position.y = -scrollRatio * 30 + mouse.y * 3;
      camera.position.z = 35 + Math.sin(scrollRatio * Math.PI * 2) * 5;
      camera.lookAt(0, -scrollRatio * 25, 0);

      // Rotate 3D group
      group3D.rotation.y += 0.008;
      group3D.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2 + mouse.y * 0.4;
      ringMesh1.rotation.z += 0.015;
      ringMesh2.rotation.y += 0.012;

      // Move group down slightly as you scroll
      group3D.position.y = 4 - scrollRatio * 25;

      // Animate astroturf wave vertices
      for (let i = 0; i < waveCount; i++) {
        const u = wavePos.getX(i);
        const v = wavePos.getY(i);
        const z = Math.sin(u * 0.2 + elapsedTime * 1.5) * Math.cos(v * 0.2 + elapsedTime * 1.5) * 1.8;
        wavePos.setZ(i, z);
      }
      wavePos.needsUpdate = true;

      // Subtle particle float
      particles.rotation.y = elapsedTime * 0.02 + mouse.x * 0.1;
      particles.rotation.x = mouse.y * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointerdown', onPointerDown);

      geometry.dispose();
      particleMaterial.dispose();
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
      style={{ willChange: 'transform' }}
    />
  );
};
