import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box>
      <Typography variant="h5" mb={4} color="initial">About Me</Typography>
      <Typography variant="body1" color="initial">
        I’m always looking to improve and get better at what I do. Right now, I’m reading "Clean Code" and learning how to write tests to make my projects more reliable and easier to maintain. I work with tools like HTML, CSS, JavaScript, React, and Vue to create simple, user-friendly websites. I’m excited to keep learning and collaborate with creative teams to build amazing projects.
      </Typography>
    </Box>
  )
}

export default About
