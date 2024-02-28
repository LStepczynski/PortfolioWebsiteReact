import React, { useEffect, useRef, useState } from 'react';
import { Box, Link, Button, Text } from '@primer/react';
import { RandomText } from './randomText';

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
    <Box>
        <Button
          ref={btnRef}
          onClick={handleClick}
          onMouseEnter={() => {setHover(true)}}
          onMouseLeave={() => {setHover(false)}}
          sx={{
            fontFamily: "M PLUS Code Latin, sans-serif",
            letterSpacing: hover ? "2px" : "",
            transition: "all .3s ease",
            fontSize: "28px",
            opacity: 0,
            p: 4,
            ":hover": {
              textDecoration: "none",
            }
          }}
        >
          Projects
        </Button>
    </Box>
  )
}