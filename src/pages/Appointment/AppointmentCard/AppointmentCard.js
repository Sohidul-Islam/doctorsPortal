import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';
// import BookingModal from '../BookingModal/BookingModal';
const AppointmentCard = ({ date, appointment }) => {
    const [openBooking, setOpenBooking] = useState(false);

    const handleOpenBooking = () => {
        setOpenBooking(true);
    };

    const handleCloseBooking = () => {
        setOpenBooking(false);
    };
    return (
        <>
            <Card style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} sx={{ minWidth: 275, boxShadow: 0, border: 0 }}>
                <Box sx={{ p: 1.5 }}>
                    <CardContent align="center">
                        <Typography variant="h3" component="h3" sx={{ color: "#19D3AE", fontSize: 20 }} color="text.secondary" gutterBottom>
                            {appointment.name}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ fontSize: 14 }}>
                            {appointment.time}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {appointment.space} SPACES AVAILABLE
                        </Typography>
                        <CardActions  >
                            <Button onClick={handleOpenBooking} sx={{ p: 1 }} variant="contained" style={{ backgroundImage: "linear-gradient(#19D3AE, #0FCFEC)", margin: "0 auto" }} size="small">BOOK APPOINTMENT</Button>
                        </CardActions>
                    </CardContent>

                </Box>
            </Card>

            <BookingModal date={date} openBooking={openBooking} handleCloseBooking={handleCloseBooking} appointment={appointment} />

        </>
    );
};

export default AppointmentCard;