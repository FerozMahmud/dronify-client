import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://cryptic-badlands-00661.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset()
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} name="email" type="email" placeholder="Your email" />


                    <button className="btn btn-success">Make Admin</button>
                </form>
            </div>




            <div>
                <h5 className='mt-4'>Back to Dashboard</h5>
                <NavLink className="btn btn-success px-3 mb-3" to="/dashboard">Dashboard</NavLink>
            </div>
        </div>
    );
};

export default MakeAdmin;