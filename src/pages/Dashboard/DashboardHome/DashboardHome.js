import React from 'react';
import { Button, Grid } from '@mui/material';
import Calender from '../../Share/Calender/Calender';
import Appointment from '../Appointment/Appointment';
const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={4}>
                <Calender
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
                <Appointment date={date} />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;