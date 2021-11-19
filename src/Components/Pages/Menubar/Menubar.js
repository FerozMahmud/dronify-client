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
                    <Navbar.Brand href="/"><h3><strong>Dronify</strong></h3></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className="menu nav" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="menu nav" to="/products">Products</NavLink>


                        {user.email && <span></span>}
                        {
                            user.email ?
                                <div className="d-flex flex-row">
                                    <Nav>
                                        <NavLink activeStyle={activeStyle} className="menu pt-lg-1" to="/dashboard">Dashboard</NavLink>
                                    </Nav>
                                    <div className="align-item-top">
                                        <span style={{ color: 'lightgreen' }} className="user-logout pt-sm-5"><img src="https://i.ibb.co/7y6Td7d/login-icon.png" alt="Login" width="30px" /> <strong>{user.displayName}</strong></span>
                                        <button className=" user-logout btn btn-danger font-weight mx-2" onClick={logOut}>Log out</button>
                                    </div>
                                </div>
                                :
                                <Nav>
                                    <NavLink activeStyle={activeStyle} className="user-login" to="/register"><button className="btn btn-success font-weight m-1 px-3">Sign up</button></NavLink>
                                    <NavLink activeStyle={activeStyle} className="user-login" to="/login"><button className="btn btn-success font-weight m-1 px-4">Login</button></NavLink>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Menubar;