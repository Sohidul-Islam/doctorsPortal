import React from 'react';
import { Box, CardMedia, Container, Grid, TextField, Paper, Typography, Button } from '@mui/material';
import loginImage from '../../images/login.png';
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
//style texfield
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container>
            <Box style={{ margin: "25% 0" }}>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={7}>
                            <Paper elevation={3} >
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
                                        Login
                                    </Typography>
                                    <TextField sx={{ my: 1 }} id="filled-basic" label="email" variant="standard" fullWidth
                                        floatingLabelStyle={{ color: "red" }}

                                        className='inputField'
                                        type="email"
                                    />

                                    <TextField sx={{ my: 1 }} id="filled-basic" label="password" variant="standard" fullWidth

                                        className='inputField'
                                        type="password"
                                    />
                                    <Link to="/">Forgot your password</Link>
                                    <br />
                                    <Button onClick={handleSubmit} fullWidth sx={{ my: 2 }} type="submit" variant="contained">LOGIN</Button>
                                </Box>
                            </Paper>

                        </Grid>
                        <Grid item xs={4} sm={4} md={5}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={loginImage}
                                alt="loginImage"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;