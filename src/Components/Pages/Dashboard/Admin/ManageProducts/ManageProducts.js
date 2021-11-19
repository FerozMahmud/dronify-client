import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setproducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch("https://cryptic-badlands-00661.herokuapp.com/products")
            .then((res) => res.json())
            .then((result) => setproducts(result));
    }, [isDeleted]);

    const handleDelete = (id) => {
        fetch(`https://cryptic-badlands-00661.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDeleted(true);
                } else {
                    setIsDeleted(false);
                }
            });
        console.log(id);
    };

    return (
        <div>
            <div className='container'>
                <div className='top-products p-2'>
                    <h2>All Products</h2>
                    <p>Get your hands on the most advanced drone.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 pb-5 px-5 g-4">
                    {
                        products.map(product =>
                            <div className="col">
                                <div className="card h-100 bg-light">
                                    <img src={product.image} className="card-img-top" height='250' width='200' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                    <div className="p-4">
                                        <h6 className="card-text">Price: {product.price}</h6>
                                    </div>
                                    <div className="m-3">
                                        <Link to={`update/${product._id}`}>
                                            <button className='btn btn-success px-4 me-1'>Update</button>
                                        </Link>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-danger px-4 ms-1'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <h5 className='mt-4'>Back to Dashboard</h5>
                <NavLink className="btn btn-success px-3 mb-3" to="/dashboard">Dashboard</NavLink>
            </div>
        </div>
    );
};

export default ManageProducts;