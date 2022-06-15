import React, { useState } from 'react';
import './Home.css';
import Hero from './Hero';
import About from './About';

const Home = () => {

    return (
        <div className="homePage">
            <Hero></Hero>
            <About></About>
        </div>
    );
};

export default Home;