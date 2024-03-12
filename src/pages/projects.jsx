import React, { useEffect, useState } from 'react';
import { Box, Link, Button, Text, Heading } from '@primer/react';
import { HeadPicture } from '../components/headPicture';

export const Projects = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          position: "relative",
          justifyItems: "center",
          mt:"180px",
          '@media screen and (max-width: 1012px)': {
            mt: "160px"
          },
          '@media screen and (max-width: 768px)': {
            mt: "150px"
          },
        }}
      >
        <Heading
          sx={{
            fontFamily: "M PLUS Code Latin, sans-serif",
            fontSize: "72px",
            '@media screen and (max-width: 768px)': {
              fontSize: "54px"
            },
          }}
        >
          My Projects
        </Heading>
        <Text
          sx={{
            fontFamily: "M PLUS Code Latin, sans-serif",
            fontSize: "24px",
            textAlign: "center",
            width: "50%",
            '@media screen and (max-width: 1012px)': {
              width: "60%",
              fontSize: "20px"
            },
            '@media screen and (max-width: 768px)': {
              width: "90%",
              fontSize: "16px"
            },
          }}
        >
          All the things that are below are a part of my collection of projects. I selected the most interesting and complex projects 
          that I created to be displayed. Please remember that the list will keep updating and the projects displayed might change in 
          the future.
        </Text>
        {/* <HeadPicture image="https://codingweek.org/wp-content/uploads/2019/08/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg" opacity={0.4} /> */}
      </Box>
    </>
  )
}