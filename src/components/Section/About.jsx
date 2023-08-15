'use client'


import React from 'react'
import { Typography, Container, Button,Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

function About() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Container sx={{ marginTop: '5rem' }} id='presentation' style={{ textAlign: 'center' }} component={"section"}>
            <Typography variant="h3" component="h2" style={{ textTransform: 'uppercase' }}>
                A propos de moi !
            </Typography>

            <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                Quelques petites informations à propos de moi.
            </Typography>

            <Box sx={{display:'flex', flexDirection: isMobile ? 'column' : 'row',gap: isMobile ? 'none' : '10rem'}}>
                <Box>
                    <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase',textAlign:'left' }}>
                        Qui suis-je ?
                    </Typography>
                    <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto',maxWidth:'572px',textAlign:'justify' }} variant="body" component="p">
                    Depuis tout petit je suis fan de jeux vidéo et avec un peu chance j'ai passé la plupart de mon activité professionnelle dans le monde de l'e-sport, ancien joueur pro et dernièrement coach sur Counter-Strike-Global-Offensive où j'ai pu m'épanouir et acquérir des compétences qui pourront j'espère m'aider pour ma reconversion en tant que Développeur web.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase',textAlign:'left' }}>
                        Mes expériences
                    </Typography>
                    <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </Typography>
                </Box>
            </Box>

        </Container>
    )
}

export default About