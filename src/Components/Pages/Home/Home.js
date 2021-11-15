import React from 'react';
import Banner from './Banner';
import Services from './Services'
import './Home.css'
import ChoosingUs from './ChoosingUs';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            {/*---------- Banner Part -----------*/}
            <Banner></Banner>

            {/*---------- Services Part ----------*/}
            <Services></Services>
            <NavLink className="btn btn-dark" to="/products">Explore All Products</NavLink>


            <ChoosingUs></ChoosingUs>
        </div>
    );
};

export default Home;