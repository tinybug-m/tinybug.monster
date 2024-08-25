import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


function Education() {
    return (
        <Box>
            <Typography variant="h5" color="initial">Education</Typography>
            <ul className='normalUL'>
                <li>
                    <Typography variant="body1" color="initial">2015-2018</Typography>
                    <Typography variant="body1" fontWeight={800} color="initial">Computer Science</Typography>
                    <Typography variant="body1" color="initial">Amirkabir High School (Diploma)</Typography>
                </li>
            </ul>
        </Box>
    )
}

export default Education
