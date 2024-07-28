"use client";

import { useEffect, useRef } from "react";

const NoiseCanvas = ({ tile = 256, globalAlpha = 0.08 }) => {
  const canvasRef = useRef(null);
  const noiseCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const noiseCanvas = noiseCanvasRef.current;
    const noiseCtx = noiseCanvas.getContext("2d");

    noiseCanvas.width = tile;
    noiseCanvas.height = tile;

    // Create noise texture
    const createNoiseTexture = (context) => {
      const image = context.createImageData(tile, tile);
      const data = image.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value; // Red
        data[i + 1] = value; // Green
        data[i + 2] = value; // Blue
        data[i + 3] = 255; // Alpha
      }
      context.putImageData(image, 0, 0);
    };

    // Animation loop
    const animate = () => {
      createNoiseTexture(noiseCtx); // Generate noise texture
      draw();
      requestAnimationFrame(animate); // Schedule the next frame
    };

    const draw = () => {
      const tileWidth = Math.ceil(canvas.width / tile);
      const tileHeight = Math.ceil(canvas.height / tile);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = globalAlpha;

      for (let x = 0; x < tileWidth; x++) {
        for (let y = 0; y < tileHeight; y++) {
          const offsetX = x * tile;
          const offsetY = y * tile;
          ctx.drawImage(
            noiseCanvas,
            0,
            0,
            tile,
            tile,
            offsetX,
            offsetY,
            tile,
            tile
          );
        }
      }
    };

    // Initial setup and start animation
    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      draw();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    animate(); // Start the animation loop

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tile, globalAlpha]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-40 w-full h-full opacity-30"
        style={{ pointerEvents: "none" }}
      ></canvas>
      <canvas ref={noiseCanvasRef} style={{ display: "none" }}></canvas>{" "}
      {/* Hidden noise canvas */}
    </>
  );
};

export default NoiseCanvas;
