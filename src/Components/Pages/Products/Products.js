import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    // const { name, image, description, id } = props.product;

    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setproducts(data));
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
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">{product.description}</p>
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