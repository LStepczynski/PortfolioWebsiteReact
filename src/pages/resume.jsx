import { Box, Text, Heading, Button, Link, Octicon } from '@primer/react'

import { FadeIn } from "../components/fadeIn"

import { MoveToBottomIcon } from '@primer/octicons-react';

export const Resume = () => {
  const headingStyle = {
    fontSize: "60px",
    '@media screen and (max-width: 1012px)': {
      fontSize: "44px",
    },
    '@media screen and (max-width: 768px)': {
      fontSize: "32px",
    },
  }

  const listStyle = {
    display: "grid",
    fontSize: "30px",
    ml: 8,
    '@media screen and (max-width: 1012px)': {
      fontSize: "24px",
      ml: 6,
    },
    '@media screen and (max-width: 768px)': {
      fontSize: "18px",
      ml: 4,
    },
  }

  const spacingStyle = {
    mb: 12,
    '@media screen and (max-width: 1012px)': {
      md: 10
    },
    '@media screen and (max-width: 768px)': {
      md: 8
    },
  }

  return (
    <>
      <Box
        sx={{
          display: "grid",
          justifyItems: "center",
          mt: "250px",
          fontFamily: "M PLUS Code Latin, sans-serif",
          '@media screen and (max-width: 1012px)': {
            mt: "170px"
          },
          '@media screen and (max-width: 768px)': {
            mt: "150px"
          },
        }}
      >
        <Box
          sx={{
            width: "60%",
            '@media screen and (max-width: 1012px)': {
              width: "70%",
            },
            '@media screen and (max-width: 768px)': {
              width: "80%",
            },
          }}
        >
          <FadeIn>
            <Box sx={spacingStyle}>
              <Heading
                sx={{
                  fontSize: "72px",
                  '@media screen and (max-width: 1012px)': {
                    fontSize: "58px",
                  },
                  '@media screen and (max-width: 768px)': {
                    fontSize: "42px",
                  },
                }}
              >
                Leon Stepczynski
              </Heading>
              <Text
                sx={{
                  fontSize: "30px",
                  backgroundColor: "rgba(13, 17, 23, 0.6)",
                  '@media screen and (max-width: 1012px)': {
                    fontSize: "24px",
                  },
                  '@media screen and (max-width: 768px)': {
                    fontSize: "20px",
                  },
                }}
              >
                A self taught programmer on an intermediate level specializing in web development
              </Text>
            </Box>
          </FadeIn>

          <FadeIn>
            <Box sx={spacingStyle}>
              <Heading
                sx={headingStyle}
              >
                Contact Info:
              </Heading>
              <Box
                sx={listStyle}
              >
                <Link href="https://mail.google.com">leonstepczynski@gmail.com</Link>
                <Link href="https://twitter.com/LStepczynski">Twitter Account</Link>
                <Link href="https://github.com/LStepczynski">GitHub Account</Link>
              </Box>
            </Box>
          </FadeIn>

          <FadeIn>
            <Box sx={{ mb: 12 }}>
              <Heading
                sx={headingStyle}
              >
                Skills:
              </Heading>
              <Box
                sx={listStyle}
              >
                <Text>Python - Intermediate/Advanced</Text>
                <Text>JavaScript - Intermediate</Text>
                <Text>React JS - Intermediate</Text>
                <Text>Express JS - Beginner/Intermediate</Text>
                <Text>HTML - Intermediate</Text>
                <Text>CSS - Intermediate</Text>
                <Text>TailwindCSS - Beginner/Intermediate</Text>
                <Text>Django - Beginner</Text>
                <Text>Flask - Beginner</Text>
                <Text>TKinter - Beginner/Intermediate</Text>
              </Box>
            </Box>
          </FadeIn>

          <FadeIn>
            <Box sx={spacingStyle}>
              <Heading
                sx={headingStyle}
              >
                Experience:
              </Heading>
              <Box
                sx={listStyle}
              >
                <Text>Ongoing internship at <Link href="https://ferant.io">Ferant</Link></Text>
                <Text>Attending AP CS A Course</Text>
                <Text>Attending Cyber Security Course</Text>
                <Text>Attending Maine East High School</Text>
                <Text>Finished Gemini Middle School</Text>
              </Box>
            </Box>
          </FadeIn>

          <FadeIn>
            <Box sx={spacingStyle}>
              <Heading
                sx={headingStyle}
              >
                About Me:
              </Heading>
              <Box
                sx={{
                  fontSize: "30px",
                  textAlign: "justify",
                  ml: 8,
                  '@media screen and (max-width: 1012px)': {
                    fontSize: "24px",
                    ml: 6,
                  },
                  '@media screen and (max-width: 768px)': {
                    fontSize: "18px",
                    ml: 4,
                  },
                }}
              >
                <Text as="p" sx={spacingStyle}>
                  I'm a 16 year old High School student in my Sophomore year. I come from Poland and I moved to the USA in October of 2021. Some of my
                  hobbies include: Programming, Exercise / Gym, Computer Games, and Electronics.
                </Text>
              </Box>
            </Box>
          </FadeIn>

          <FadeIn>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                justifyItems: "center",
                mb: 12,
              }}
            >
              <Button
                sx={{
                  p: 6,
                  borderRadius: "50px",
                  '@media screen and (max-width: 768px)': {
                    p: 5
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2
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
                    {/* <img
                      src="download.png"
                      style={{
                        width: "45px",
                      }}
                    /> */}
                    <MoveToBottomIcon size={45} />
                  </Box>
                </Box>
              </Button>
            </Box>

          </FadeIn>
        </Box>
      </Box>
    </>
  )
}