import React from 'react';
// import axios from 'axios';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        // axios.post('https://safe-cliffs-06637.herokuapp.com/services', data)
        fetch('https://jsonplaceholder.typicode.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your data added succesfully!!!')
                    reset()
                }
            })
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <div className='add-product'>
                <h2 className='text-dark'>Please add a product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Enter a product name' />
                    <input type='number' {...register("price")} placeholder='Enter price of the product' />
                    <textarea {...register("discription")} placeholder='Enter a short discription' />
                    <input  {...register("img")} placeholder='Enter the image url' />
                    <button className='submit-btn btn btn-success' Enter="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;