import React, { useState } from 'react';
import './Home.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

const Home = () => {

    return (
        <div className="homePage">
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;