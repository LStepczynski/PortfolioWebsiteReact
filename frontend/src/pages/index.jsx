import { Box, Text, Heading } from '@primer/react'
import { ProfilePicture } from '../components/profilePicture'
import { IconDisplay } from '../components/iconDisplay'
import { PersonalInformation } from '../components/personalInfo'
import { SkillsButton } from '../components/skillsButton'
import { FadeIn } from '../components/animation/fadeIn'

export const Index = () => {
  return (
    <>
      <Box 
        sx={{
          display:"grid", 
          justifyContent:"center", 
          mt:"180px",
          '@media screen and (max-width: 1012px)': {
            mt: "160px"
          },
          '@media screen and (max-width: 768px)': {
            mt: "150px"
          },
        }}
      >
        <Box sx={{display:"grid", justifyContent:"center"}}>
          <ProfilePicture />
        </Box>
        <Heading 
          sx={{
            fontSize: "56px",
            fontFamily: "M PLUS Code Latin, sans-serif",
            backgroundColor: "rgba(13, 17, 23, 0.6)",
            width: "100%",
            textAlign: "center",
            '@media screen and (max-width: 768px)': {
              fontSize: "40px",
            },
            '@media screen and (max-width: 544px)': {
              fontSize: "35px",
            },
          }}
        >
          Leon Stepczynski
        </Heading>
        <Text
          sx={{
            fontFamily: "M PLUS Code Latin, sans-serif",
            textAlign: "center",
            backgroundColor: "rgba(13, 17, 23, 0.6)",
            fontSize: "28px",
            width: "100%",
            '@media screen and (max-width: 768px)': {
              fontSize: "20px",
            },
            '@media screen and (max-width: 544px)': {
              fontSize: "18px",
            },
          }}
        >
          Web Developer and Programmer
        </Text>
      </Box>
      
      <IconDisplay />

      <PersonalInformation title="About Me">
        Hello, I'm Leon Stepczynski. I was born in Poland, and I am a Web Developer and programmer. Throughout the years, I've dedicated myself to learning various 
        useful programming languages, technologies, libraries, and frameworks to enhance my skills. Some of these include JavaScript, ExpressJS, ReactJS, HTML, CSS, Python, 
        AWS, Git, and more.
      </PersonalInformation>

      <PersonalInformation title="Programming">
        I began teaching myself how to code in October 2022, immersing myself in various tutorials and undertaking numerous projects to acquire my current 
        knowledge. It wasn't until May 2023 that I established a specific goal—learning both Front-end and Back-end Web Development. As a tangible outcome of my 
        efforts, I created this website.
      </PersonalInformation>

      <PersonalInformation title="Hobbies">
        Participating in coding is a regular source of joy for me. Developing programs or websites that I or others can use gives me a strong sense of satisfaction. 
        Additionally, I take pleasure in occasionally playing computer games as a refreshing break from my work. Alongside my enthusiasm for coding and computer-related 
        pursuits, I also find delight in diving into the world of electronics. I make a dedicated effort to go to the gym or engage in regular exercise to offset the 
        time I spend sitting.
      </PersonalInformation>

      <Box sx={{display:"grid", justifyItems:"center", mt: 10}}>
        <FadeIn>
          <SkillsButton />
        </FadeIn>
      </Box>
    </>
  )
}