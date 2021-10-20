import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';



const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        history.push(location.state?.from || '/home');
    }

    return (
        <div style={{ padding: "80px" }}>
            <h2>Please Login</h2>
            <Button onClick={() => {
                signInUsingGoogle();
                handleGoogleSignIn();
            }} variant="warning">Google Sign In</Button>
        </div>
    );
};

export default Login;