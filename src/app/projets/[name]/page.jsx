import React from 'react'
import { Typography, List, ListItem,Container,Button,Box } from '@mui/material'
import Image from 'next/image'
import imageEntertainment from '../../../../public/images/imageEntertainment.png'
import imageMultiStepForm from '../../../../public/images/imageMultiStepForm.png'
import imageRestCountries from '../../../../public/images/imageRestCountries.png'
import imageIpTracker from '../../../../public/images/imageIpTracker.png'

import Footer from '@/components/Section/Footer'
import NavBar from '@/components/Section/NavBar'

function Page({params}) {

  const info = {
    'Entertainment web app': {
      title: 'Entertainment web app',
      text: "Ce projet est un site d’information sur les films et les séries qui utilise l’API TMDB pour récupérer des données sur les films et les séries populaires. Le site est construit avec Next.js, une plateforme de développement front-end populaire basée sur React. La base de données MongoDB est utilisée pour stocker les données utilisateur, et l’API REST est utilisée pour communiquer entre le front-end et le back-end. Le site utilise également la pagination pour afficher les résultats de recherche de manière organisée. Next-Auth est utilisé pour gérer l’authentification des utilisateurs, et React-Hook-Form et Yup sont utilisés pour gérer la validation des formulaires.",
      techno: ['NextJs', 'React', 'MongoDb', 'api-rest', 'pagination', 'Next-Auth', 'React-Hook-Form', 'Yup'],
      urlGithub: 'https://github.com/Spioutzw/movieapp',
      urlSite: 'https://movieapp-spioutzw.vercel.app/',
      imageSite: imageEntertainment,
      log: {
        mail: 'admin@gmail.com',
        password: 'adminweb'
      }
    },
    'IP Address Tracker': {
      title: 'IP Address Tracker',
      text: "Ce projet est un IP tracker qui permet de géolocaliser un utilisateur en utilisant son adresse IP. Le site est construit avec Next.js et React, et utilise la bibliothèque React-leaflet pour afficher une carte interactive avec la position de l’utilisateur. La bibliothèque axios est utilisée pour effectuer des requêtes HTTP pour récupérer les données de géolocalisation.",
      techno: ['NextJs', 'React', 'React-leaflet', 'axios'],
      urlGithub: 'https://github.com/Spioutzw/ipaddresstracker',
      urlSite: 'https://ipaddresstracker-one.vercel.app/',
      imageSite: imageIpTracker

    },
    'REST Countries': {
      title: 'REST Countries',
      text: "Ce projet est un site qui permet d’obtenir des informations sur les pays grâce à une API. Le site est construit avec Next.js et React, et utilise la bibliothèque axios pour effectuer des requêtes HTTP à l’API. Le site utilise également Material-UI, une bibliothèque de composants React populaire, pour créer une interface utilisateur élégante et moderne.",
      techno: ['NextJs', 'React', 'axios', 'api', 'Materiel-UI'],
      urlGithub: 'https://github.com/Spioutzw/rest-countries-api-with-color-theme-switcher-master',
      urlSite: 'https://rest-countries-api-with-color-theme-switcher-master-six.vercel.app/',
      imageSite:  imageRestCountries
    },
    'Multi-step form': {
      title: 'Multi-step form',
      text: "Ce projet est un formulaire multi-étapes construit avec Next.js et React. Le formulaire permet à l’utilisateur de saisir des informations en plusieurs étapes, en affichant une seule section du formulaire à la fois.",
      techno: ['NextJs', 'React', 'React-Hook-Form', 'Yup'],
      urlGithub: 'https://github.com/Spioutzw/multistepform',
      urlSite: 'https://multistepform-gules.vercel.app/',
      imageSite:  imageMultiStepForm
    }
  }

  const decodeParams = decodeURIComponent(params.name)
  const project = info[decodeParams]


  return (
    <>
      {project && (
        <>
        <NavBar/>
        <Container  sx={{ marginTop: '5rem' }} id='presentation' style={{ textAlign: 'center' }} component={"section"}>
          <Typography sx={{marginBottom:'2rem'}} variant="h4">{project.title}</Typography>

          <Image style={{marginBottom:'2rem',maxWidth:'900px', width:"100%",height:"100%",objectFit:'contain'}} src={project?.imageSite}  alt="image projet" />
          
          <Typography sx={{marginBottom:'2rem',textAlign:'justify',lineHeight:2}} variant="body1">{project.text}</Typography>
          <Typography sx={{marginBottom:'2rem',textAlign:'left'}} variant="h5">Compte de test:</Typography>
          <Typography sx={{marginBottom:'2rem',textAlign:'left'}} variant="body1">Email: {project.log.mail}</Typography>
          <Typography sx={{marginBottom:'2rem',textAlign:'left'}} variant="body1">Mot de passe: {project.log.password}</Typography>
          <Typography sx={{marginBottom:'2rem',textAlign:'left'}} variant="h5">Technologies utilisées:</Typography>
          <List sx={{display:"grid",gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gridGap: '1.5rem',marginBottom:'1rem',marginBottom:'1rem', marginLeft: '1.5rem'}}>
            {project.techno.map((tech, index) => (
              <ListItem sx={{
                padding: '1rem 2rem',
                marginBottom: '1.5rem',
                marginRight: '1.5rem',
                fontSize: '1.2rem',
                background: 'rgba(153,153,153,.2)',
                borderRadius: '5px',
                fontWeight: 600,
                color: '#fff',
                whiteSpace: 'nowrap',
                width:'unset',
                textTransform:'capitalize',
                lineHeight:'1.5rem',
                justifyContent:'center'
              }}
                 key={index}>{tech}</ListItem>
            ))}
          </List>
          <Typography sx={{marginBottom:'2rem',textAlign:'left'}} variant="h5">Liens:</Typography>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" href="/#projets" sx={{padding:"1rem", maxWidth:'14rem', width:'100%',backgroundColor:'#3c6e71ff'}}>Retour</Button>
            <Button variant="contained" href={project.urlGithub} target='_blank' sx={{padding:"1rem", maxWidth:'14rem', width:'100%',backgroundColor:'#3c6e71ff'}}>Github</Button>
            <Button variant="contained" href={project.urlSite} target='_blank' sx={{padding:"1rem", maxWidth:'14rem', width:'100%',backgroundColor:'#3c6e71ff'}}>Site</Button>
          </Box>
        </Container>
        <Footer/>
        </>
      )}
      </>
  )
}

export default Page
