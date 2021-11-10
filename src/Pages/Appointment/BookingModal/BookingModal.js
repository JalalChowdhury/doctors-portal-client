import React, { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, date, openBooking, handleBookingClose, setBookingSuccess }) => {

    const { name, time } = booking;

    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    // console.log("display nameeeeee", user.displayName);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    // from availbale appointment
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });

        e.preventDefault();


        alert("Submitting")
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}

                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}

                            size="small"
                        />
                        <Button type="Submit" variant="contained">Submit</Button>

                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;