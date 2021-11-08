import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import aBg from '../../../images/appointment-bg.png';

import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${aBg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',

    backgroundBlendMode: 'darken, luminosity',

    marginTop: 175

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ 
                    display:'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign :'left'
                     
                }}>
                    <Box >
                        <Typography variant="h6"  sx={{mb:3}} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4"  sx={{mb:2}} style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6"  sx={{mb:1}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            It is a long established fact that a reader will be distractedby the readable content of a page when looking at its.
                        </Typography>
                        <br />
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;