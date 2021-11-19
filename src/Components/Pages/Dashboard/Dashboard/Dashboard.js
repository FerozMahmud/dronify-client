import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const { user, logOut } = useAuth()
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch(`https://cryptic-badlands-00661.herokuapp.com/checkAdmin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true)
                }
                else {
                    setIsAdmin(false)
                }
            });
    }, [user?.email]);

    const activeStyle = {
        fontWeight: "bold",
        color: "lightblue"
    }
    return (
        <div className="dashboard-top">

            <div className="">
                {isAdmin &&
                    <div className="py-5">
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
                }
                {isAdmin !==
                    <div className="py-5">
                        <h3>User Dashboard</h3>
                        <Link activeStyle={activeStyle} className="dash-nav" to="/myorders">My Orders</Link>
                        <br />
                        <Link activeStyle={activeStyle} className="dash-nav" to="/pay">Payment</Link>
                        <br />
                        <Link activeStyle={activeStyle} className="dash-nav" to="/addreview">Add Review</Link>
                        <br />
                        <button className="btn btn-danger log-out mt-3" onClick={logOut}>User Logout</button>
                    </div>
                }
            </div>
        </div >
    );
};

export default Dashboard;