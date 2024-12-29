import { useState } from 'react'

import './App.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import { Divider } from '@mui/material'

import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiences from './components/Experiences'
import SideBar from './components/sideBar/sideBar'
import ResearchIntrests from './components/ResearchIntrests'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <embed src="../public/Arshia.pdf#toolbar=0&navpanes=0&scrollbar=0" style={{width: '100vw',height: '100vh'}} /> */}

      <Container sx={{ mt: 10 }} maxWidth="md">
        <Grid container spacing={0}>
          <Grid item sm={3} xs={12}>
            <SideBar />
          </Grid>
          <Grid item sm={1} xs={0} />
          <Grid item sm={8} xs={12}>
            <Contact />
            <Divider sx={{ my: 5.5 }} />
            <About />
            <Divider sx={{ my: 5.5 }} />
            <Portfolio />
            <Divider sx={{ my: 5.5 }} />
            <Experiences />
            <Divider sx={{ my: 5.5 }} />
            <ResearchIntrests />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
