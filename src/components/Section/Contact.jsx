'use client'

import React from 'react'
import { Typography, Container, FormControl, FormLabel, TextField, Button } from '@mui/material'
import { TextareaAutosize } from '@mui/base';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


function Contact() {

    const schema = yup.object().shape({
        user_name: yup.string().required('Votre prénom et votre nom est requis'),
        user_email: yup.string().email('Veuillez mettre un email valide').required( 'Votre email est requis'),
        subject: yup.string().required('Le sujet de votre email est requis'),
        message: yup.string().required('Votre message est requis'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })




    const sendEmail = (e) => {

        e.preventDefault();

        console.log(e);

        fetch('api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                params: {
                    name: e.target.user_name.value,
                    email: e.target.user_email.value,
                    message: e.target.message.value,
                    subject: e.target.subject.value
                }
            })
        }).then((res) => {
            console.log(res);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    };

    return (
        <Container sx={{ marginTop: '5rem' }} id='contact' style={{ textAlign: 'center' }} component={"section"}>
            <Typography variant="h3" component="h2" style={{ textTransform: 'uppercase' }}>
                Contact
            </Typography>
            <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto' }} variant="body" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </Typography>
            <Container maxWidth={'md'} sx={{
                backgroundColor: '#FFF',
                textAlign: 'left',
                margin: '5rem auto 0 auto',
                padding: '4rem',
                borderRadius: '5px',
            }}>
                <FormControl sx={{ width: '100%' }} onSubmit={handleSubmit(sendEmail)} component={"form"}>
                    <FormLabel>Name</FormLabel>
                    <TextField
                        sx={{ backgroundColor: '#F0F0F0', margin: '1.2rem 0' }}
                        type="text"
                        name="user_name"
                        variant='outlined'
                        error={!!errors.user_name}
                        helperText={errors.user_name?.message || ''}
                        FormHelperTextProps={{ style: { backgroundColor: 'white', margin: 'unset' } }}
                        {...register("user_name")}
                    />
                    <FormLabel>Email</FormLabel>
                    <TextField
                        sx={{ backgroundColor: '#F0F0F0', margin: '1.2rem 0' }}
                        type="email"
                        name="user_email"
                        variant='outlined'
                        error={!!errors.user_email}
                        helperText={errors.user_email?.message || ''}
                        FormHelperTextProps={{ style: { backgroundColor: 'white', margin: 'unset' } }}
                        {...register("user_email")}
                    />
                    <FormLabel>Object</FormLabel>
                    <TextField
                        sx={{ backgroundColor: '#F0F0F0', margin: '1.2rem 0' }}
                        type="text"
                        name="subject"
                        variant='outlined'
                        error={!!errors.subject}
                        helperText={errors.subject?.message || ''}
                        FormHelperTextProps={{ style: { backgroundColor: 'white', margin: 'unset' } }}
                        {...register("subject")}
                    />
                    <FormLabel>Message</FormLabel>
                    <TextField
                        multiline
                        sx={{ backgroundColor: '#F0F0F0', margin: '2rem 0', color: '#737373', fontFamily: 'inherit' }}
                        name="message"
                        variant='outlined'
                        error={!!errors.message}
                        helperText={errors.message?.message || ''}
                        FormHelperTextProps={{ style: { backgroundColor: 'white', margin: 'unset' } }}
                        {...register("message")}
                        minRows={10}
                    />
                    <Button type="submit" value="Send" sx={{ padding: "1rem", maxWidth: '14rem', width: '100%', backgroundColor: '#3c6e71ff', textAlign: 'center' }} variant='contained'>
                        Envoyer
                    </Button>
                </FormControl>
            </Container>
        </Container>



    )
}

export default Contact