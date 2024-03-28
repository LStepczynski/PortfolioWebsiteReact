import { Box, Heading, Link, Text } from '@primer/react';
import { useState } from 'react';

import { AnimatedImage } from './animatedImage';
import { FadeIn } from './fadeIn';

export const ProjectDisplay = ({ title, link, img, children }) => {
  const [hovering, setHovering] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      sx={{
        width: "50%",
        mb: 10,
        fontFamily: "M PLUS Code Latin, sans-serif",
        fontSize: "20px",
        '@media screen and (max-width: 1012px)': {
          width: "60%",
        },
        '@media screen and (max-width: 768px)': {
          width: "75%",
        },
      }}
    >
      <FadeIn>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
            fontSize: "20px",
            '@media screen and (max-width: 768px)': {
              display: "grid"
            },
          }}
        >
          <Heading
            sx={{
              fontSize: "40px",
              transition: "color 0.3s, text-shadow .5s",
              color: hovering ? "" : "ansi.white",
              textShadow: hovering ? "0px 0px 30px gray" : "0px 0px 0px transparent",
              '@media screen and (max-width: 1012px)': {
                fontSize: "34px",
              },
              '@media screen and (max-width: 768px)': {
                fontSize: "28px",
              },
            }}
          >
            {title}
          </Heading>

          <Link
            href={link}
            sx={{
              fontSize: "20px",
              '@media screen and (max-width: 1012px)': {
                fontSize: "15px",
              },
              '@media screen and (max-width: 768px)': {
                fontSize: "13px",
              },
            }}
          >
            Open In Github
          </Link>
        </Box>
        <Box>
          <AnimatedImage image={img} />
        </Box>
        <Box>
          <Text as="p"
            sx={{
              textAlign: "justify",
              fontSize: "22px",
              '@media screen and (max-width: 1012px)': {
                fontSize: "20px",
              },
              '@media screen and (max-width: 768px)': {
                fontSize: "15px",
              },
            }}
          >
            {children}
          </Text>
        </Box>
      </FadeIn>
    </Box>
  )
}