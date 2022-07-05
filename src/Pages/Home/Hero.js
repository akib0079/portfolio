import React, { useState } from 'react';
import mainImg from '../../images/main image2.webp'
import reactIcn from '../../images/react-icn.svg';
import nodeIcn from '../../images/node-icn.svg';
import jsIcn from '../../images/js-icn.svg';
import { useSpring, animated, config } from 'react-spring';
import './Home.css';
import '../../App.css'
import { Link } from 'react-router-dom';


const Hero = () => {

    const [flip] = useState(false)
    const { number } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 0 },
        number: 2,
        delay: 400,
        config: config.molasses,
    });

    const { number: sNum } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 70,
        delay: 400,
        config: config.molasses,
    });


    document.addEventListener('mousemove', (e) => {

        const allIcns = document.querySelectorAll('#icns');
        allIcns.forEach(icn => {
            const speed = icn.getAttribute('data-value');

            const x = (window.innerWidth - e.pageX * speed) / 70;
            const y = (window.innerWidth - e.pageY * speed) / 70;

            icn.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    });



    return (
        <section className="HeroSec" id='hero'>
            <div className="hero container mx-auto p-5 lg:p-0">
                <div className="sectionInner grid lg:grid-cols-2 items-center gap-4">
                    <div className="info">
                        <div className="animation" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
                            <p className='badge '>FullStack Web developer : Akib0079</p>
                            <h1 className="md:text-5xl content">Hello World(<i className='bx bx-code-alt codeIcn2' ></i>),<br></br>
                            </h1>
                        </div>
                        <p className="py-6 infos" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">This is Akib Zawayed. A Designer, A Developer and A Wordpress-Expert. Trying to make the Web better and more innovative in my own way. Welcome to my fascinating world.
                        </p>
                        <Link to={'/contact'} data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
                            <button className="mainBtn mt-2 mb-9"><p className='lineHvr'>Lets Chat!</p> <i className='bx bxs-conversation' ></i></button>
                        </Link>
                        {/* counters */}
                        <div className="p-6 counters justify-center lg:justify-start mt-10 shadow-2xl items-center flex-col md:flex-row hidden lg:flex " data-aos="flip-up" data-aos-delay="300" data-aos-duration="1200">
                            <div className="counter flex items-center">
                                <h3 className='flex'>0<animated.div>{number.to(n => n.toFixed(0))}</animated.div>+</h3>
                                <p>Years of<br></br> Experience.</p>
                            </div>
                            <div className="divider divider-horizontal flex"></div>
                            <div className="counter flex items-center">
                                <h3 className='flex'><animated.div>{sNum.to(n => n.toFixed(0))}</animated.div></h3>
                                <p>Projects Completed<br></br> On 15 countries</p>
                            </div>
                        </div>

                    </div>
                    <div className="imgSec" data-aos="fade-up" data-aos-delay="300">
                        <img className='w-4/5 mx-auto' src={mainImg} alt="" />
                        <img className='icnReact' src={reactIcn} alt="" />
                        <img className='icnNode' src={nodeIcn} alt="" />
                        <img className='icnJs' src={jsIcn} alt="" />
                        <div id='icns' className="icn1" data-value={1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#F2AF02" />
                            </svg>
                        </div>
                        <div id='icns' className="icn2" data-value={-1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#34AE71" />
                            </svg>
                        </div>
                        <div id='icns' className="icn4" data-value={1.5}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#1ABBFD" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;