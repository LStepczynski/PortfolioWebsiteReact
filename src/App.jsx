import { ThemeProvider, BaseStyles, Box } from '@primer/react'

import { Routes } from './routes'
import { NavBar } from './components/navBar'

function App() {
  const mode = "dark"

  return (
    <ThemeProvider colorMode={mode}>
      <BaseStyles>
        <Box 
          sx={{
            backgroundColor: "canvas.default",
            width: "100vw",
            height: "110%"
          }}
        >
          <NavBar />
          <Routes />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
