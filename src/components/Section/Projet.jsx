
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import imageProfil from '../../../public/images/1627459720791.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import CardComponent from '../Card';

function Projet() {
  return (
    <Container sx={{ textAlign: 'center', maxWidth:"412px" }} component={"section"}>
      <Typography variant="h3" component="h2" sx={{ textTransform: 'uppercase', marginBottom:'1rem' }}>
        Mes projets !
      </Typography>
      <Grid container spacing={10} columns={10} sx={{justifyContent:'center'}}>
        <CardComponent title="Projet 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." image={imageProfil} />
        <CardComponent title="Projet 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." image={imageProfil} />
        <CardComponent title="Projet 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." image={imageProfil} />
        <CardComponent title="Projet 4" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." image={imageProfil} />
      </Grid>
    </Container>
  )
}

export default Projet