import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const { serviceId } = useParams()
    const { user } = useAuth()
    const email = user.email
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://...com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = email;
        fetch('https://...com/confirmOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Congratulation!!!Your Booking successfully.Now,you can see your booking in MyBooking page')
                }
                console.log(result)
            })

        // console.log(data);
    }
    return (
        <div className="detail container-fluid purchase">
            <div className="row">
                <div className='col-lg-6 col-md-6 col-12'>
                    <h4 className='pb-3'><span className='text-success fs-1'>{service?.name}</span></h4>
                    <img className='rounded img-fluid h-50' src={service?.img} alt="" />
                    <p className='text-primary pt-3'>{service?.discription}</p>
                    <h3 className='text-secondary'>Total-Cost:{service?.price}$</h3>
                </div>
                <div className='col-lg-6 col-md-6 col-12 booking pt-2'>
                    <h1 className='text-secondary '>~~Booking now~~</h1>
                    <form className='booking-form' onSubmit={handleSubmit(onSubmit)}>
                        <span>Place-Name: </span>  <input {...register("name", { required: true })} defaultValue={service?.name} className='pr-5 py-1  my-1 width-100' /><br />
                        <span>Total-Cost($): </span><input {...register("price", { required: true })} defaultValue={service?.price} className='pr-5 py-1 my-1 cost   width-100' /> <br />
                        <span>Image url/link: <input {...register("image", { required: true })} defaultValue={service?.img} className='pr-5 py-1 my-1 img-link  width-100' /></span> <br />
                        <span>Your adress: <input {...register("adress")} placeholder='Type your adress' className='pr-5 py-3 my-1 adress width-100' /></span> <br />
                        <span>Booking date:<input {...register("date", { required: true })} type='date' className='px-2 py-1 my-1 date  width-100' /></span><br />
                        <button className='mt-3 btn btn-warning fs-5  btn-book' type="submit"> Book now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;