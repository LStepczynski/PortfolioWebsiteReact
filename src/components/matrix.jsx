import React, { useEffect, useState } from 'react';

import { Box } from '@primer/react'

export const MatrixBackground = () => {
  const [alpha, setAlpha] = useState(0.2)

  const getAlpha = () => {
    return window.scrollY > 0 ? `${Math.min(window.scrollY / 100 * 0.07, 0.75)}` : "0.2";
  }

  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');
    context.globalAlpha = 0;
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const colors = ["#2d62b3", "#257a78", "#3b6b00", "#999798", "#b51b31", "#9c0060", "#7057b3"];
    let colorIndex = 0;
    const raindropsPerColumn = 2
  
    const alphabet = katakana + latin + nums;
  
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize)+1;
  
    const rainDrops = Array.from({ length: columns * raindropsPerColumn }, () => 1000);
  
    // Initialize an array to store individual color values for each raindrop
    const raindropColors = Array.from({ length: columns }, () => colors[0]);

    const draw = () => {
      const newAlpha = getAlpha()
      if (newAlpha != alpha) {
        setAlpha(getAlpha())
      }

      // Reduce the alpha value slightly for the background color
      context.fillStyle = 'rgba(13, 17, 23, 0.2)';
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      context.font = fontSize + 'px monospace';
    
      for (let i = 0; i < rainDrops.length; i += 1) {
        const columnIndex = i % columns;  // Calculate the column index for each raindrop
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    
        // Set color for the raindrop based on its individual color value
        context.fillStyle = raindropColors[columnIndex];
    
        context.fillText(text, columnIndex * fontSize, rainDrops[i] * fontSize);
    
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.998) {
          // Reset raindrop position and update its color
          rainDrops[i] = 0;
          raindropColors[columnIndex] = colors[Math.floor(colorIndex) % colors.length];
        }
        rainDrops[i]++;
      }
    
      // Gradually clear the entire canvas
      context.fillStyle = `rgba(13, 17, 23, 0.1)`;
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      colorIndex += 0.005;
    };
  
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    // Event listener for resizing
    window.addEventListener('resize', handleResize);
  
    // Initial draw and adjust the spawn frequency
    const animationInterval = setInterval(draw, 60);
  
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(animationInterval);
    };
  }, []); // Empty dependency array ensures the code runs after component mount
  

  return (
    <Box>
      <Box
        sx={{
          zIndex: -99,
          backgroundColor: `rgba(13, 17, 23, ${alpha})`,
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0
        }}
      ></Box>
      <canvas id="matrix" style={{position: "fixed", zIndex: -100, top: 0, left: 0}}></canvas>
    </Box>
  )
};
