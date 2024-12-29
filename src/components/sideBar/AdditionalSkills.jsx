import { Box, Typography } from "@mui/material"
import { useState } from "react"

const AdditionalSkills = () => {
    const [AdditionalSkills, setAdditionalSkills] = useState([
        {
            title: 'Problem Solving',
            desc: 'Creative solutions to challenges'
        },
        {
            title: 'Research',
            desc: 'Finding optimal solutions'
        },
        {
            title: 'Command Line',
            desc: 'Proficient in terminal tools'
        },
        {
            title: 'AI Tools',
            desc: 'Leveraging AI for productivity'
        },
        {
            title: 'Learning',
            desc: 'Constantly expanding skills'
        },
    ])
    return <Box>
        <Typography variant="h5" mb={2} color="initial">Additional Skills</Typography>
        <ul className='normalUl' >
            {AdditionalSkills.map((Skill, index) => {
                return <li key={`additional-skill-${index}`} style={{ marginBottom: '8px' }}>
                    <Typography variant="body1" fontWeight={800} color="initial">{Skill.title}: </Typography>
                    <Typography variant="body1" color="initial">{Skill.desc}</Typography>
                </li>
            })}
        </ul>


    </Box>
}

export default AdditionalSkills