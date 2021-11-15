import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle, setUser, loginWithEmailAndPassword } = useAuth();


    const location = useLocation()
    const history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault()
        loginWithEmailAndPassword(email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLoginWithEmailAndPassword}>
                <input type="email" onBlur={handleGetEmail} name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" onBlur={handleGetPassword} name="" id="" placeholder="Password" />
                <br />
                <button className="signin-btn btn-success px-5" type="submit" value="Submit">Login</button>
            </form>
            <div className="pt-2">
                <p>New to Dronify? <Link className="text-link" to="/register"><strong>Create a new account</strong></Link></p>
                <div><hr className='w-50 mx-auto' /></div>
                <button className="signin-btn btn-success" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );

};
export default Login;