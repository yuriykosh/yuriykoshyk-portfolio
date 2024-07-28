"use client"; // Ensure this is at the top

import { useEffect, useRef } from "react";

const CanvasAnimation = ({ blur }) => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const ratio = useRef(1); // Initialize with a default value

  const wide = 36;
  const high = wide / 2.2;
  const size = 30;
  const padding = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
      ratio.current = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio.current;
      canvas.height = window.innerHeight * ratio.current;
    };

    updateCanvasSize(); // Initialize canvas size
    window.addEventListener("resize", updateCanvasSize);

    const createDots = () => {
      const cb = canvas.getBoundingClientRect();
      const newDots = [];
      for (let i = 0; i < wide; i++) {
        const x =
          Math.floor(((cb.width - padding * 2) / (wide - 1)) * i + padding) *
          ratio.current;
        for (let j = 0; j < high; j++) {
          const y =
            Math.floor(((cb.height - padding * 2) / (high - 1)) * j + padding) *
            ratio.current;
          newDots.push({ x, y, ox: x, oy: y });
        }
      }
      dots.current = newDots;
    };

    const getDistance = (obj1, obj2) => {
      const dx = obj1.x - obj2.x;
      const dy = obj1.y - obj2.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const getAngle = (obj1, obj2) => {
      const dX = obj2.x - obj1.x;
      const dY = obj2.y - obj1.y;
      return (Math.atan2(dY, dX) / Math.PI) * 180;
    };

    const getV = (dot) => {
      const d = getDistance(dot, mouse.current);
      dot.size = (200 - d) / 20;
      dot.size = dot.size < 1 ? 1 : dot.size;
      dot.angle = getAngle(dot, mouse.current);
      return {
        x: (d > 20 ? 20 : d) * Math.cos((dot.angle * Math.PI) / 180),
        y: (d > 20 ? 20 : d) * Math.sin((dot.angle * Math.PI) / 180),
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#fff";
      for (const dot of dots.current) {
        const v = getV(dot);
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(dot.x + v.x, dot.y + v.y);
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 1 * ratio.current;
        ctx.stroke();
        ctx.closePath();
      }
      for (const dot of dots.current) {
        const v = getV(dot);
        ctx.beginPath();
        ctx.arc(
          dot.x + v.x,
          dot.y + v.y,
          dot.size * ratio.current,
          0,
          2 * Math.PI,
          false
        );
        ctx.fill();
        ctx.closePath();
      }
    };

    const animloop = () => {
      render();
      requestAnimationFrame(animloop);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.pageX * ratio.current;
      mouse.current.y = e.pageY * ratio.current;
    };

    window.addEventListener("mousemove", handleMouseMove);

    createDots();
    animloop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [high]); // Empty dependency array means this effect runs once on mount

  return (
    <canvas
      ref={canvasRef}
      className={`absolute hidden inset-0 z-0 w-full lg:block ${
        blur === "yes" ? "blur-sm" : ""
      }`}
    />
  );
};

export default CanvasAnimation;
