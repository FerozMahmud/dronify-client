import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://cryptic-badlands-00661.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container'>
            <div className='top-products pt-5 pb-2'>
                <h2>Top Products</h2>
                <p>Get your hands on the most advanced drone.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 pb-4 px-5 g-4">
                {
                    services.map((service, index) => index < 6 &&
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </div>
            <NavLink className="btn btn-success mb-4" to="/products">Explore All Products</NavLink>
        </div>
    );
};

export default Services;