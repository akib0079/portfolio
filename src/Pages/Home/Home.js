import React from 'react';
import './Home.css';
import mainImg from '../../images/main image.png'

const Home = () => {
    return (
        <section className="hero container mx-auto p-5 lg:p-0">
            <div className="sectionInner grid lg:grid-cols-2 items-center">
                <div className="info">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
                <div className="img">
                    <img className='w-4/5 mx-auto' src={mainImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;