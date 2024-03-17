import { Box, Heading, Link, Text } from '@primer/react';
import { useState } from 'react';

export const ProjectDisplay = ({ title, link, img, children}) => {
    return (
        <Box
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
            <img
                style={{
                    width: "100%"
                }} 
                src={img}
            />
            <Box>
                <Text as="p" 
                    style={{
                        textAlign: "justify",
                        fontSize: "22px",
                        '@media screen and (max-width: 1012px)': {
                            fontSize: "18px",
                        },
                        '@media screen and (max-width: 768px)': {
                            fontSize: "14px",
                        },
                    }}
                >
                    {children}
                </Text>
            </Box>
        </Box>
    )
}