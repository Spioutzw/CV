import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import Link from 'next/link'

function Accueil() {
    return (
        <Container sx={{marginTop : '10rem'}} id='Accueil' style={{textAlign:'center'}} component={"section"}>
            <Typography  variant="h3" component="h2" style={{textTransform:'uppercase'}}>
                Bonjour ! je suis Matthieu Roquigny
            </Typography>

            <Typography sx={{lineHeight: '2',margin: '3rem auto 3rem auto'}} variant="body" component="p">
            Un développeur web orienté Frontend
            </Typography>

            <Link style={{marginTop: '5rem'}} href={"#projet"}>
                <Button sx={{padding:"1rem", maxWidth:'14rem', width:'100%',backgroundColor:'#3c6e71ff'}} variant='contained'>Mes Projets</Button>
            </Link>

        </Container>
    )
}

export default Accueil