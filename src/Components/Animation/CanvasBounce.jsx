// src/CanvasBounceText.js
import React, { useRef, useEffect } from 'react';

const CanvasBounce = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let y = canvas.height / 2;
    let dy = 2;
    const text = 'Hello, I bounce!aaaaaaaaaaaaaaaaa';

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '30px Arial';
      ctx.fillStyle = 'blue';
      const textWidth = ctx.measureText(text).width;
      const x = (canvas.width - textWidth) / 2;
      ctx.fillText(text, x, y);
    };

    const updateText = () => {
      if (y + dy > canvas.height - 30 || y + dy < 30) {
        dy = -dy;
      }
      y += dy;
    };

    const animate = () => {
      drawText();
      updateText();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} width={600} height={150} />
  );
};

export default CanvasBounce;
