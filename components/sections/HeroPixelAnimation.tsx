"use client";

import { useEffect, useRef } from "react";

const CELL_SIZE = 4;
const CELL_GAP = 2;
const CELL_STEP = CELL_SIZE + CELL_GAP;
const PARTICLE_PROBABILITY = 0.05;
const ACCENT_COLOR = "#e53935";
const SECONDARY_COLOR = "#171717";

interface Particle {
  x: number;
  y: number;
  strength: number;
  color: string;
  nextBlinkAt: number;
  blinkStartedAt: number;
  blinkDuration: number;
}

export function HeroPixelAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;
    let particles: Particle[] = [];
    let isStarted = false;

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reduceMotion && time >= particle.nextBlinkAt) {
          particle.blinkStartedAt = time;
          particle.blinkDuration = 320 + Math.random() * 330;
          particle.nextBlinkAt = time + particle.blinkDuration + 1600 + Math.random() * 3000;
        }

        const blinkProgress = (time - particle.blinkStartedAt) / particle.blinkDuration;
        const blink = blinkProgress >= 0 && blinkProgress <= 1
          ? Math.sin(blinkProgress * Math.PI)
          : 0;
        const maxOpacity = particle.color === ACCENT_COLOR ? 0.85 : 0.72;
        const restingOpacity = reduceMotion ? 0.3 : 0.06;
        const opacity = (restingOpacity + blink * (maxOpacity - restingOpacity)) * particle.strength;

        context.globalAlpha = opacity;
        context.fillStyle = particle.color;
        context.fillRect(particle.x, particle.y, CELL_SIZE, CELL_SIZE);
      }

      context.globalAlpha = 1;
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles = [];
      const columns = Math.floor(width / CELL_STEP);
      const rows = Math.floor(height / CELL_STEP);
      const candidates = Array.from({ length: columns * rows }, (_, index) => index);
      const blinkEpoch = performance.now();

      for (let index = candidates.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [candidates[index], candidates[swapIndex]] = [candidates[swapIndex], candidates[index]];
      }

      for (const index of candidates) {
        if (Math.random() >= PARTICLE_PROBABILITY) continue;

        const column = index % columns;
        const row = Math.floor(index / columns);
        particles.push({
          x: column * CELL_STEP,
          y: row * CELL_STEP,
          strength: 0.55 + Math.random() * 0.45,
          color: Math.random() < 0.68 ? ACCENT_COLOR : SECONDARY_COLOR,
          nextBlinkAt: blinkEpoch + Math.random() * 3500,
          blinkStartedAt: -1,
          blinkDuration: 300,
        });
      }

      if (isStarted) draw(performance.now());
    };

    const animate = (time: number) => {
      draw(time);

      animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (isStarted) return;
      isStarted = true;
      resize();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    resize();
    observer.observe(canvas);
    window.addEventListener("home:pixel-start", start);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("home:pixel-start", start);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-pixel-field" aria-hidden="true" />;
}
