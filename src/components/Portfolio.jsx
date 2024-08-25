import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Link } from '@mui/material'

function Portfolio() {
    return (
        <div>
            <Typography variant="h5" mb={4} color="initial">Online Portfolio</Typography>
            <ul>
                <li >
                    <Box display={'flex'}>
                        <Typography variant="body1" fontWeight={800} color="initial">ReactJS:</Typography>
                        <Typography variant="body1" ml={0.5} fontWeight={400} color="initial"><Link href="https://maminaudio.com">MaminAudio</Link></Typography>
                    </Box>

                </li>
                <li >
                    <Box display={'flex'}>
                        <Typography variant="body1" fontWeight={800} color="initial">Wordpress:</Typography>
                        <Typography variant="body1" ml={0.5} fontWeight={400} color="initial"><Link href="https://barsait.com">BarsaIT</Link></Typography>
                    </Box>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio



