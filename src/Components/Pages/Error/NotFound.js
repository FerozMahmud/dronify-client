import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='pb-3'>
            <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" alt="" />
            <br />
            <Link to="/"><button type="button" className="btn btn-dark px-5 mt-2">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;