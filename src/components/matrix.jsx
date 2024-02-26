import React, { useEffect } from 'react';

export const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');
    context.globalAlpha = 0

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const rainDrops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      // Reduce the alpha value slightly for the background color
      context.fillStyle = 'rgba(13, 17, 23, 0.2)';
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      context.fillStyle = '#304463';
      context.font = fontSize + 'px monospace';
    
      for (let i = 0; i < rainDrops.length; i += 1) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.995) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    
      // Gradually clear the entire canvas
      context.fillStyle = 'rgba(13, 17, 23, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Event listener for resizing
    window.addEventListener('resize', handleResize);

    // Initial draw and adjust the spawn frequency
    setInterval(draw, 50);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the code runs after component mount

  return <canvas id="matrix" style={{position: "fixed", zIndex: -100, top: 0, left: 0}}></canvas>;
};
