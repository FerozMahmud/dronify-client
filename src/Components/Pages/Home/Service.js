import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { name, image, description, id } = props.service;
    return (
        <div className="col">
            <div className="card h-100 bg-light">
                <img src={image} className="card-img-top" height='250' width='200' alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div className="mb-3">
                    <Link to={`/purchase/${id}`}><span><button className='btn btn-dark px-5'>Buy now</button></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;