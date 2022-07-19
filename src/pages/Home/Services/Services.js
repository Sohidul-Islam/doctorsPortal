import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Teeth from "../../../images/whitening.png";
import Service from '../Service/Service';
import Treatment from '../Treatment/Treatment';
const services = [
    {
        service: "Fluoride Treatment",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: Fluoride

    },
    {
        service: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: Cavity

    },
    {
        service: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: Teeth

    }

]

const Services = () => {
    return (

        <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Container maxWidth="md">
                <Typography align="center" variant="h2" component="h2" sx={{ fontSize: 20, color: 'primary.main', fontWeight: 500, m: 2 }}>Our Services</Typography>

                <Typography align="center" variant="h2" component="h2" sx={{ fontSize: 36, fontWeight: 600 }}>Services We Provide</Typography>
                <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, key) => (
                        <Grid item xs={4} sm={4} md={4} key={key}>
                            <Service service={service} />
                        </Grid>
                    ))}
                </Grid>
                <Treatment></Treatment>
            </Container>

        </Box>
    );
};

export default Services;