import React, { useState } from 'react';
import { Spinner, Toast } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Register.css'
const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError } = useAuth()
    const [show, setShow] = useState(false);
    const history = useHistory()
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleRegister = e => {
        setShow(true)
        if (loginData.password !== loginData.password2) {
            alert('Password did not match.Please try again')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history, location)
        e.preventDefault()
    }
    if (isLoading) {
        return <Spinner animation="grow" variant="secondary" />
    }
    return (

        <div className='login'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input name='name' placeholder=' Your Name' onBlur={handleOnBlur} required /><br />
                <input type="email" name='email' placeholder=' youremail' onBlur={handleOnBlur} required />
                <br />
                <input type="password" name='password' placeholder=' your password' onBlur={handleOnBlur} required /><br />
                <input type="password" name='password2' placeholder=' Retype your password' onBlur={handleOnBlur} required />
                <br />
                <button className='btn btn-success' >Register</button><br />
                <h5 className='text-dark'>Already have a account? <NavLink style={{ textDecoration: 'none' }} to="/login" variant="text">Please Login</NavLink></h5>
            </form>
            {user.email && <Toast className="m-auto" onClose={() => setShow(false)} show={show} delay={100000} autohide>
                <Toast.Header >
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Thank You !!!</strong>
                    <small>for registration</small>
                </Toast.Header>
                <Toast.Body>~~User Created Successfully~~</Toast.Body>
            </Toast>}
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

export default Register;