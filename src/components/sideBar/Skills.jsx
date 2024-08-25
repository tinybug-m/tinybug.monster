import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function Skills() {
    const [Skills, setSkills] = useState([
        "React JS",
        "Javascript",
        "Tailwind",
        "Mui",
        "Gitlab",
        "Swagger",
        "Jira",
        "Figma",
        "NextJS",
        "Scrum"
    ])
    return (

        <Box>
            <Typography variant="h5" mb={2} color="initial">Skills</Typography>
            <ul className='normalUL' >
                {Skills.map(Skill => {
                    return <li><Typography variant="body1" color="initial">{Skill}</Typography></li>
                })}
            </ul>


        </Box>
    )
}

export default Skills
