import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth()
    const email = user.email;
    console.log(email);
    const [services, setServices] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://cryptic-badlands-00661.herokuapp.com/myorders/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [email, control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to cancel the booking???');
        if (proceed) {
            fetch(`https://cryptic-badlands-00661.herokuapp.com/cancelOrder/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {

                        setControl(!control)

                    }
                })
        }

    }
    return (
        <div className='my-order'>
            <h2 className='title pt-5'>Order Details</h2>
            <h3 className='pb-5 pt-3 text-success fs-3'>Here you can see only your orders</h3>
            <div className='row container-fluid'>
                {
                    services.map((service) => (
                        <div className='container-fluid col-lg-4 col-md-6 col-12 booked'>
                            <div>
                                <img className='w-100' src={service?.image} alt="" />
                            </div>
                            <h5 className='text-info'>{service?.name}</h5>
                            <h5 className='text-secondary'>Total-Cost: {service?.price}$</h5>
                            <p className='text-primary'>Booking Date: {service?.date}</p>
                            <button className='btn btn-danger  border-0 rounded-pill mb-3' onClick={() => handleDelete(service?._id)}>Booking Cancel</button>

                        </div>
                    ))
                }
            </div>
            <h5 className='mt-4'>Back to Dashboard</h5>
            <NavLink className="btn btn-success px-3" to="/dashboard">Dashboard</NavLink>
        </div>
    );
};

export default MyOrders;