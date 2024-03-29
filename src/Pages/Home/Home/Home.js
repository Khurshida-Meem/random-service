import React from 'react';
import About from '../About/About';
import Articles from '../Articles/Articles';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Discover from '../Discover/Discover';
import Progress from '../Progress/Progress';
import Reviews from '../Reviews/Reviews';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <WhoWeAre />
            <Progress />
            <Articles />
            <Awards />
            <Discover />
            <Reviews />
        </>
    );
};

export default Home;