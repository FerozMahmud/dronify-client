import React from 'react';
import { Link } from 'react-router-dom';
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

            <div className="row">
                <div className="col-3 bg-info py-5">
                    <h3>User Dashboard</h3>
                    <Link activeStyle={activeStyle} className="dash-nav" to="/myorders">My Orders</Link>
                    <br />
                    <Link activeStyle={activeStyle} className="dash-nav" to="/pay">Payment</Link>
                    <br />
                    <Link activeStyle={activeStyle} className="dash-nav" to="/addreview">Add Review</Link>
                    <br />
                    <button className="btn btn-danger log-out mt-3" onClick={logOut}>User Logout</button>
                </div>
                <div className="col-3 bg-info py-5">
                    <h3>Admin Dashboard</h3>
                    <Link activeStyle={activeStyle} className="dash-nav" to="/manageorders">Manage Orders</Link>
                    <br />
                    <Link activeStyle={activeStyle} className="dash-nav" to="/manageproducts">Manage Products</Link>
                    <br />
                    <Link activeStyle={activeStyle} className="dash-nav" to="/addproduct">Add Products</Link>
                    <br />
                    <Link activeStyle={activeStyle} className="dash-nav" to="/makeadmin">Make Admin</Link>
                    <br />
                    <button className="btn btn-danger log-out mt-3" onClick={logOut}>Admin Logout</button>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;