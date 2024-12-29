import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function Skills() {
    const [Skills, setSkills] = useState([
        "React JS",
        "Javascript",
        "Jest",
        "Tailwind",
        "Mui",
        "Swagger",
        "Jira",
        "Figma",
        "NextJS",
        "Scrum"
    ])
    return (

        <Box>
            <Typography variant="h5" mb={2} color="initial">Skills</Typography>
            <ul className='normalUl' >
                {Skills.map((Skill, index) => {
                    return <li key={`Skill-${index}`}>
                        <Typography variant="body1" color="initial">{Skill}</Typography>
                    </li>
                })}
            </ul>


        </Box>
    )
}

export default Skills
