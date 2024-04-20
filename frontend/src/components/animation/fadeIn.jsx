import { useRef, useEffect } from "react"

import anime from 'animejs';

import { Box } from '@primer/react'

export const FadeIn = ({ children }) => {
  const objectRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust the threshold based on your needs
    };

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            anime({
              targets: objectRef.current,
              delay: 100,
              translateY: {
                value: "-30px",
                duration: 2500
              },
              opacity: {
                value: 1,
                duration: 10000
              }
            });
          }, 200); // 200 milliseconds delay
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the image element
    if (objectRef.current) {
      observer.observe(objectRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (objectRef.current) {
        observer.unobserve(objectRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={objectRef}
      sx={{
        opacity: 0,
      }}
    >
      {children}
    </Box>
  )
}