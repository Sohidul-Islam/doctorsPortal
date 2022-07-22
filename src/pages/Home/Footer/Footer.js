import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from '@mui/material';
import footerBg from '../../../images/footer.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
const FooterBgStyle = {
    backgroundImage: `url(${footerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}
const Footer = () => {
    return (

        <Box sx={{ flexGrow: 1 }} style={FooterBgStyle}>
            <Container maxWidth="lg" >
                <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12, }}>

                    <Grid item xs={4} sm={4} md={3}>
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 600 }}>
                                Services
                            </Typography>
                            <Box>
                                <Link to="/">Emergency Checkup</Link>
                                <br />
                                <Link to="/">Monthly Checkup</Link>
                                <br />
                                <Link to="/">Weekly Checkup</Link>
                                <br />
                                <Link to="/">Deep Checkup</Link>
                                <br />
                            </Box>

                        </Box>


                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 600 }}>
                                ORAL HEALTH
                            </Typography>
                            <Box>
                                <Link to="/">Fluoride Treatment</Link>
                                <br />
                                <Link to="/">Cavity Filling</Link>
                                <br />
                                <Link to="/">Teath Whitening</Link>
                                <br />
                                <Link to="/">Deep Checkup</Link>
                                <br />
                            </Box>

                        </Box>


                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 600 }}>
                                Services
                            </Typography>
                            <Box>
                                <Link to="/">Emergency Checkup</Link>
                                <br />
                                <Link to="/">Monthly Checkup</Link>
                                <br />
                                <Link to="/">Weekly Checkup</Link>
                                <br />
                                <Link to="/">Deep Checkup</Link>
                                <br />
                            </Box>

                        </Box>


                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box style={{ margin: "10% 0", padding: "30px" }}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: 16, fontWeight: 600 }}>
                                OUR ADDRESS
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: 12, fontWeight: 300 }}>
                                New York - 101010 Hudson
                            </Typography>
                            <Box>
                                <Link style={{ margin: "4px" }} to="/"><FacebookIcon color="primary" sx={{ fontSize: 40 }}></FacebookIcon></Link>
                                <Link style={{ margin: "4px" }} to="/"><YouTubeIcon c sx={{ fontSize: 40, color: pink[500] }} /></Link>
                                <Link style={{ margin: "4px" }} to="/"><LinkedInIcon color="primary" sx={{ fontSize: 40 }} /></Link>
                                <Link style={{ margin: "4px" }} to="/"><GitHubIcon color="#000" sx={{ fontSize: 40 }} /></Link>
                            </Box>

                        </Box>


                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Footer;