import { Box, Link, Typography } from '@mui/material'
import React, { useState } from 'react'

function Experiences() {
    const [expriences, setExpriences] = useState([
        {
            date: 'Oct 2023 - Present · 7',
            title: 'MaminAudio',
            position: 'Freelance',
            desc: 'Developed a website for musician Mamin using React.js, MUI, and Framer Motion to create a dynamic and engaging user experience.',
            refrences: [
                {
                    name: 'maminAudio.com',
                    url: 'https://maminaudio.com'
                }
            ]

        },
        {
            date: 'Jun 2021 - Apr 2022',
            title: 'Xpeace Cloud',
            position: 'Web developer',
            desc: 'Built a secure platform for encrypting and protecting client videos, making them non-downloadable. Although not public, design references are available.',
            refrences: [
                {
                    name: 'Login Page Design',
                    url: 'https://dribbble.com/shots/22091654-Xpeace-Login-Page-Design'
                },
                {
                    name: 'Video Hosting Platform Case Study',
                    url: 'https://dribbble.com/shots/22013824-Video-Hosting-Platform-Case-Study'
                },
                {
                    name: 'Product Design',
                    url: 'https://dribbble.com/shots/22044142-Xpeace-Product-Design'
                },
                {
                    name: 'Figma Variants',
                    url: 'https://dribbble.com/shots/22044529-Xpeace-Figma-Variants'
                },
                {
                    name: 'Component Design',
                    url: 'https://dribbble.com/shots/22044906-Xpeace-Component-Design'
                },
            ]
        },
        {
            date: 'May 2018',
            title: 'Febral (Biscuit Gorji)',
            position: 'Full Stack Developer',
            desc: 'Led the creation of an e-commerce site to sell products below market prices. Developed a bot for Digikala to track competitors, prices and adjust ours accordingly.',
            refrences: []
        },
        {
            date: 'Aug 2018 - Present',
            title: 'Xtend Agency',
            position: 'Front End Developer',
            desc: 'Primary developer for multiple websites, including xtend.academy, an online educational platform integrated with Adobe Connect for live classes.',
            refrences: []
        },
    ])
    return (
        <Box>
            <Typography variant="h5" mb={4} color="initial">Experience</Typography>
            <ul>
                {expriences.map(exprience => {
                    return (
                        <li style={{marginBottom:'16px'}}>
                            <Typography variant="body1" color="initial">{exprience.date}</Typography>
                            <Typography variant="body1" fontWeight={800} color="initial">{exprience.title}</Typography>
                            <Typography variant="body1"  color="initial">{exprience.position}</Typography>
                            <Typography variant="body1" mb={2} color="initial">{exprience.position}</Typography>
                            <Typography variant="body1" mb={2} color="initial">{exprience.desc}</Typography>
                            {
                                exprience.refrences.length !== 0 && exprience.refrences.map(refrence=>{
                                    return <Typography variant="body1" mb={0} color="initial"><Link href={refrence.url}>{refrence.name}</Link></Typography>
                                })
                            }

                        </li>
                    )
                })}
            </ul>
        </Box>
    )
}

export default Experiences
