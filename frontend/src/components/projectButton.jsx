import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@primer/react';

import anime from 'animejs';

export const ProjectButton = () => {
  const [hover, setHover] = useState(false)
  const btnRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold based on your needs
    };

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            anime({
              targets: btnRef.current,
              translateY: "45px",
              rotate: "1turn",
              duration: 1500,
              delay: 100,
              opacity: {
                value: 1,
                duration: 10000
              }
            });
            entry.target.classList.add('play-animation');
          }, 200); // 200 milliseconds delay
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the image element
    if (btnRef.current) {
      observer.observe(btnRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (btnRef.current) {
        observer.unobserve(btnRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    window.location.href = "/projects"
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        mb: "180px",
      }}
    >
      <Box
        ref={btnRef}
        onClick={handleClick}
        onMouseEnter={() => { setHover(true) }}
        onMouseLeave={() => { setHover(false) }}
        sx={{
          backgroundColor: hover ? "accent.fg" : "accent.emphasis",
          fontFamily: "M PLUS Code Latin, sans-serif",
          cursor: "pointer",
          transition: "background-color 0.2s",
          borderRadius: "10px",
          fontSize: "28px",
          opacity: 0,
          mt: "40px",
          px: 5,
          py: 2,
          ":hover": {
            backgroundColor: "accent.fg",
          }
        }}
      >
        Projects
      </Box>
    </Box>
  )
}