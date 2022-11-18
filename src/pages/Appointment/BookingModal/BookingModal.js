
import React, { useState } from 'react';
import { Alert, Box, Button, Fade, IconButton, Modal, Snackbar, TextField, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import CloseIcon from '@mui/icons-material/Close'
const modalStyelist = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '450px',
    maxWidth: '500px',
    padding: "20px",
    backgroundColor: '#fff',
    borderRadius: '10px',
    outline: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: '100',
    overflow: 'hidden'
}

const BookingModal = ({ date, appointment, openBooking, handleCloseBooking }) => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const { user } = useAuth();
    const initialBooking = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialBooking);
    const handleSnackBarClose = () => {
        setSnackbarOpen(false);
    };
    const handleBookigningSubmit = (e) => {
        const appointmentInfo = {
            ...bookingInfo,
            serviceName: appointment.name,
            time: appointment.time,
            date: date.toLocaleDateString(),
        }

        fetch("https://glacial-ridge-14430.herokuapp.com/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    setSnackbarOpen(true);
                }
                // handleCloseBooking();
            })

        handleCloseBooking();
        e.preventDefault();
    }

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[field] = value;

        setBookingInfo(newBookingInfo);
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleCloseBooking}
            >
                <Fade in={openBooking} >
                    <Box style={modalStyelist} >
                        <Typography variant="h6">
                            {appointment.name}
                        </Typography>
                        <form style={{
                            width: '100%'
                        }}>
                            <TextField
                                fullWidth
                                disabled
                                label="Select Date"
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                variant="outlined"
                                size="small"
                                sx={{ my: 1, }}></TextField>
                            <br />
                            <TextField
                                fullWidth
                                disabled
                                label="Select Time"
                                id="outlined-size-small"
                                defaultValue={appointment.time}
                                variant="outlined"
                                size="small"
                                sx={{ my: 1, }}></TextField>
                            <br />
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="patientName"
                                type="text"
                                id="outlined-size-small"
                                variant="outlined"
                                onBlur={handleOnBlur} handleOnBlur
                                defaultValue={bookingInfo.patientName}
                                size="small"
                                sx={{ my: 1, }}></TextField>
                            <br />
                            <TextField
                                name="email"
                                fullWidth
                                label="Email"
                                id="outlined-size-small"
                                variant="outlined"
                                onBlur={handleOnBlur}
                                size="small"
                                defaultValue={bookingInfo.email}
                                sx={{ my: 1, }}></TextField>
                            <br />
                            <TextField
                                fullWidth
                                name="phone"
                                label="Phone Number"
                                type="phone"
                                id="outlined-size-small"
                                variant="outlined"
                                onBlur={handleOnBlur}
                                size="small"
                                sx={{ my: 1, }}></TextField>
                            <br />

                            <Button type="submit" onClick={handleBookigningSubmit} variant="contained" color="primary" sx={{ my: 1, width: "90%" }}>SUBMIT</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
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
                    Successfully Submitted!
                </Alert>
            </Snackbar>
        </>
    );
};

export default BookingModal;