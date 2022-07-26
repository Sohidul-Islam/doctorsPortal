import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../Hooks/useAuth';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';

const Appointment = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);



    useEffect(() => {
        setIsDataLoaded(false);
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        console.log("url", url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
                setIsDataLoaded(true);
            })
    }, [date])


    return (
        <div>
            <h1>Appointment {appointments.length}</h1>
            {isDataLoaded ? <TableContainer sx={{ maxWidth: 650 }} component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Time</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                : <CircularProgress style={{ margin: "25% 50%", overflowX: "hidden" }} />}
        </div>
    );
};

export default Appointment;