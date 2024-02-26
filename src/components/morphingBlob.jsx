import { useEffect } from "react";
import anime from 'animejs';

export const MorphingBlob = ({ color }) => {
  useEffect(() => {
    const animation = anime({
      targets: '.morph',
      d: [
        { value: 'M231.4 -208C286.1 -176.8 307.1 -88.4 300.5 -6.6C293.9 75.2 259.7 150.4 205 189C150.4 227.7 75.2 229.9 -2.4 232.2C-79.9 234.6 -159.8 237.1 -191.5 198.5C-223.1 159.8 -206.6 79.9 -194.7 11.9C-182.8 -56.1 -175.5 -112.2 -143.9 -143.4C-112.2 -174.7 -56.1 -181.1 16.1 -197.2C88.4 -213.4 176.8 -239.3 231.4 -208' },
        { value: "M195.3 -212.9C226.6 -164 207 -82 200.1 -7C193.1 68.1 198.7 136.2 167.5 184.1C136.2 231.9 68.1 259.5 -5.9 265.3C-79.9 271.2 -159.8 255.5 -222.3 207.6C-284.8 159.8 -329.9 79.9 -315.9 14C-301.9 -51.9 -228.7 -103.7 -166.2 -152.5C-103.7 -201.4 -51.9 -247.2 15.1 -262.3C82 -277.4 164 -261.7 195.3 -212.9" },
        { value: "M144.9 -128.8C192.2 -97.6 238.1 -48.8 246.5 8.4C254.9 65.5 225.7 131.1 178.4 191.1C131.1 251.1 65.5 305.5 8.1 297.4C-49.3 289.3 -98.5 218.5 -161 158.5C-223.5 98.5 -299.3 49.3 -303 -3.8C-306.8 -56.8 -238.6 -113.6 -176.1 -144.9C-113.6 -176.1 -56.8 -181.8 -4 -177.8C48.8 -173.8 97.6 -160.1 144.9 -128.8" },
        { value: "M154.7 -168.6C203.4 -106.1 247.7 -53 262.7 15C277.6 83 263.3 165.9 214.6 211.6C165.9 257.3 83 265.6 14.4 251.3C-54.2 236.9 -108.4 199.8 -168.9 154.1C-229.4 108.4 -296.2 54.2 -291.2 5C-286.2 -44.2 -209.4 -88.4 -148.9 -150.9C-88.4 -213.4 -44.2 -294.2 4.4 -298.6C53 -303 106.1 -231.1 154.7 -168.6" },
        { value: "M170.3 -192.9C201.6 -139.1 194.5 -69.5 198.3 3.8C202.1 77.1 216.7 154.1 185.4 195.1C154.1 236.1 77.1 241.1 9.2 231.9C-58.7 222.7 -117.4 199.4 -179.9 158.4C-242.4 117.4 -308.7 58.7 -320.8 -12.1C-333 -83 -290.9 -165.9 -228.4 -219.8C-165.9 -273.6 -83 -298.3 -6.7 -291.6C69.5 -284.9 139.1 -246.7 170.3 -192.9" },
      ],
      easing: 'easeInOutBack',
      duration: 10000,
      delay: 0,
      direction: "alternate",
      loop: true,
      autoplay: true,
    });

    // Cleanup animation on component unmount
    return () => {
      animation.pause();
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <svg id="visual" viewBox="194.28 71.95 511.45 456.1" style={{overflow: "visible", transform: "translateX(10%)"}}>
      <g transform="translate(404.04974625348575 294.67136598572915)">
        <path style={{transition: "all 2s ease"}} className="morph" d="M231.4 -208C286.1 -176.8 307.1 -88.4 300.5 -6.6C293.9 75.2 259.7 150.4 205 189C150.4 227.7 75.2 229.9 -2.4 232.2C-79.9 234.6 -159.8 237.1 -191.5 198.5C-223.1 159.8 -206.6 79.9 -194.7 11.9C-182.8 -56.1 -175.5 -112.2 -143.9 -143.4C-112.2 -174.7 -56.1 -181.1 16.1 -197.2C88.4 -213.4 176.8 -239.3 231.4 -208" fill={color}/>
      </g>
    </svg>
  )
}