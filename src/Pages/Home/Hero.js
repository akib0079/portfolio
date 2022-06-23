import React, { useState } from 'react';
import mainImg from '../../images/main image2.webp'
import reactIcn from '../../images/react-icn.svg';
import nodeIcn from '../../images/node-icn.svg';
import jsIcn from '../../images/js-icn.svg';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';


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

    return (
        <section className="HeroSec" id='hero'>
            <div className="hero container mx-auto p-5 lg:p-0">
                <div className="sectionInner grid md:grid-cols-2 items-center gap-4">
                    <div className="info">
                        <p className='badge'>FullStack Web developer : Akib0079</p>
                        <h1 className="md:text-5xl">It's not a bug. It's an undocumented feature
                            <i className='bx bx-code-curly codeIcn' ></i></h1>
                        <p className="py-6">Hello, this is Akib Zawayed. A Designer, A Developer, and A Wordpress-Expert. Trying to make the Web better and more innovative in my own way.
                        </p>
                        <button className="mainBtn mt-2 mb-9">Lets Chat! <i className='bx bxs-conversation' ></i></button>
                        {/* counters */}
                        <div className="flex p-6 counters justify-center lg:justify-start mt-10 shadow-2xl items-center flex-col md:flex-row" data-aos="flip-up" data-aos-delay="300" data-aos-duration="1200">
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
                    <div className="imgSec" data-aos="fade-left" data-aos-delay="300">
                        <img className='w-4/5 mx-auto' src={mainImg} alt="" />
                        <img className='icnReact' src={reactIcn} alt="" />
                        <img className='icnNode' src={nodeIcn} alt="" />
                        <img className='icnJs' src={jsIcn} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;