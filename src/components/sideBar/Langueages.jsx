import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


function Langueages() {
    const [languages, setLanguages] = useState([
        {
            name: 'Persian',
            level: 'Native'
        },
        {
            name: 'English',
            level: 'Intermediate'
        },
        {
            name: 'French',
            level: 'Begginer'
        }
    ])
    return (
        <Box>
            <Typography variant="h5" color="initial">Languages</Typography>
            <ul className='normalUL'>
                {languages.map(lang => {
                    return (
                        <li>
                            <Typography variant="body1" display={'inline-block'} fontWeight={800} color="initial">{lang.name} - </Typography>
                            <Typography variant="body1" ml={0.5} display={'inline-block'} fontWeight={300} color="initial"> {lang.level}</Typography>
                        </li>
                    )
                })}
            </ul>

        </Box>
    )
}

export default Langueages
