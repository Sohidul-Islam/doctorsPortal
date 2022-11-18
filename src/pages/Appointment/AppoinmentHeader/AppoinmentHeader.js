import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import Calender from '../../Share/Calender/Calender';

const AppoinmentHeader = ({ date, setDate }) => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>

                        <Calender date={date} setDate={setDate} />

                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <img style={{ width: '100%' }} src={chair} alt="chair" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppoinmentHeader;