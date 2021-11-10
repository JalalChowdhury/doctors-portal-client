import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading,authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
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
        loginUser(loginData.email, loginData.password,location, history);
        e.preventDefault();
    }

    // google sign in
    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history);
    }


    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>

                    <Typography variant="h6" gutterBottom component="div">
                        Login
                    </Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"

                            name="email"
                            onBlur={handleOnChange}
                        />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"

                            name="password"
                            onBlur={handleOnChange}
                        />

                        <Button type="submit" sx={{ width: "75%", m: 1 }} variant="contained">Login</Button>

                        <NavLink
                            to="/register"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">New User? Please register</Button>
                        </NavLink>
                        <br />
                        <Button  onChange={handleGoogleSignIn} variant="contained">Google Sign in</Button>

                    </form>
                    }
                    {
                        isLoading &&  <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User login Successfully!</Alert>
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

export default Login;