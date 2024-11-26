import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  speed: number;
}

export default function ParticleText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 0]);
  
  const smoothScale = useSpring(scale, { damping: 15, stiffness: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Particle[] = [];
    const particleCount = 1000;
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.35;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        targetX: x,
        targetY: y,
        size: Math.random() * 2 + 1,
        color: `rgba(${Math.random() * 50 + 200}, ${Math.random() * 50 + 100}, ${Math.random() * 255}, ${Math.random() * 0.3 + 0.7})`,
        speed: Math.random() * 0.02 + 0.01
      });
    }

    let animationFrameId: number;
    let phase = 0;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      phase += deltaTime * 0.0002;

      particles.forEach((particle, i) => {
        const angle = (i / particleCount) * Math.PI * 2 + phase;
        const distanceModifier = 1 + Math.sin(phase * 2 + i * 0.1) * 0.1;
        
        particle.targetX = centerX + Math.cos(angle) * radius * distanceModifier;
        particle.targetY = centerY + Math.sin(angle) * radius * distanceModifier;

        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        
        particle.x += dx * particle.speed;
        particle.y += dy * particle.speed;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[200vh] bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale: smoothScale, opacity }}
          className="relative h-full"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ mixBlendMode: 'screen' }}
          />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale: textScale, opacity: textOpacity }}
        >
          <h2
            className="text-6xl md:text-8xl font-bold text-center"
            style={{
              background: 'linear-gradient(135deg, #e879f9 0%, #818cf8 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            YOUR MARKETING
            <br />
            CATALYST
          </h2>
        </motion.div>
      </div>
    </div>
  );
}