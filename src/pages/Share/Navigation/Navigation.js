import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../Hooks/useAuth';
const Navigation = () => {
    const { user, logout } = useAuth();
    console.log("user ke peyechi: ", user);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Link underline="none" className="nav-item" to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link underline="none" className="nav-item" to="/appointment">
                        <Button color="inherit">Appointment</Button>
                    </Link>
                    {user?.email && <Typography variant="h6" sx={{ fontSize: 16 }} component="span" >
                        {user.displayName || user.email}
                    </Typography>
                    }
                    {user?.email ? <Link underline="none" className="nav-item" to="/">
                        <Button onClick={logout} color="inherit">Logout</Button>
                    </Link>
                        :
                        <Link underline="none" className="nav-item" to="/login">
                            <Button color="inherit">Login</Button>
                        </Link>
                    }
                    {!user?.email && <Link underline="none" className="nav-item" to="/register">
                        <Button color="inherit">Register</Button>
                    </Link>}
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Navigation;