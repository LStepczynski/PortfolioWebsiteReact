import { useState } from 'react'

import { Box, Heading } from '@primer/react'
import { ImgIcon } from "./imgIcon"

export const SkillShowcase = ({ icon, title, children }) => {
  const [hovering, setHovering] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          opacity: hovering ? 1 : 0.8,
          transition: "opacity 0.3s",
        }}
      >
        <ImgIcon path={icon} />
        <Heading
          sx={{
            textShadow: hovering ? "0px 0px 30px gray" : "0px 0px 0px transparent",
            transition: "text-shadow 0.4s",
            fontSize: "58px",
            '@media screen and (max-width: 768px)': {
              fontSize: "38px",
            },
          }}
        >
          {title}
        </Heading>
      </Box>
      <Box
        sx={{
          ml: "13%",
          mt: "5%",
          '@media screen and (max-width: 768px)': {
            ml: "3%",
            mt: "10%",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}