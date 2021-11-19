import React, { useState } from 'react';
import './AddProduct.css'

const AddProduct = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value)
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    };
    const handleImageeChange = (e) => {
        setImage(e.target.value)
    };

    const handleAddProducts = () => {
        const data = { name, description, price, image };

        fetch("https://cryptic-badlands-00661.herokuapp.com/addProduct", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((res) => res.json)
            .then((result) => console.log(result))
    };

    return (
        <div>
            <div className='add-product'>
                <h2 className='text-dark'>Please add a product</h2>
                <form>
                    <input onChange={handleNameChange} placeholder='Enter a product name' />
                    <input onChange={handlePriceChange} placeholder='Enter price of the product' />
                    <textarea onChange={handleDescriptionChange} placeholder='Enter a short discription' />
                    <input onChange={handleImageeChange} placeholder='Enter the image url' />
                    <button onClick={handleAddProducts} className='submit-btn btn btn-success' Enter="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;