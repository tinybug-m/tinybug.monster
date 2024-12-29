import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


function ResearchIntrests() {
    const [researchInterests, setResearchInterests] = useState([
        {
            title: 'Frontend Development',
            from: 'Innovating in the field of web development with a focus on improving the performance, accessibility, and aesthetics of user interfaces.'
        },
        {
            title: 'Free Internet Research',
            from: 'Investigating methods and technologies to ensure unrestricted and secure access to the internet for all users.'
        },
        {
            title: 'Artificial Intelligence',
            from: ''
        },
        {
            title: 'Linux DevOps',
            from: ''
        },
        {
            title: 'Web Security',
            from: ''
        }
    ])
    return (
        <Box>
            <Typography variant="h5" color="initial">Research interests</Typography>
            <ul className='normalUl'>
                {
                    researchInterests.map((education, index) => {
                        return <li key={`education-${index}`}>
                            <Typography variant="body1" fontWeight={800} color="initial">{education.title}</Typography>
                            <Typography variant="body1" color="initial">{education.from}</Typography>
                        </li>
                    })
                }

            </ul>
        </Box>
    )
}

export default ResearchIntrests
