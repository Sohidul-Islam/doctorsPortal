import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user, isLoader } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("is loader ", isLoader);
    return isLoader ? <CircularProgress /> : user?.email ? children : navigate('/login', { state: { from: location.pathname } });
};

export default PrivateRouter;