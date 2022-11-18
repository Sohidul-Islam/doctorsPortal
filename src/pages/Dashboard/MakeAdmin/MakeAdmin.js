import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const [newAdminMessage, SetNewAdminMessage] = useState("");
    const onBlurHandler = (e) => {
        setEmail(e.target.value);

    }
    const onclickHandler = (e) => {

        const url = "https://glacial-ridge-14430.herokuapp.com/users/admin";
        fetch(url, {
            method: 'PUT',
            headers: {
                "authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        }).then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    setSuccess(true);
                    SetNewAdminMessage(`Make a new admin successfully by ${email}`);
                }
                else if (data.modifiedCount === 0) {
                    setSuccess(true);
                    SetNewAdminMessage(`${email}, is not valid email`);
                }
                else {
                    setSuccess(false);
                }
            }).catch(err => {
                console.log("make admin request: err: ", err);
            })

        e.preventDefault();
    }
    return (
        <Box>
            <Typography align="center" variant="h4">Make Admin</Typography>
            <Box style={{ display: 'flex' }}>

                <TextField onBlur={onBlurHandler} type="email" sx={{ width: '90%' }} name="admin" label="Add a email" />
                <Button onClick={onclickHandler} sx={{ width: '10%' }} variant="contained">Make Admin</Button>
            </Box>
            {success && <Box>
                {newAdminMessage === `Make a new admin successfully by ${email}` ? <Alert severity="success">{newAdminMessage}</Alert>
                    : <Alert severity="error">{newAdminMessage}</Alert>}
            </Box>}
        </Box>

    );
};

export default MakeAdmin;