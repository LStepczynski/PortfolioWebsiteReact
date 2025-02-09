import { Box, Text, Heading, Button, Link, Octicon } from '@primer/react'

import { FadeIn } from "../components/animation/fadeIn"
import { SkillShowcase } from '../components/skillShowcase'
import { images } from "../components/animation/icons"

import { ProjectButton } from '../components/projectButton'

import { DotFillIcon } from '@primer/octicons-react';

export const Skills = () => {

  const skillList = [
    {
      icon: images.javascript,
      title: "Javascript",
      points: [
        "Understanding of basic JavaScript syntax, control flow, data types, operators, and comments.",
        "Knowledge of JavaScript objects, including object literals, accessing object properties, adding or deleting object properties, and iterating over object properties.",
        "Basic understanding of Document Object Model (DOM) manipulation techniques to interact with HTML elements dynamically.",
        "Experienced in using TypeScript for development with React and Express.js, enhancing code quality and maintainability.",
      ]
    },
    {
      icon: images.react,
      title: "ReactJS",
      points: [
        "Understanding of React component structure and the concept of reusable UI components.",
        "Knowledge of React state and props, and how to use them to manage component data and pass data between components.",
        "Ability to fetch data from external APIs using fetch or other methods, and update component state with the retrieved data.",
        "Familiarity with React component and styling libraries like Primer React and Styled Components."
      ]
    },
    {
      icon: images.aws,
      title: "AWS",
      points: [
        "Basic understanding of core AWS services, enabling the deployment and management of web applications in a cloud environment.",
        "Experience with AWS Lambda for running serverless functions, handling backend logic without managing server infrastructure.",
        "Proficient in using Amazon S3 for secure, scalable storage of static assets, and configuring S3 for website hosting.",
        "Familiarity with Amazon API Gateway for creating, deploying, and managing RESTful APIs to connect frontend and backend services.",
        "Knowledge of AWS Route 53 for domain registration and DNS management, as well as using AWS SES for sending transactional emails."
      ]
    },
    {
      icon: images.python,
      title: "Python",
      points: [
        "Skilled in Python programming with intermediate to advanced proficiency, encompassing general development tasks.",
        "Basic familiarity with backend web development in python using frameworks like Django and Flask, with a focus on building RESTful APIs and web applications.",
      ]
    },
    {
      icon: images.nodejs,
      title: "Node Js",
      points: [
        "Advanced knowledge of Express.js, including routing, middleware, and efficient handling of HTTP requests and responses.",
        "Proficient in designing and implementing secure, scalable RESTful APIs, following best practices for performance and maintainability.",
        "Strong understanding of authentication and authorization techniques in Node.js using JWT, session management, and secure password handling with hashing algorithms.",
        "Skilled in integrating databases with Node.js, working with NoSQL databases like DynamoDB."
      ]
    },    
    {
      icon: images.html,
      title: "HTML",
      points: [
        "Familiarity with the basic structure of an HTML document.",
        "Understanding of semantic HTML elements for structuring content.",
        "Knowledge of HTML attributes and their values.",
      ]
    },
    {
      icon: images.css,
      title: "CSS",
      points: [
        "Proficient in modern CSS methodologies such as Flexbox, Grid, and responsive design techniques for creating adaptive, mobile-first layouts.",
        "Experienced with CSS-in-JS libraries like Styled Components for dynamic styling in React applications, ensuring maintainable and scalable code.",
        "Familiarity with utility-first CSS frameworks like Tailwind CSS, optimizing development workflows through reusable, composable utility classes.",
        "Skilled in using browser developer tools for debugging complex styling issues."
      ]
    },
    {
      icon: images.github,
      title: "Github",
      points: [
        "Understanding of version control concepts, including repositories, commits, branches, and merges.",
        "Ability to create and manage repositories on GitHub, including initializing repositories, adding collaborators, configuring repository settings, and managing issues and pull requests.",
        "Understanding of branching and merging strategies in Git/GitHub, including creating feature branches, merging branches, and resolving merge conflicts."
      ]
    },
  ]

  return (
    <>
      <Box
        sx={{
          display: "grid",
          justifyItems: "center",
          mt: "280px",
          fontFamily: "M PLUS Code Latin, sans-serif",
          '@media screen and (max-width: 1012px)': {
            mt: "250px"
          },
          '@media screen and (max-width: 768px)': {
            mt: "230px"
          },
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "grid",
            justifyItems: "center",
            '@media screen and (max-width: 1012px)': {
              width: "80%",
            },
            '@media screen and (max-width: 768px)': {
              width: "90%",
            },
          }}
        >
          <FadeIn>
            <Box
              sx={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <Heading 
                sx={{ 
                  textAlign: "center",
                  fontSize: "46px",
                  width: "80%",
                  '@media screen and (max-width: 768px)': {
                    fontSize: "40px",
                  },
                  '@media screen and (max-width: 450px)': {
                    fontSize: "30px",
                  },
                }}
              >
                About my skills,
              </Heading>
              <Text
                as="p"
                sx={{
                  backgroundColor: "rgba(13, 17, 23, 0.8)",
                  textAlign: "justify",
                  lineHeight: "1.65",
                  fontSize: "22px",
                  width: "80%",
                  my: 2,
                  '@media screen and (max-width: 768px)': {
                    fontSize: "18px",
                  },
                }}
              >
                In my captivating and enlightening programming journey I picked up many skills that can be used for crafting various programs and websites.
              </Text>
            </Box>
          </FadeIn>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "100px",
              mt: "100px",
              mb: "60px",
              '@media screen and (max-width: 768px)': {
                mr: 3,
              },
            }}
          >
            {skillList.map((skill, index) => {
              return (
                <FadeIn key={index}>
                  <SkillShowcase
                    icon={skill.icon}
                    title={skill.title}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gap: "15px",
                      }}
                    >
                      {skill.points.map((description, i) => {
                        return (
                          <Box 
                            key={i}
                            sx={{ 
                              alignItems: "center", 
                              fontSize: "18px",
                              display: "flex", 
                              gap: 3, 
                              '@media screen and (max-width: 768px)': {
                                mt: 2,
                              },
                            }}
                          >
                            <DotFillIcon size={25} />
                            <Text
                              as="p"
                              sx={{
                                m: 0,
                                textAlign: "justify",
                                '@media screen and (max-width: 768px)': {
                                  fontSize: "14px",
                                },
                              }}
                            >
                              {description}
                            </Text>
                          </Box>
                        )
                      })}
                    </Box>
                  </SkillShowcase>
                </FadeIn>
              )
            })}
          </Box>

          <FadeIn>
            <ProjectButton />
          </FadeIn>
        </Box>
      </Box>
    </>
  )
}