import React from 'react';
import './Home.css';
import mainImg from '../../images/main image.webp'
import reactIcn from '../../images/react-icn.svg';
import nodeIcn from '../../images/node-icn.svg';
import jsIcn from '../../images/js-icn.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="hero container mx-auto p-5 lg:p-0">
            <div className="sectionInner grid lg:grid-cols-2 items-center gap-4">
                <div className="info">
                    <p className='badge'>FullStack Web developer : Akib0079</p>
                    <h1 className="md:text-5xl">It's not a bug. It's an undocumented feature
                        <i class='bx bx-code-curly codeIcn' ></i></h1>
                    <p className="py-6">Hello, this is Akib Zawayed. A Designer, A Developer, and A Wordpress-Expert. Trying to make the Web better and more innovative in my own way.</p>
                    <Link to={'/about'}><button className="btn btn-secondary">Get Started</button></Link>
                </div>
                <div className="imgSec" data-aos="fade-left" >
                    <img className='w-4/5 mx-auto' src={mainImg} alt="" />
                    <img className='icnReact' src={reactIcn} alt="" />
                    <img className='icnNode' src={nodeIcn} alt="" />
                    <img className='icnJs' src={jsIcn} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;