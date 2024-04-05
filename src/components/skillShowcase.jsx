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
            fontSize: "58px"
          }}
        >
          {title}
        </Heading>
      </Box>
      <Box
        sx={{
          ml: "13%",
          mt: "5%",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}