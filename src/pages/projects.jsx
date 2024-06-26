import { Box, Text, Heading } from '@primer/react';
import { ProjectDisplay } from '../components/projectDisplay';


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
            backgroundColor: "rgba(13, 17, 23, 0.6)",
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
            backgroundColor: "rgba(13, 17, 23, 0.6)",
            textAlign: "center",
            width: "50%",
            mb: "130px",
            '@media screen and (max-width: 1012px)': {
              width: "60%",
              fontSize: "20px",
              mb: "90px",
            },
            '@media screen and (max-width: 768px)': {
              width: "90%",
              fontSize: "16px",
              mb: "60px",
            },
          }}
        >
          The following projects are part of my portfolio, carefully selected to showcase the most interesting and complex work I've done. 
          Please note that this list is dynamic and may change in the future as I continue to update and refine my projects.
        </Text>

        <ProjectDisplay title="Herext" img="project/HerextImg.png" link="https://github.com/LStepczynski/Herext">
          Herext is a website created to allow for communication between people. It's designed for group conversations for up to 10 people.
        </ProjectDisplay>

        <ProjectDisplay title="Tetris" img="project/tetrisImg.png" link="https://github.com/LStepczynski/Tetris">
          Tetris is a timeless and iconic puzzle video game that challenges players to manipulate falling geometric shapes, known as Tetriminos, 
          to create complete horizontal lines on the game board. With its simple yet addictive gameplay, Tetris has captivated generations of gamers 
          since its inception in the 1980s, earning its place as a classic in the world of interactive entertainment.
        </ProjectDisplay>

        <ProjectDisplay title="PyTopManager" img="project/PyTopManagerImg.png" link="https://github.com/LStepczynski/PyTopManager">
          PyTopManager is a tool designed to speed up everyday tasks like opening websites, files, running commands. PyTopManager also allows the 
          user to switch between clipboards.
        </ProjectDisplay>

        <ProjectDisplay title="Minesweeper" img="project/minesweeperImg.png" link="https://github.com/LStepczynski/MineSweeper">
          Minesweeper is an another classic computer puzzle game where players navigate through a grid, uncovering hidden squares while avoiding 
          explosive mines. The objective is to reveal all safe squares without detonating any mines, relying on logic and deduction to strategically 
          progress through the minefield. With its strategic depth and suspenseful gameplay, Minesweeper has remained a beloved and challenging pastime 
          for computer enthusiasts since its introduction.
        </ProjectDisplay>

        <ProjectDisplay title="Productivity Pulse" img="project/ProductivityPulseImg.png" link="https://github.com/LStepczynski/ProductivityPulse">
        Productivity Pulse is a program that will monitor how much time the user spends on each window. The data is collected and can be displayed 
        to check how much time was spent on work compared to entertainment. Another advantage of Productivity Pulse is the ability to set a timer 
        that will remind when is the time for work and rest.
        </ProjectDisplay>

        <ProjectDisplay title="Stronghold Security" img="project/StrongholdSecurityImg.png" link="https://github.com/LStepczynski/StrongholdSecurity">
        Stronghold Security is a python app that will make sure that the person that is using the computer is the person that is supposed to. 
        When launched the app will display a password window that will dissapear after set amount of time. If the user did not input the password the 
        program starts to monitor the computer activity and sends emails notifying the owner. It's also possible to remotly control the computer 
        using emails.
        </ProjectDisplay>

        <ProjectDisplay title="Portfolio Website" img="project/WebsiteImg.png" link="https://github.com/LStepczynski/PortfolioWebsiteReact">
        Let's not forget that this webiste is one of my projects too. It was created entirely by me in React JS, and the full code can be seen in github. 
        </ProjectDisplay>
      </Box>
    </>
  )
}