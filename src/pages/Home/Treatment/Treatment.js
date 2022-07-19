import { Box, Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper'
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import treatment from '../../../images/treatment.png';
const Treatment = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Paper elevation={0} >
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={8} sm={8} md={5}>
                        <CardMedia
                            component="img"
                            width="100%"
                            image={treatment}
                            alt="green iguana"
                            style={{ borderRadius: '8px' }}
                        />
                    </Grid>
                    <Grid item xs={8} sm={8} md={7}>
                        <Box style={{ margin: "10% 0" }}>
                            <Box>
                                <Typography variant="h2" sx={{ mb: 2, fontSize: 48, fontWeight: 800 }}>Exceptional Dental Care, on Your Terms</Typography>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 400 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</Typography>

                                <Button style={{ backgroundImage: "linear-gradient(top-right,#19D3AE,#19D3AE)" }} variant="contained">GET STARTED</Button>
                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Paper>

        </Box>
    );
};

export default Treatment;