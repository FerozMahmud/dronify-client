import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Menubar.css'

const Menubar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "lightgreen"
    }
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar className="header" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container >
                    <Navbar.Brand href="/"><strong>Dronify</strong></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className="nav" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/products">Explore All Products</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/myorders">My Orders</NavLink>


                        {user.email && <span style={{ color: 'lightgreen' }}>Hello <strong >{user.displayName}</strong></span>}
                        {
                            user.email ?
                                <button className="user-login btn btn-danger mx-2" onClick={logOut}>Log out</button>
                                :
                                <Nav>
                                    <NavLink activeStyle={activeStyle} className="user-login" to="/register">Sign up</NavLink>
                                    <NavLink activeStyle={activeStyle} className="user-login" to="/login">Login</NavLink>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;