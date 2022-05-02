import React from 'react';
import About from '../About/About';
import Articles from '../Articles/Articles';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Discover from '../Discover/Discover';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Articles />
            <Awards />
            <Discover />
            <Reviews />
        </>
    );
};

export default Home;