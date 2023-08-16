'use client'


import React from 'react'
import { Typography, Container, Box, Grow, List, ListItem, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

function About() {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const stackTechnique = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next js',
        'Git'
    ]


    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Container sx={{ marginTop: '5rem' }} id='presentation' style={{ textAlign: 'center' }} component={"section"}>
            <Grow in={inView} timeout={3000}>
                <div>
                    <Typography variant="h3" component="h2" style={{ textTransform: 'uppercase' }}>
                        A propos de moi !
                    </Typography>

                    <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                        Quelques petites informations à propos de moi.
                    </Typography>
                </div>
            </Grow>

            <Box ref={ref} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 'none' : '10rem' }}>
                <Grow in={inView} timeout={3500}>
                    <div>
                        <Box>
                            <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase' }}>
                                Qui suis-je ?
                            </Typography>
                            <Box>
                                <Typography sx={{ lineHeight: '2', margin: '3rem auto 3rem auto', maxWidth: '572px', textAlign: 'justify' }} variant="body" component="p">
                                    Depuis tout petit je suis fan de jeux vidéo et avec un peu chance j&apos;ai passé la plupart de mon activité professionnelle dans le monde de l&apos;e-sport, ancien joueur pro et dernièrement coach sur Counter-Strike-Global-Offensive où j&apos;ai pu m&apos;épanouir et acquérir des compétences qui pourront j&apos;espère m&apos;aider pour ma reconversion en tant que Développeur web.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                                    <Link style={{width:"100%"}} href="/cv.pdf" target="_blank">
                                        <Button variant="contained"  sx={{ padding: "1rem", maxWidth: '14rem', width: '100%', backgroundColor: '#3c6e71ff', textAlign: 'center' }}>Mon Cv</Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </Grow>
                <Grow in={inView} timeout={4000}>
                    <div>
                        <Box>
                            <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase' }}>
                                Mes stacks techniques
                            </Typography>
                            <List sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto', display: 'flex', flexWrap: 'wrap', whiteSpace: 'pre-wrap', gap: '1rem', justifyContent: 'space-evenly' }}>
                                {stackTechnique.map((item, index) => (
                                    <ListItem key={index} sx={{ textAlign: 'left', width: '150px', backgroundColor: '#3C6E71', color: '#fff' }}>
                                        {item}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </div>
                </Grow>
            </Box>

        </Container>
    )
}

export default About