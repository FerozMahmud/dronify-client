import React from 'react';
import Banner from './Banner';
import Services from './Services'
import './Home.css'
import ChoosingUs from './ChoosingUs';
import Review from './Review';

const Home = () => {
    return (
        <div className='home'>
            {/*---------- Banner Part -----------*/}
            <Banner></Banner>

            {/*---------- Services Part ----------*/}
            <Services></Services>


            <ChoosingUs></ChoosingUs>


            <Review></Review>
        </div>
    );
};

export default Home;