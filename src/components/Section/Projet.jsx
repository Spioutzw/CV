'use client'
import { Container, Typography, Grid, Grow } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import imageIpTracker from '../../../public/images/imageIpTracker.png';
import imageRestCountries from '../../../public/images/imageRestCountries.png';
import imageMultiStepForm from '../../../public/images/imageMultiStepForm.png';
import imageEntertainment from '../../../public/images/imageEntertainment.png';
import CardComponent from '../Card';

function Projet() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Container id='projet' sx={{ textAlign: 'center', maxWidth: '412px' }} component={'section'}>
      <Typography variant='h3' component='h2' sx={{ textTransform: 'uppercase', marginBottom: '3rem' }}>
        Mes projets !
      </Typography>
      <div ref={ref}>
        <Grid container spacing={12} columns={10} sx={{ justifyContent: 'center',gap:'5rem', margin:'0' }}>
          <Grow in={inView} timeout={1000}>
            <div>
              <CardComponent
                title={'Entertainment web app'}
                description="site Web d'informations sur les films et les séries qui utilise l'API TMDB. Construit avec Next.js, MongoDB, API REST, Next-Auth, React-Hook-Form et Yup."
                image={imageEntertainment}
                name={'Entertainment web app'}
              />
            </div>
          </Grow>
          <Grow in={inView} timeout={1500}>
            <div>
              <CardComponent
                title={'IP Address Tracker'}
                description="IP tracker qui géolocalise les utilisateurs en utilisant leur adresse IP. Construit avec Next.js, React, React-leaflet et axios."
                image={imageIpTracker}
                name={'IP Address Tracker'}
              />
            </div>
          </Grow>
          <Grow in={inView} timeout={2000}>
            <div>
              <CardComponent
                title={'REST Countries'}
                description="site Web qui obtient des informations sur les pays grâce à une API. Construit avec Next.js, React, axios et Material-UI."
                image={imageRestCountries}
                name={'REST Countries'}
              />
            </div>
          </Grow>
          <Grow in={inView} timeout={2500}>
            <div>
              <CardComponent
                title={'Multi-step form'}
                description="formulaire multi-étapes construit avec Next.js et React."
                image={imageMultiStepForm}
                name={'Multi-step form'}
              />
            </div>
          </Grow>
        </Grid>
      </div>
    </Container>
  );
}

export default Projet;
