import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading,authError} = useAuth();

    //in value
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        //previous value init
        const newLogicData = { ...loginData };

        //current value push
        newLogicData[field] = value;
        setLoginData(newLogicData);
    }

    const handleLoginSubmit = e => {
       if(loginData.password !== loginData.password2){
           alert("Your pasword did't match");
           return;
       }
       registerUser(loginData.email, loginData.password)

        e.preventDefault();
    }

    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>

                    <Typography variant="h6" gutterBottom component="div">
                        Register
                    </Typography>
                    {
                        !isLoading ?
                        <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                        />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"

                            name="password"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            variant="standard"

                            name="password2"
                            onChange={handleOnChange}
                        />

                        <Button type="submit" sx={{ width: "75%", m: 1 }} variant="contained">Register</Button>

                        <NavLink
                            to="/Login"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">Alrady Registered? Please Login</Button>
                        </NavLink>

                    </form>
                    :
                    <CircularProgress />

                    }
                    {
                        user?.email && <Alert severity="success">User Created Successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Register;