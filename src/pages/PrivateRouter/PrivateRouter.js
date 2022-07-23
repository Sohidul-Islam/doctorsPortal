import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!user?.email) {
            console.log("ami navigate korechi : login page");
            navigate("/login", {
                state: { from: location.pathname }
            })
        }
    }, [])

    if (user?.email) {
        console.log("ami childrenke return korechi", children);
        return children;
    }
};

export default PrivateRouter;