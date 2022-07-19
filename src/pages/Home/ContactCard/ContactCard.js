import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const ContactCard = () => {
    return (
        <Box sx={{ mt: -10, mx: 5 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={8} sm={4} md={4}>
                    <Paper elevation={0} >
                        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundImage: "linear-gradient(to right,#19D3AE, #0FCFEC)", color: "#fff", padding: "40px", borderRadius: "14px" }}>
                            <AccessTimeIcon sx={{ fontSize: 86 }}></AccessTimeIcon>
                            <Box margin={{ marginLeft: "20px" }}>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 20, color: "#fff", fontWeight: 600 }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, color: "#fff", fontWeight: 400 }}>
                                    Lorem Ipsum is simply dummy text of the pri
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={8} sm={4} md={4}>
                    <Paper elevation={0} >
                        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: "#3A4256", color: "#fff", padding: "40px", borderRadius: "14px" }}>
                            <FmdGoodIcon sx={{ fontSize: 86 }}></FmdGoodIcon>
                            <Box margin={{ marginLeft: "20px" }}>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 20, color: "#fff", fontWeight: 600 }}>
                                    Visit our location
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, color: "#fff", fontWeight: 400 }}>
                                    Brooklyn, NY 10036, United States
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={8} sm={4} md={4}>
                    <Paper elevation={0} >
                        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundImage: "linear-gradient(to right,#19D3AE, #0FCFEC)", color: "#fff", padding: "40px", borderRadius: "14px" }}>
                            <AccessTimeIcon sx={{ fontSize: 86 }}></AccessTimeIcon>
                            <Box margin={{ marginLeft: "20px" }}>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 20, color: "#fff", fontWeight: 600 }}>
                                    Contact us now
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2, fontSize: 16, color: "#fff", fontWeight: 400 }}>
                                    +000 123 456789
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}

export default ContactCard;