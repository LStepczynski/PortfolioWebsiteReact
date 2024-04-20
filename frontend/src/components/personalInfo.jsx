import { Box, Heading, Text } from '@primer/react'
import { useState, useEffect, useRef } from 'react'
import anime from 'animejs';

const containerStyle = {
  fontFamily: "M PLUS Code Latin, sans-serif",
  transition: "transform 1s ease",
  transform: "translateX(-100px)",
  display: "grid",
  width: "60%",
  opacity: 0,
  '@media screen and (max-width: 1012px)': {
    width: "75%",
  },
  '@media screen and (max-width: 768px)': {
    width: "80%",
  },
}

export const PersonalInformation = ({ children, title, id}) => {
  const [hovering, setHovering] = useState(false)
  const textRef = useRef(null);
  const borderRef = useRef(null);

  const isAnimating = (targetElement) => {
    // Iterate over the running animations
    for (const animation of anime.running) {
      // Check if the animation is targeting the specified element
      if (animation.animatables.some(animatable => animatable.target === targetElement)) {
        return true; // Animation is running on the target element
      }
    }
    return false; // No animation is running on the target element
  }

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
  
  const borderAnimationEntry = {
    targets: borderRef.current,
    delay: 100,
    width: "100%",
    duration: 500,
    easing: 'easeOutQuart',
    complete: () => {
      borderRef.current.style.justifySelf = "right"
      anime(borderAnimationLeave)
    },
  }
  
  const borderAnimationLeave = {
    targets: borderRef.current,
    width: "0%",
    duration: 400,
    delay: 300,
    easing: 'easeInSine',
    complete: () => {
      borderRef.current.style.justifySelf = "left"
    }
  }

  useEffect(() => {
    // console.log(isAnimating(borderRef.current))
    if (!isAnimating(borderRef.current) && hovering) {
      anime(borderAnimationEntry)
    }

  }, [hovering])

  
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
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        sx={containerStyle}
      >
        <Heading
          sx={{
            transition: "all 0.3s ease",
            color: hovering ? "" : "ansi.white",
            letterSpacing: hovering ? "1px" : "",
            transform: hovering ? "translateY(5px)" : "",
            py: 2,
          }}
        >
          {title}
        </Heading>
        <Box
          ref={borderRef}
          sx={{
            backgroundColor: "white",
            height: "1px",
            width: "0%",
            justifySelf: "left",
          }}
        ></Box>
        <Text as="p" 
          sx={{
            textAlign: "justify",
            fontSize: "20px",
            py: 2,
            m: 0,
          }}
        >
          {children}
        </Text>
      </Box>
    </Box>
  )
}