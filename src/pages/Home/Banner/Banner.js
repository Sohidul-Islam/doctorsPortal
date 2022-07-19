import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import chairBg from '../../../images/bg.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const BannerBG = {
    background: `url(${chairBg})`,

    backgroundSize: "cover",
    backgroundPosition: "center",

}
const verticalCenter = {
    display: "flex",
    justifyContent: "center",
    height: 400,
    alignItems: "center",
    height: "450px",
}
const Banner = () => {
    return (
        <Container>

            <Box sx={{ flexGrow: 1 }} style={BannerBG}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} >
                        <Box sx={{ my: 5 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                            <Typography gutterBottom variant="h3" sx={{ fontSize: 48, fontWeight: 600 }}>
                                Your New Smile Starts Here
                            </Typography>
                            <Typography gutterBottom variant="h6" sx={{ my: 5, fontSize: 16, fontWeight: 300 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            </Typography>
                            <Button style={{ backgroundColor: "#19D3AE" }} variant="contained">Learn More</Button>
                        </Box>

                    </Grid>
                    <Grid item rep xs={12} md={7} style={verticalCenter}>
                        <Box>
                            <img style={{ width: "400px" }} src={chair} alt="chair" />
                        </Box>

                    </Grid>
                </Grid>

            </Box>

        </Container >
    );
};

export default Banner;