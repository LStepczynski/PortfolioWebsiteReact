import { Box } from '@primer/react';
import { useState } from 'react';


export const AnimatedImage = (props) => {
  const [hover, sethover] = useState(false)
  
  const { image } = props   

  return (
    <Box
      onMouseEnter={() => {sethover(true)}}
      onMouseLeave={() => {sethover(false)}}
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img 
        style={{ 
          width: hover ? "102%" :"100%",
          transform: hover ? "translate(-1%, -1%)" : "",
          transition: "all .3s ease"
        }} 
        src={image} 
        alt="Background" 
      />
    </Box>
  )
}