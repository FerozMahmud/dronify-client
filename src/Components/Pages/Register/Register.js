import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Register.css'

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleGetName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleGetEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handleGetPassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    };

    const handleRegister = (e) => {
        createAccountWithGoogle(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    // onChange={handleOnChange}

    return (
        <div className='register'>
            <h2>Create User Account</h2>
            <form onSubmit={handleRegister}>
                <input type="text" onBlur={handleGetName} name="" id="" value="name" placeholder="Your Name" />
                <br />
                <input type="email" onBlur={handleGetEmail} name="" id="" value="email" placeholder="Your Email" />
                <br />
                <input type="password" onBlur={handleGetPassword} name="" id="" value="password" placeholder="Your Password" />
                <br />
                {/* <input type="password2" onBlur={handleGetPassword} name="" id="" placeholder="Re-enter Password" />
                <br /> */}
                <button className="signin-btn btn-success px-5" type="submit" value="create">Sign Up</button>
            </form>
            <div className="pt-2">
                <p>Already have a account? <Link className="text-link" to="/login"><strong>Login here</strong></Link></p>
                <div><hr className='w-50 mx-auto' /></div>
                <button className="signin-btn btn-success" onClick={handleGoogleLogin}>Sign-up with Google</button>
            </div>
        </div >
    );
};

export default Register;