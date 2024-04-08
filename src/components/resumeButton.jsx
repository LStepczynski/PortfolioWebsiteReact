import { useState } from "react"

import { Box, Text, Link } from '@primer/react'
import { MoveToBottomIcon } from '@primer/octicons-react';

export const ResumeButton = () => {
  const [hover, setHover] = useState(false)

  const handleClick = () => {

  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          justifyItems: "center",
          mb: 12,
        }}
      >
        <Link 
          target="_blank" 
          href="Resume-LS.pdf"
          sx={{
            color: "white",
            ":hover": {
              textDecoration: "none",
            }
          }}
        >
          <Box
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
              mt: "40px",
              px: 4,
              py: 2,
              ":hover": {
                backgroundColor: "accent.fg",
              }
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3
              }}
            >
              <Box>
                <Text
                  sx={{
                    fontSize: "30px",
                    '@media screen and (max-width: 768px)': {
                      fontSize: "22px"
                    },
                  }}
                >
                  Download Resume
                </Text>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MoveToBottomIcon size={40} />
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    </>
  )
}