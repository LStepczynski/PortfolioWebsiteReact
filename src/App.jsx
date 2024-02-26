import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import { MatrixBackground } from './components/matrix'
import { Routes } from './routes'
import { NavBar } from './components/navBar'

function App() {
  const mode = "dark"

  return (
    <ThemeProvider colorMode={mode}>
      <BaseStyles>
        <MatrixBackground />
        <NavBar />
        
        <Box
          sx={{
            width: "100vw",
            display: "grid",
            justifyItems: "center",
          }}
        >
          <Box sx={{ width: "xlarge" }}>
            <Routes />
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
