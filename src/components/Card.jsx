'use client'

import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function CardComponent({ title, description, image, name }) {
    const router = useRouter()

    const handleRedirection = () => {
        router.push(`/projets/${name}`)
    }

    return (

        <Grid xs={8} md={8} lg={4} onClick={handleRedirection} sx={{height: '100%'}} >
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' ,width: '100%', height: '100%', maxWidth: 450, maxHeight: 400 }}>
                <CardMedia>
                    <Image src={image} alt="Image de Roquigny Matthieu" width={100} height={100} objectFit='contain' style={{ borderRadius: '50%', marginTop: '1rem' }} />
                </CardMedia>
                <CardContent>
                    <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardComponent