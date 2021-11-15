import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const { logOut } = useAuth()
    const activeStyle = {
        fontWeight: "bold",
        color: "lightblue"
    }
    return (
        <div className="dashboard-top">
            <div className="bg-success"><Navbar.Brand href=" /" className="text-light"><h4 className='pt-2'>Admin Dashboard</h4><hr className='mx-auto w-25' /></Navbar.Brand></div >
            <Navbar className="dash-header" bg="success" variant="dark" collapseOnSelect expand="lg">
                <Container >
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center pb-2">
                        <NavLink activeStyle={activeStyle} className="dash-nav" to="/manageorders">Manage Orders</NavLink>
                        <NavLink activeStyle={activeStyle} className="dash-nav" to="/manageproducts">Manage Products</NavLink>
                        <NavLink activeStyle={activeStyle} className="dash-nav" to="/addproduct">Add Product</NavLink>
                        <NavLink activeStyle={activeStyle} className="dash-nav" to="/makeadmin">Make Admin</NavLink>
                        <button className="btn btn-danger log-out" onClick={logOut}>Admin Logout</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="admin-dashboard">
                <h3>Welcome To Admin Dashboard</h3>
            </div>
        </div >
    );
};

export default Dashboard;