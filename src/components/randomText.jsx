import React, { useEffect, useState, useRef } from 'react';
import { Text } from '@primer/react';

export const RandomText = ({ text, delay, iteration, cooldown, sx }) => {
  const [currentText, setCurrentText] = useState(text);
  const lastCallRef = useRef(0);

  if (!sx) sx = {};
  if (!delay) delay = 30;
  if (!iteration) iteration = 1 / 2;
  if (!cooldown) cooldown = 1000

  sx.fontFamily = "M PLUS Code Latin, sans-serif";
  sx.fontSize = "24px";
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  const handleEnter = () => {
    const currentTime = Date.now();

    if (currentTime - lastCallRef.current >= cooldown) {
      lastCallRef.current = currentTime;

      let iterations = 0;

      const interval = setInterval(() => {
        let newText = "";

        for (let i = 1; i <= text.length; i++) {
          if (iterations + 1 > i) {
            newText += text[i - 1];
          } else {
            newText += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        setCurrentText(newText);

        if (iterations >= text.length) {
          clearInterval(interval);
        }

        iterations += iteration;
      }, delay);
    }
  };

  return (
    <Text onMouseEnter={handleEnter} sx={sx}>
      {currentText}
    </Text>
  );
};
