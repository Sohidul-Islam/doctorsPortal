import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import people1 from '../../../images/people1.png';
import people2 from '../../../images/people2.png';
import people3 from '../../../images/people3.png';
import quotes from '../../../images/quotes.png';

const quotesBg = {
    backgroundImage: `url(${quotes})`,
    backgroundSize: '192px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
}
const Testimonials = () => {
    return (
        <Box sx={{ my: 3, p: 5 }} style={quotesBg}>

            <Typography variant="h6" sx={{ color: "#19D3AE", fontSize: 20, fontWeight: 600 }}>
                Testimonial
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 36, fontWeight: 400 }}>
                What Our Patients Says
            </Typography>
            {/* <Container> */}

            <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12, }}>

                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={3} style={{ width: "100%" }} >
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Box>

                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 400 }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</Typography>
                                <Box style={{ display: "flex", alignItems: "center" }}>
                                    <Box style={{ width: "74px", height: "74px", borderRadius: "50%", border: "3px solid #19D3AE" }}>
                                        <CardMedia
                                            component="img"

                                            image={people1}
                                            alt="green iguana"
                                            style={{ width: '64px', height: '64px', margin: "5px" }}
                                        />
                                    </Box>

                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600, color: "#3A4256" }}>Winson Herry</Typography>
                                        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 400 }}>California</Typography>
                                    </Box>
                                </Box>

                            </Box>

                        </Box>
                    </Paper>


                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={3} style={{ width: "100%" }} >
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Box>

                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 400 }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</Typography>
                                <Box style={{ display: "flex", alignItems: "center" }}>
                                    <Box style={{ width: "74px", height: "74px", borderRadius: "50%", border: "3px solid #19D3AE" }}>
                                        <CardMedia
                                            component="img"

                                            image={people1}
                                            alt="green iguana"
                                            style={{ width: '64px', height: '64px', margin: "5px" }}
                                        />
                                    </Box>

                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600, color: "#3A4256" }}>Winson Herry</Typography>
                                        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 400 }}>California</Typography>
                                    </Box>
                                </Box>

                            </Box>

                        </Box>
                    </Paper>


                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={3} style={{ width: "100%" }} >
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Box>

                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 400 }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</Typography>
                                <Box style={{ display: "flex", alignItems: "center" }}>
                                    <Box style={{ width: "74px", height: "74px", borderRadius: "50%", border: "3px solid #19D3AE" }}>
                                        <CardMedia
                                            component="img"

                                            image={people1}
                                            alt="green iguana"
                                            style={{ width: '64px', height: '64px', margin: "5px" }}
                                        />
                                    </Box>

                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600, color: "#3A4256" }}>Winson Herry</Typography>
                                        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 400 }}>California</Typography>
                                    </Box>
                                </Box>

                            </Box>

                        </Box>
                    </Paper>


                </Grid>
            </Grid>

            {/* </Container> */}

        </Box>

    );
};

export default Testimonials;