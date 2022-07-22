import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Container, Grid, TextField, Paper, Typography, Button, Collapse, Alert, IconButton, Snackbar, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import loginImage from '../../images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';
// import './Login.css';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, isLoader, error, setError, signUpWithEmailPassword } = useAuth();
    const [alertOpen, setAlertOpen] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const Navigate = useNavigate();
    const handleOnBlur = (e) => {
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
        if (registerData.password === registerData.password2) {
            signUpWithEmailPassword(registerData.email, registerData.password, registerData.name, Navigate);

            if (error !== "") {
                setSnackbarOpen(true);
                setAlertOpen(false);
            } else {
                setSnackbarOpen(false)
            }
        }
        else {
            setAlertOpen(true);
            setError("Passwords do not match")
        }
    }
    const handleSnackBarClose = () => {
        setSnackbarOpen(false);
    };
    return (
        <>
            {isLoader === false ? <Container>
                <Box sx={{ my: 8 }}>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={7}>
                                <Paper elevation={3} >
                                    <Box sx={{ p: 3 }}>
                                        <Collapse in={alertOpen}>
                                            <Alert
                                                severity="error"
                                                action={
                                                    <IconButton
                                                        aria-label="close"
                                                        color="inherit"
                                                        size="small"
                                                        onClick={() => {
                                                            setAlertOpen(false);
                                                        }}
                                                    >
                                                        <CloseIcon fontSize="inherit" />
                                                    </IconButton>
                                                }
                                                sx={{ mb: 2 }}
                                            >
                                                {error}
                                            </Alert>
                                        </Collapse>
                                        <Typography variant="h3"
                                            sx={{ mb: 3, textAlign: "center" }}>
                                            Register
                                        </Typography>
                                        <TextField onBlur={handleOnBlur}
                                            name="name"
                                            sx={{ my: 1 }} id="filled-basic" label="your name" variant="standard" fullWidth
                                            className='inputField'
                                            type="text"
                                        />
                                        <TextField onBlur={handleOnBlur}
                                            name="email"
                                            sx={{ my: 1 }} id="filled-basic" label="email" variant="standard" fullWidth
                                            className='inputField'
                                            type="email"
                                        />

                                        <TextField onBlur={handleOnBlur} name="password" sx={{ my: 1 }}
                                            id="filled-basic"
                                            label="password"
                                            variant="standard"
                                            fullWidth
                                            className='inputField'
                                            type="password"
                                        />
                                        <TextField onBlur={handleOnBlur} name="password2" sx={{ my: 1 }}
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
            </Container> :
                <CircularProgress style={{ margin: "25% 50%", overflowX: "hidden" }} />}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={snackbarOpen}
                onClose={handleSnackBarClose}
                message="Successfully Registered!"
                key={"top" + "center"}
            />

        </>
    );
};

export default Register;