import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import bg from '../../../images/appointment.png';
const appointmentBg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}
const Contact = () => {
    return (
        <Box style={appointmentBg}>
            <Box sx={{ my: 3, p: 5 }}>
                <Typography variant="h6" align="center" sx={{ color: "#19D3AE", fontSize: 20, fontWeight: 600 }}>
                    Contact Us
                </Typography>
                <Typography variant="h6" align="center" sx={{ color: "#fff", fontSize: 36, fontWeight: 300 }}>
                    Stay connected with us
                </Typography>
                <form>
                    <Box style={{ width: "40%", margin: "20px 30%" }}>
                        <TextField
                            style={{ width: "100%", backgroundColor: "#fff", color: "#fff", margin: "0 auto", borderRadius: "8px" }}
                            variant="filled"
                            label="Email Address"
                            type="email"
                            id="outlined-size-small"

                            size="small"></TextField>
                    </Box>
                    <Box style={{ width: "40%", margin: "20px 30%" }}>
                        <TextField
                            style={{ width: "100%", backgroundColor: "#fff", color: "#fff", margin: "0 auto", borderRadius: "8px" }}
                            variant="filled"
                            label="Subject"
                            type="text"
                            id="outlined-size-small"

                            size="small"></TextField>
                    </Box>
                    <Box style={{ width: "40%", margin: "20px 30%" }}>
                        <TextField
                            style={{ width: "100%", backgroundColor: "#fff", color: "#fff", margin: "0 auto", borderRadius: "8px" }}
                            multiline
                            rows={6}
                            variant="filled"
                            label="Your message"
                            type="text"
                            id="outlined-size-small"

                            size="small"></TextField>
                    </Box>
                    <Box style={{ width: "40%", margin: "20px 30%", textAlign: "center" }}><Button sx={{ px: 3, fontWeight: 600, backgroundImage: "linear-gradient(#19D3AE, #0FCFEC)" }} type="submit" variant="contained" onClick={(e) => { e.preventDefault() }}>Submit</Button></Box>

                </form>
            </Box>
        </Box>
    );
};

export default Contact;