import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((result) => setproducts(result));
    }, []);

    return (

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
                                <div className="mb-3">
                                    <Link to={`/purchase/${product.id}`}><span><button className='btn btn-dark px-5'>Buy now</button></span></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;