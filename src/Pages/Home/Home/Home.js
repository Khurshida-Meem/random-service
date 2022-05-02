import React from 'react';
import About from '../About/About';
import Articles from '../Articles/Articles';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Articles />
            <Awards />
        </>
    );
};

export default Home;