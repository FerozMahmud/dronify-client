import React, { useState } from 'react';
import { Spinner, Toast } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loginData, setLoginData] = useState({})
    const { loginUser, isLoading, authError, signInUsingGoogle } = useAuth()
    const [show, setShow] = useState(false);

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
    }
    const onSubmit = data => {
        setShow(true)
        loginUser(loginData.email, loginData.password, location, history)
        reset()
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} name='email' type='email' placeholder=' your email' onChange={handleOnChange} />
                <br />
                <input {...register("password", { required: true })} type='password' name='password' placeholder=' your password' onChange={handleOnChange} />
                <br />
                <button className='btn btn-success px-4' >Login</button><br />
                <h5 className="text-dark">New to Dronify? <NavLink style={{ textDecoration: 'none' }} to="/register" variant="text">Please create a account</NavLink></h5>
            </form>

            <div className='login'>
                <span><hr /></span>
                <p className='fs-4'>Please login by your Google Account</p>
                <button onClick={handleGoogleLogin} className='btn btn-success'>Google Login</button>
            </div>

            {isLoading && <Spinner animation="grow" variant="secondary" />}

            {authError && <Toast className="m-auto" onClose={() => setShow(false)} show={show} delay={100000} autohide>
                <Toast.Header >
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Opps!!!</strong>
                    <small>error</small>
                </Toast.Header>
                <Toast.Body>{authError}</Toast.Body>
            </Toast>}
        </div>
    );
};

export default Login;