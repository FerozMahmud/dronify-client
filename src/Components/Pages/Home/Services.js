import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container'>
            <div className='top-products pt-5 pb-2'>
                <h2>Top Products</h2>
                <p>Get your hands on the most advanced drone.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 pb-5 px-5 g-4">
                {
                    services.map((service, index) => index < 6 &&
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;