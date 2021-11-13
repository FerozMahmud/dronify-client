import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {

    const { handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <div className='register'>
            <h2>Create User Account</h2>
            <form onSubmit="">
                <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                <br />
                <input type="password" name="" id="" placeholder="Re-enter Password" />
                <br />
                <button className="signin-btn btn-success px-5" type="submit" value="Submit">Submit</button>
            </form>
            <div className="pt-2">
                <p>Already have a account? <Link className="text-link" to="/login"><strong>Login here</strong></Link></p>
                <div><p>or</p></div>
                <button className="signin-btn btn-success">Sign-up with Google</button>
            </div>
        </div >
    );
};

export default Register;