import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import Link from 'next/link'

function Accueil() {
    return (
        <Container sx={{marginTop : '5rem'}} id='Accueil' style={{textAlign:'center'}} component={"section"}>
            <Typography  variant="h3" component="h2" style={{textTransform:'uppercase'}}>
                Bonjour ! je suis Matthieu Roquigny
            </Typography>

            <Typography sx={{lineHeight: '1.6',margin: '3rem auto 3rem auto'}} variant="body" component="p">
                Depuis tout petit je suis fan de jeux vidéo et avec un peu chance j'ai passé la plupart de mon activité professionnelle dans le monde de l'e-sport, ancien joueur pro sur Counter-Strike-Global-Offensive où j'ai pu m'épanouir et acquérir des compétences qui pourront j'espère m'aider pour ma reconversion en tant que Développeur
            </Typography>

            <Link style={{marginTop: '5rem'}} href={"#projet"}>
                <Button sx={{padding:"1rem", maxWidth:'14rem', width:'100%',backgroundColor:'#3c6e71ff'}} variant='contained'>Mes Projets</Button>
            </Link>

        </Container>
    )
}

export default Accueil