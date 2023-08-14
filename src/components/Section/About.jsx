import React from 'react'
import { Typography, Container, Button } from '@mui/material'
import Link from 'next/link'

function About() {
    return (
        <Container sx={{ marginTop: '5rem' }} id='presentation' style={{ textAlign: 'center' }} component={"section"}>
            <Typography variant="h3" component="h2" style={{ textTransform: 'uppercase' }}>
                A propos de moi !
            </Typography>

            <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                Quelques petites informations à propos de moi
            </Typography>

            <div style={{display:'flex'}}>
                <div>
                    <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase' }}>
                        Mes compétences
                    </Typography>
                    <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase' }}>
                        Mes expériences
                    </Typography>
                    <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </Typography>
                </div>
            </div>

        </Container>
    )
}

export default About