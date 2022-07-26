import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const AdminRouter = ({ children, ...rest }) => {
    const { user, admin, isLoader } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("ami admin routere achi use effect", user.email, admin, isLoader);
        if (user?.email && admin === false) {
            navigate("/", {
                state: { from: location.pathname }
            })
        }
    }, [])

    if (user?.email && admin) {
        return children;
    }
};

export default AdminRouter;