import { Box, Text, Heading } from '@primer/react'
import { ProfilePicture } from '../components/profilePicture'
import { IconDisplay } from '../components/iconDisplay'

export const Index = () => {
  return (
    <>
      <Box 
        sx={{
          display:"grid", 
          justifyContent:"center", 
          mt:"250px",
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
          }}
        >
          Web Developer and Programmer
        </Text>
      </Box>
      
      <IconDisplay />

      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
    </>
  )
}