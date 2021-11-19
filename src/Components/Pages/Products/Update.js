import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Update = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        fetch(`http://localhost:5000/update/${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result.modifiedCount));
    };

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, []);
    return (
        <div>
            <h1>Update {singleProduct.name}</h1>
            <form className="p-2 m-2" onSubmit={handleSubmit(onSubmit)}>
                <input className="p-2 m-2" defaultValue={singleProduct.name} {...register("name", { required: true })} />
                <br />
                <input className="p-2 m-2" defaultValue={singleProduct.price} {...register("price", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className='btn btn-success p-2 m-2' to="/manageproducts" type="submit" />
            </form>
        </div>
    );
};

export default Update;