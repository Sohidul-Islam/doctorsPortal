import React, { useState } from 'react';
import { Box, CardMedia, Container, Grid, TextField, Paper, Typography, Button } from '@mui/material';
import loginImage from '../../images/login.png';
import { Link } from 'react-router-dom';
// import './Login.css';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...registerData }
        newLoginData[field] = value
        console.log("login data", newLoginData)
        setRegisterData(newLoginData)
        // console.log(field);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container>
            <Box sx={{ my: 8 }}>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={7}>
                            <Paper elevation={3} >
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="h3"
                                        sx={{ mb: 3, textAlign: "center" }}>
                                        Register
                                    </Typography>
                                    <TextField onChange={handleOnChange}
                                        name="email"
                                        sx={{ my: 1 }} id="filled-basic" label="email" variant="standard" fullWidth
                                        className='inputField'
                                        type="email"
                                    />

                                    <TextField onChange={handleOnChange} name="password" sx={{ my: 1 }}
                                        id="filled-basic"
                                        label="password"
                                        variant="standard"
                                        fullWidth
                                        className='inputField'
                                        type="password"
                                    />
                                    <TextField onChange={handleOnChange} name="password2" sx={{ my: 1 }}
                                        id="filled-basic"
                                        label="confirm password"
                                        variant="standard"
                                        fullWidth
                                        className='inputField'
                                        type="password"
                                    />

                                    <Link to="/"><Button variant='text'>
                                        Forgot your password</Button></Link>
                                    <br />
                                    <Button onClick={handleSubmit} fullWidth sx={{ my: 2 }} type="submit" variant="contained">Register</Button>
                                    <Link to="/login"><Button variant='text'>Already Register? Please Login</Button></Link>
                                    <br />
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

export default Register;