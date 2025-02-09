import { Box } from '@primer/react';
import { useState, useRef, useEffect } from 'react';

export const AnimatedImage = (props) => {
  const [hovering, sethovering] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  const { image } = props;

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener('load', () => {
        containerRef.current.style.height = `${imageRef.current.offsetHeight}px`;
      });
    }
  }, [image]);

  return (
    <Box
      ref={containerRef}
      onMouseEnter={() => sethovering(true)}
      onMouseLeave={() => sethovering(false)}
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img 
        ref={imageRef}
        loading='lazy'
        style={{ 
          transform: "translate(-50%, -50%)",
          width: hovering ? "102%" : "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transition: "all .3s ease"
        }} 
        src={image} 
        alt="Background" 
      />
    </Box>
  );
};
