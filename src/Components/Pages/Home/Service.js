import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { name, image, description, price, id } = props.service;
    return (
        <div className="col">
            <div className="card h-100 bg-light">
                <img src={image} className="card-img-top" height='250' width='200' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="p-4">
                    <h6 className="card-text">Price: {price}</h6>
                </div>
                <div className="mb-3">
                    <Link to={`/purchase/${id}`}><span><button className='btn btn-dark px-5'>Buy now</button></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;