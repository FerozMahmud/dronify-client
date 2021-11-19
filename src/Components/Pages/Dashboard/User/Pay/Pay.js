import React from 'react';
import { NavLink } from 'react-router-dom';

const Pay = () => {
    return (
        <div style={{ color: "green", padding: "125px" }}>
            <h1>Payment system cooming soon...</h1>
            <h5 className='mt-4'>Back to Dashboard</h5>
            <NavLink className="btn btn-success px-3" to="/dashboard">Dashboard</NavLink>
        </div >
    );
};

export default Pay;