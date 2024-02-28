import React, { useEffect, useState, useRef } from "react";
import anime from 'animejs';

export const ImgIcon = ({ path }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              targets: imgRef.current,
              translateY: "35px",
              scale: 1,
              rotate: "1turn",
              duration: 2000,
              delay: 100,
              opacity: {
                value: 1,
                duration: 500
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
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [width]);

  const handleHover = () => {
    // const animation = anime({
    //   targets: imgRef.current,
    //   rotate: "1turn",
    //   duration: 2000,
    //   delay: 100,
    // });
    // setTimeout(() => {animation.remove(imgRef.current)}, 2000)
  }
  

  const styles = {
    width: width > 768 ? "100px" : "60px",
    height: width > 768 ? "100px" : "60px",
    opacity: 0,
    transition: "opacity 2s ease",
    transform: "translateY(-70px)",
    margin: width > 768 ? "30px" : "20px",
  };

  return (
    <img
      onMouseEnter={handleHover}
      ref={imgRef}
      style={styles}
      src={path}
      alt=""
    />
  );
};
