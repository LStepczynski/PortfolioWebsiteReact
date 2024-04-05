import React, { useEffect, useState } from 'react';
import { Box } from '@primer/react';
import { MorphingBlob } from './animation/morphingBlob'; 

export const ProfilePicture = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [color, setColor] = useState("rgba(2, 30, 77, 0.7)")

  const handleMouseEnter = () => {
    setIsHovering(true);
    setColor("rgba(44, 2, 112, 0.7)")
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setColor("rgba(2, 30, 77, 0.7)")
  };

  const imgStyle = {
    width: '100%',
    transition: 'width 0.3s ease, transform 0.37s ease', // Add smooth transition
    ...(isHovering && { width: '107%', transform: "translate(-3.5%, -3.5%)" }), // Apply width increase on hover
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '520px',
        height: '520px',
        '@media screen and (max-width: 768px)': {
          height: '350px',
          width: '350px',
        },
        '@media screen and (max-width: 544px)': {
          height: '280px',
          width: '280px',
        },
      }}
    >
      <MorphingBlob color={color}/>

      <Box
        sx={{
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          borderRadius: '50%',
          overflow: "hidden",
          height: '300px',
          width: '300px',
          left: '50%',
          top: '50%',
          '@media screen and (max-width: 768px)': {
            height: '200px',
            width: '200px',
          },
          '@media screen and (max-width: 544px)': {
            height: '160px',
            width: '160px',
          },
        }}
      >
        <img
          src="profilePicture.jpg"
          alt="Profile Picture"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={imgStyle}
        />
      </Box>
    </Box>
  );
};
