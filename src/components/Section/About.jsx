'use client'


import React from 'react'
import { Typography, Container, Box, Grow,List,ListItem } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from 'react-intersection-observer';

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
        'Mongo DB',
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
                            <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase', textAlign: 'left' }}>
                                Qui suis-je ?
                            </Typography>
                            <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto', maxWidth: '572px', textAlign: 'justify' }} variant="body" component="p">
                                Depuis tout petit je suis fan de jeux vidéo et avec un peu chance j'ai passé la plupart de mon activité professionnelle dans le monde de l'e-sport, ancien joueur pro et dernièrement coach sur Counter-Strike-Global-Offensive où j'ai pu m'épanouir et acquérir des compétences qui pourront j'espère m'aider pour ma reconversion en tant que Développeur web.
                            </Typography>
                        </Box>
                    </div>
                </Grow>
                <Grow in={inView} timeout={4000}>
                    <div>
                        <Box>
                            <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase', textAlign: 'left' }}>
                                Mes stacks techniques
                            </Typography>
                            <List sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto', display:'flex',flexWrap:'wrap',whiteSpace:'pre-wrap',gap:'1rem',justifyContent:'space-evenly' }}>
                                {stackTechnique.map((item, index) => (
                                    <ListItem key={index} sx={{ textAlign: 'left',width:'150px',backgroundColor:'grey',  }}>
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