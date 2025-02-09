import { useState } from "react"

import { Box, Text, Link } from '@primer/react'
import { MoveToBottomIcon } from '@primer/octicons-react';

export const SkillsButton = () => {
  const [hover, setHover] = useState(false)

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
          href="/skills"
          sx={{
            color: "white",
            ":hover": {
              textDecoration: "none",
            }
          }}
        >
          <Box
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
                  Skills
                </Text>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    </>
  )
}