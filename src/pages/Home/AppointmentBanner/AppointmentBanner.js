import React from 'react';

import Box from '@mui/material/Box';
import doctorLong from "../../../images/doctor.png";
import appointmentBG from "../../../images/appointment.png";
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
const appointmentBannerStyle = {
    background: `url(${appointmentBG})`,
    marginTop: "175px",
    backgroundSize: "cover",
    backgroundPosition: "center",

}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBannerStyle} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "400px", marginTop: "-110px" }} src={doctorLong} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: "#19D3AE" }}>Appointment</Typography>
                            <Typography variant='h6' style={{ color: "white" }} sx={{ color: "text.primary", fontSize: 36 }}>
                                Make an appointment Today
                            </Typography>
                            <Typography variant='h6' style={{ color: "white" }} sx={{ color: "text.primary", fontSize: 16, fontWeight: 300 }} gutterBottom>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Button style={{ backgroundColor: "#19D3AE" }} variant="contained">Learn More</Button>

                            </Stack>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box >
    );
};

export default AppointmentBanner;