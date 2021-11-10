import { Grid } from '@mui/material';
import * as React from 'react';
import Calender from '../../Shared/Calendar/Calender';
import AppointmentsList from '../AppointmentsList/AppointmentsList';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <Calender
                                date={date}
                                setDate={setDate}
                            ></Calender>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <AppointmentsList
                                date={date}
                            ></AppointmentsList>
                        </Grid>

                    </Grid>
    );
};

export default DashboardHome;