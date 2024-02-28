import { Box, Heading } from '@primer/react'
import { useState, useEffect, useRef } from 'react'
import anime from 'animejs';

export const PersonalInformation = ({ children, title, id}) => {
  const [hovering, setHovering] = useState(false)
  const textRef = useRef(null);

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
              targets: textRef.current,
              translateX: "0px",
              delay: 100,
              opacity: {
                value: 1,
                duration: 2500
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
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <Box 
      sx={{
        display: "grid", 
        justifyItems: "center", 
        mt: "150px"
      }}
    >
      <Box
        id={id}
        ref={textRef}
        onMouseOver={() => {setHovering(true)}}
        onMouseLeave={() => {setHovering(false)}}
        sx={{
          width: "60%",
          transition: "transform 1s ease",
          opacity: 0,
          transform: "translateX(-100px)",
          fontFamily: "M PLUS Code Latin, sans-serif",
          justifyContent: "space-around",
          '@media screen and (max-width: 1012px)': {
            width: "75%",
          },
          '@media screen and (max-width: 768px)': {
            width: "80%",
          },
        }}
      >
        <Heading
          sx={{
            transition: "all 0.3s ease",
            letterSpacing: hovering ? "5px" : "",
            transform: hovering ? "translateY(5px)" : "",
          }}
        >
          {title}
        </Heading>
        <p 
          style={{
            textAlign: "justify",
            fontSize: "20px",
          }}
        >
          {children}
        </p>
      </Box>
    </Box>
  )
}