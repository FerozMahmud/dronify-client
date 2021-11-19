import React, { useState, useEffect } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((result) => setReviews(result));
    }, []);
    return (
        <div className='container pt-5'>
            <div className='top-reviews p-2'>
                <h2>Client's Feedback</h2>
                <p>Our Happy Client Says</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 pb-5 px-5 g-4">
                {
                    reviews.map(reviews =>
                        <div className="col">
                            <div className="card h-100 bg-light p-2">
                                <div>
                                    <img src="https://i.ibb.co/42VgMRp/profile-icon.png" width="70px" className="pt-2" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">{reviews.name}</h6>
                                </div>
                                <div className="p-2">
                                    <p className="card-text">{reviews.review}</p>
                                    <h6 className="card-text">Rating: {reviews.rating}/5</h6>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Review;