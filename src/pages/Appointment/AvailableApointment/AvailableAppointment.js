import React from 'react';
import { Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppointmentCard from './../AppointmentCard/AppointmentCard';
import { Container } from '@mui/system';

const AvailableAppointment = ({ date, setDate }) => {
    // console.log("date: ", date);
    const appointmentData = [
        {
            id: 1,
            name: "Teeth Orthodontics",
            time: "8:00 AM - 9:00 AM",
            space: 10,
        },

        {
            id: 2,
            name: "Teeth Orthodontics",
            time: "8:00 AM - 9:00 AM",
            space: 10,
        },
        {
            id: 3,
            name: "Cosmetic Dentistry",
            time: "10:05 am - 11:30 am",
            space: 10,
        },
        {
            id: 4,
            name: "Teeth Orthodontics",
            time: "8:00 AM - 9:00 AM",
            space: 10,
        },
        {
            id: 5,
            name: "Teeth Cleaning",
            time: "8:00 AM - 9:00 AM",
            space: 10,
        },
        {
            id: 6,
            name: "Teeth Orthodontics",
            time: "8:00 AM - 9:00 AM",
            space: 10,
        },
    ]

    return (

        <Container sx={{ my: 5 }}>
            <Typography variant="h3" sx={{ color: 'info.main', fontSize: 22 }} align="center">
                Available Appointment on {date.toLocaleDateString()}
            </Typography>
            <Box sx={{ my: 3, flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {appointmentData.map(appointment => <Grid key={appointment.id} item xs={4} sm={4} md={4} ><AppointmentCard appointment={appointment} date={date.toLocaleDateString()} /></Grid>)}
                </Grid>
            </Box>
        </Container>


    );
};

export default AvailableAppointment;