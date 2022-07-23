import React, { useState } from 'react';
import Navigation from '../../Share/Navigation/Navigation';
import Header from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppointment from './../AvailableApointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navigation>
            </Navigation>
            <Header date={date} setDate={setDate} />
            <AvailableAppointment date={date} setDate={setDate} />
        </div>
    );
};

export default Appointment;