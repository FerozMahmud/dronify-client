import React, { useState } from 'react';
import './AddReview.css'

const AddReview = () => {
    const [name, setName] = useState();
    const [review, setReview] = useState();
    const [rating, setRating] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value)
    };
    const handleReviewChange = (e) => {
        setReview(e.target.value)
    };
    const handleRatinghange = (e) => {
        setRating(e.target.value)
    };


    const handleAddReview = () => {
        const data = { name, review, rating };

        fetch("http://localhost:5000/addReview", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((res) => res.json)
            .then((result) => console.log(result))
    };

    return (
        <div>
            {/* <Dashboard></Dashboard> */}
            <div className='add-review'>
                <h2 className='text-dark'>Please add a product</h2>
                <form>
                    <input onChange={handleNameChange} placeholder='Enter your name' />
                    <textarea onChange={handleReviewChange} placeholder='Enter your feedback' />
                    <input onChange={handleRatinghange} placeholder='Enter a rating number out of 5' />
                    <button onClick={handleAddReview} className='submit-btn btn btn-success' Enter="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;