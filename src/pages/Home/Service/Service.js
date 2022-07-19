import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { service, description, img } = props.service;
    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardContent>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "80px", margin: "0 auto", marginBottom: "40px" }}
                    image={img}
                    alt="green iguana"

                />
                {/* <img src={img} style={{ margin: "0 25%" }} /> */}
                <Typography style={{ fontWeight: "bold", textAlign: "center", marginBottom: "10px" }} sx={{ fontSize: 20 }} variant="h1" component="h1" color="text.secondary" gutterBottom>
                    {service}
                </Typography>
                <Typography style={{ textAlign: "center" }} sx={{ fontSize: 16 }} variant="h2" component="div">
                    {description}
                </Typography>

            </CardContent>

        </Card>
    );
};

export default Service;