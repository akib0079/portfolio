import React, { useState } from 'react';
import './Home.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {

    return (
        <div className="homePage">
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;