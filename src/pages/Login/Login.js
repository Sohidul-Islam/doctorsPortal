import React, { useEffect } from 'react';
import { Box, CardMedia, Container, Grid, TextField, Paper, Typography, Button, Collapse, Alert, IconButton, Snackbar, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import loginImage from '../../images/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';
//style texfield
const Login = (props) => {
    console.log("props", props);
    const [loginData, setLoginData] = useState({});
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const { user, isLoader, error, setError, loginWithEmailPassword, signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (error !== "") {

            setOpen(true);
        }
        else {

            setOpen(false);
            if (isLoader) setSnackbarOpen(true);

        }
    }, [error]);
    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        // console.log(field);
    }
    const handleSubmit = async (e) => {
        await loginWithEmailPassword(loginData.email, loginData.password, navigate, location);
        e.preventDefault();
    }
    const handleSnackBarClose = () => {
        setSnackbarOpen(false);
    };
    return (
        <>
            {isLoader == false ?
                <>
                    <Container>
                        <Box sx={{ my: 8 }}>
                            <Box sx={{ flexGrow: 1 }} >
                                <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={4} sm={4} md={7}>
                                        <Paper elevation={3} >
                                            <Box sx={{ p: 3 }}>
                                                <Collapse in={open}>
                                                    <Alert
                                                        severity="error"
                                                        action={
                                                            <IconButton
                                                                aria-label="close"
                                                                color="inherit"
                                                                size="small"
                                                                onClick={() => {
                                                                    setOpen(false);
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
                                                    Login
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

                                                <Link to="/"><Button variant='text'>
                                                    Forgot your password</Button></Link>
                                                <br />
                                                <Button onClick={handleSubmit} fullWidth sx={{ my: 2 }} type="submit" variant="contained">LOGIN</Button>

                                                <Link to="/register"><Button variant='text'>New User? please register</Button></Link>
                                                <br />
                                                <Typography align="center">----------------------------------------------------------------</Typography>
                                                <br />
                                                <Button onClick={() => {
                                                    signInWithGoogle(navigate, location)
                                                }} fullWidth sx={{ my: 2 }} type="submit" variant="contained">GOOGLE SIGN IN</Button>
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

                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={snackbarOpen}
                        onClose={handleSnackBarClose}

                        key={"top" + "center"}
                    >
                        <Alert
                            severity="success"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setSnackbarOpen(false);
                                    }}

                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Successfully Loged In!
                        </Alert>
                    </Snackbar>
                </>
                :
                <CircularProgress style={{ margin: "25% 50%", overflowX: "hidden" }} />
            }
        </>


    );
};

export default Login;