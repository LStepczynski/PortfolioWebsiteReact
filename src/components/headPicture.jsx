import { Box } from '@primer/react';
import { useState } from 'react';

export const HeadPicture = ({ image, opacity }) => {
  const [hover, sethover] = useState(false)

  return (
    <Box
      onMouseEnter={() => {sethover(true)}}
      onMouseLeave={() => {sethover(false)}}
      sx={{
        width: "70%",
        position: "absolute",
        top: 0,
        zIndex: -1,
        borderRadius: "25px", 
        opacity: opacity,
        overflow: "hidden",
      }}
    >
      <img 
        style={{ 
          width: hover ? "102%" :"100%",
          transform: hover ? "translate(-1.5%, -2.2%)" : "",
          transition: "all .3s ease"
        }} 
        src={image} 
        alt="Background" 
      />
    </Box>
  )
}