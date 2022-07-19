
import React from 'react';
import { Box, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { padding } from '@mui/system';
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
    console.log("open booking : ", openBooking);
    const handleBookigningSubmit = (e) => {
        alert("Booking Successful");
        e.preventDefault();
    }
    return (
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
                    <form>
                        <TextField
                            disabled
                            label="Select Date"
                            id="outlined-size-small"
                            defaultValue={date}
                            variant="outlined"
                            size="small"
                            sx={{ my: 1, width: "100%" }}></TextField>
                        <br />
                        <TextField
                            disabled
                            label="Select Time"
                            id="outlined-size-small"
                            defaultValue={appointment.time}
                            variant="outlined"
                            size="small"
                            sx={{ my: 1, width: "100%" }}></TextField>
                        <br />
                        <TextField
                            label="Full Name"
                            type="text"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            sx={{ my: 1, width: "100%" }}></TextField>
                        <br />
                        <TextField
                            label="Phone Number"
                            type="phone"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            sx={{ my: 1, width: "100%" }}></TextField>
                        <br />
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            sx={{ my: 1, width: "100%" }}></TextField>
                        <br />
                        <Button type="submit" onClick={handleBookigningSubmit} variant="contained" color="primary" sx={{ my: 1, width: "90%" }}>SUBMIT</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;