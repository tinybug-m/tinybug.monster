import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


function Education() {
    const [educations, setEducations] = useState([
        {
            date: '2024',
            title: 'Advanced React',
            from: 'Coursera by Meta'
        },
        {
            date: '2015-2018',
            title: 'Computer Science',
            from: 'Amirkabir High School (Diploma)'
        },
    ])
    return (
        <Box>
            <Typography variant="h5" color="initial">Education</Typography>
            <ul className='normalUl'>
                {
                    educations.map((education, index) => {
                        return <li key={`education-${index}`}>
                            <Typography variant="body1" color="initial">{education.date}</Typography>
                            <Typography variant="body1" fontWeight={800} color="initial">{education.title}</Typography>
                            <Typography variant="body1" color="initial">{education.from}</Typography>
                        </li>
                    })
                }

            </ul>
        </Box>
    )
}

export default Education
