import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'



}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter,textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here

                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia autem perspiciatis quidem
                            omnis nesciunt voluptas, ullam nihil aliquid dolores voluptatem!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{display:'flex',justifyContent:'center',...verticalCenter}}>
                    <img src={chair} style={{width: '350px' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;