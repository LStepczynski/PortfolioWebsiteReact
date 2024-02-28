import React, { useEffect, useState } from 'react';
import { Box, Link, Text } from '@primer/react';

export const ProjectButton = () => {
  const [hover, setHover] = useState(false)

  return (
    <Link 
      onMouseOver={() => {setHover(true)}} 
      onMouseLeave={() => {setHover(false)}}
      sx={{
        ":hover": {
          textDecoration: "none"
        }
      }}
    >
      <Box
        sx={{
          display:"flex",
          color: "white",
          fontFamily: "M PLUS Code Latin, sans-serif",
          fontSize: "36px"
        }}
      >
        <Box
          sx={{
            transition: "all .5s ease",
            transform: hover ? "rotate(30deg) translate(-20px,10px)" : "",
            backgroundColor: "red",
            borderRadius: "10px",
            p: "10px",
            pr: 0,
          }}
        >
          <Text>Pro</Text>
        </Box>
        <Box
          sx={{
            transition: "all .5s ease",
            transform: hover ? "rotate(-10deg) translate(5px,10px)" : "",
            backgroundColor: "green",
            p: "10px",
            px: 0,
          }}
        >
          <Text>je</Text>
        </Box>
        <Box
          sx={{
            transition: "all .5s ease",
            transform: hover ? "rotate(50deg) translate(25px,-15px)" : "",
            backgroundColor: "blue",
            p: "10px",
            pl: 0,
          }}
        >
          <Text>cts</Text>
        </Box>
      </Box>
    </Link>
  )
}