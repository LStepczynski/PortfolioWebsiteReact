import React, { useEffect, useState } from 'react';
import { Box, Link, Text } from '@primer/react';
import { debounce } from 'lodash';
import { RandomText } from './randomText'; 

export const NavBar = () => {
  const [visibility, setVisibility] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }

    setPrevScrollPos(currentScrollPos);
  }, 30); // Adjust the debounce delay as needed

  useEffect(() => {
    // Attach the debounced scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const itemStyle = {
    width: "max-content",
    alignItems: "center",
    display: "flex",
    height: "100%",
    fontSize: 3,
    mx: 4,
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "90px",
        backgroundColor: "canvas.subtle",
        display: "flex",
        justifyContent: "space-between",
        px: 4,
        position: "fixed",
        top: 0,
        zIndex: 1000,
        transition: "transform 0.2s ease",
        transform: visibility ? "translateY(0)" : "translateY(-100%)", // Slide out of the screen when not visible
      }}
    >
      <Box sx={itemStyle}>
        <RandomText text="Leon Stepczynski" sx={{cursor: "default"}} />
      </Box>

      <Box
        sx={{
          width: "min-content",
          display: "flex",
        }}
      >
        <Link href="/" sx={{":hover": {textDecoration: "none"}}}>
          <Box sx={itemStyle}>
          <RandomText text="Home" iteration={1/5} cooldown={600} sx={{py: 5}}/>
          </Box>
        </Link>

        <Link href="/projects" sx={{":hover": {textDecoration: "none"}}}>
          <Box sx={itemStyle}>
          <RandomText text="Projects" iteration={1/2} cooldown={500} sx={{py: 5}}/>
          </Box>
        </Link>

        <Link href="resume" sx={{":hover": {textDecoration: "none"}}}>
          <Box sx={itemStyle}>
          <RandomText text="Resume" iteration={1/3} cooldown={500} sx={{py: 5}}/>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
