import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ManageOrders.css'

const ManageOrders = () => {
    const [services, setServices] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('https://safe-cliffs-06637.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to Delete the Order???');
        if (proceed) {
            fetch(`https://safe-cliffs-06637.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {

                        setControl(!control)

                    }
                })
        }

    }
    return (
        <div>
            <div className='all-orders'>
                <h2 className=' pt-5 pb-3 subtitle'>All The Orders Are Here</h2>
                <h3 className='pb-5 pt-1 text-success fs-3'>You can delete Any Order</h3>
                <div className='row manage-services container-fluid'>
                    {
                        services.map((service) => (
                            <div className='col-lg-4 col-md-6 col-6   manage-service'>
                                <div>
                                    <img className='w-100' src={service?.image} alt="" />
                                </div>
                                <h5 className='text-info'>{service?.name}</h5>
                                <h5 className='text-secondary'>Cost:{service?.price}$</h5>
                                <p className='text-primary'>Booking Date: {service?.date}</p>

                                <button className='btn btn-warning  border-0 rounded-pill mb-3' onClick={() => handleDelete(service?._id)}>Delete Booking</button>

                            </div>
                        ))
                    }
                </div>
                <h5 className='mt-4'>Back to Dashboard</h5>
                <NavLink className="btn btn-success px-3" to="/dashboard">Dashboard</NavLink>
            </div>
        </div>
    );
};

export default ManageOrders;