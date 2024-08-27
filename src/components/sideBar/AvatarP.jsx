import { width } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { Box } from '@mui/material'


function AvatarP() {
  return (
    <Box>
        <Avatar variant="circular" src="./profile.jpg" alt="" sx={{ width: 186.5, height: 186.5,mb:5.5 }} />
        <Typography variant="h4" sx={{fontSize: '2.5rem' ,width: {sm: '100%',md:'100px'}}} color="initial">Arshia Ranjbar</Typography>
        <Typography variant="h4" sx={{fontSize: '2.5rem'}} color="initial"></Typography>

        <Typography variant="h6" sx={{mt:2}}  color="initial">Front End Developer</Typography>

    </Box>
  )
}

export default AvatarP
