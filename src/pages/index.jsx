import { Box, Text, Heading } from '@primer/react'
import { ProfilePicture } from '../components/profilePicture'
import { IconDisplay } from '../components/iconDisplay'
import { PersonalInformation } from '../components/personalInfo'

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
        Hi, My name is Leon Stepczynski, I was born in Poland and I'm a Web Developer and a programmer. Over the years I have been learning many usefull 
        programmng languages, technologies, libraries and frameworks to assist me with my work. Some of them include: Html, CSS, React, Java Script, Python, 
        SQL, Git and more.
      </PersonalInformation>

      <PersonalInformation title="SOMETHING ELSE">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, delectus? Sunt corrupti, repellendus, qui hic fugit rerum vero magnam porro pariatur explicabo expedita impedit nobis nisi at nulla laborum incidunt!
      </PersonalInformation>

      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      
    </>
  )
}