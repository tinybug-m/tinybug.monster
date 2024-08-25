import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AvatarP from './components/sideBar/AvatarP'
import Skills from './components/sideBar/Skills'
import { Divider } from '@mui/material'
import Education from './components/sideBar/Education'
import Langueages from './components/sideBar/Langueages'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiences from './components/Experiences'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <embed src="../public/Arshia.pdf#toolbar=0&navpanes=0&scrollbar=0" style={{width: '100vw',height: '100vh'}} /> */}

      <Container sx={{mt:10}} maxWidth="md">
        <Grid container spacing={0}>
          <Grid item sm={3} xs={12}>

            <AvatarP/>
            <Divider sx={{my:5.5}}/>
            <Skills/>
            <Divider sx={{my:5.5}}/>
            <Education/>
            <Divider sx={{my:5.5}}/>
            <Langueages/>
            <Divider sx={{my:5.5}}/>

          </Grid>
          <Grid item sm={1} xs={0}/>
          <Grid item sm={8} xs={12}>
            <Contact/>
            <Divider sx={{my:5.5}}/>
            <About/>
            <Divider sx={{my:5.5}}/>
            <Portfolio/>
            <Divider sx={{my:5.5}}/>
            <Experiences/>



          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
