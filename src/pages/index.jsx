import { Box, Text, Heading } from '@primer/react'
import { ProfilePicture } from '../components/profilePicture'


export const Index = () => {
  return (
    <>
      <Box sx={{display:"grid", justifyContent:"center", mt:"250px"}}>
        <ProfilePicture />
        <Heading 
          sx={{
            fontSize: "46px",
            fontFamily: "M PLUS Code Latin, sans-serif",
          }}
        >
          Leon Stepczynski
        </Heading>
      </Box>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
      <p style={{marginTop: "500px"}}>siema</p>
    </>
  )
}