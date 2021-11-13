import React from 'react';
import Banner from './Banner';
import Services from './Services'
import './Home.css'
import ChoosingUs from './ChoosingUs';

const Home = () => {
    return (
        <div className='home'>
            {/*---------- Banner Part -----------*/}
            <Banner></Banner>

            {/*---------- Services Part ----------*/}
            <Services></Services>


            <ChoosingUs></ChoosingUs>
        </div>
    );
};

export default Home;