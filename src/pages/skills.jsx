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
        "Experienced in using TypeScript for development with React and Express JS, enhancing code quality and maintainability.",
      ]
    },
    {
      icon: images.python,
      title: "Python",
      points: [
        "Skilled in Python programming with intermediate to advanced proficiency, encompassing general development tasks",
        "Basic familiarity with backend web development in python using frameworks like Django and Flask, with a focus on building RESTful APIs and web applications",
      ]
    },
    {
      icon: images.react,
      title: "React",
      points: [
        "Understanding of React component structure and the concept of reusable UI components.",
        "Knowledge of React state and props, and how to use them to manage component data and pass data between components.",
        "Ability to fetch data from external APIs using fetch or other methods, and update component state with the retrieved data.",
        "Familiarity with React component and styling libraries like Primer React"
      ]
    },
    {
      icon: images.nodejs,
      title: "Node Js",
      points: [
        "Knowledge of Express.js, a minimalist web framework for Node.js, and its core features such as routing, middleware, and handling HTTP requests and responses.",
        "Ability to define routes in Express.js using HTTP methods (GET, POST, PUT, DELETE) and route parameters to handle different types of requests.",
        "Understanding of RESTful API principles and best practices for designing and implementing RESTful APIs in Express.js.",
      ]
    },
    {
      icon: images.html,
      title: "HTML",
      points: [
        "Familiarity with the basic structure of an HTML document",
        "Understanding of semantic HTML elements for structuring content",
        "Knowledge of HTML attributes and their values",
      ]
    },
    {
      icon: images.css,
      title: "CSS",
      points: [
        "Understanding of CSS selectors such as element selectors, class selectors, ID selectors, attribute selectors.",
        "Familiarity with common CSS properties and their values, including properties for styling text, backgrounds, and borders.",
        "Ability to use browser developer tools for inspecting and debugging CSS code, identifying styling issues, and making necessary adjustments."
      ]
    },
    {
      icon: images.django,
      title: "Django",
      points: [
        "Knowledge of fundamental Django concepts such as models, views, templates, and URLs, and how they work together to build web applications.",
        "Understanding of Django's built-in ORM for interacting with databases, including defining models, querying data, and performing CRUD operations.",
        "Understanding of Django's built-in authentication system for managing user authentication and authorization",
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
              width: "80%",
            },
            '@media screen and (max-width: 768px)': {
              width: "90%",
            },
          }}
        >
          <FadeIn>
            <Heading sx={{ fontSize: "46px" }}>About my skills,</Heading>
            <Text
              as="p"
              sx={{
                backgroundColor: "rgba(13, 17, 23, 0.8)",
                textAlign: "justify",
                lineHeight: "1.65",
                fontSize: "22px",
                my: 2,
              }}
            >
              In my captivating and enlightening programming journey I picked up many skills that can be used for crafting various programs and websites.
            </Text>
          </FadeIn>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "100px",
              mt: "150px",
              mb: "60px",
            }}
          >
            {skillList.map((skill) => {
              return (
                <FadeIn>
                  <SkillShowcase
                    icon={skill.icon}
                    title={skill.title}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gap: "15px"
                      }}
                    >
                      {skill.points.map((description) => {
                        return (
                          <Box sx={{ display: "flex", alignItems: "center", gap: 3, fontSize: "18px" }}>
                            <DotFillIcon size={30} />
                            <Text>{description}</Text>
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