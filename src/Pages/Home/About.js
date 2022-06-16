import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import figmaLogo from '../../images/figmaLogo.svg'
import htmlLogo from '../../images/htmlLogo.svg'
import wordpressLogo from '../../images/wordpressLogo.svg'
import jsLogo from '../../images/JSLogo.svg'
import reactLogo from '../../images/reactLogo.svg'
import tailwindLogo from '../../images/tailwind-icn.svg'
import nodeLogo from '../../images/NodeLogo.svg'

const About = () => {

    const [flip] = useState(false)

    const { number: sNum2 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 70,
        delay: 400,
        config: config.molasses,
    });
    const { number: sNum3 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 90,
        delay: 400,
        config: config.molasses,
    });
    const { number: sNum4 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 85,
        delay: 400,
        config: config.molasses,
    });
    const { number: sNum5 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 73,
        delay: 400,
        config: config.molasses,
    });
    const { number: sNum6 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 85,
        delay: 400,
        config: config.molasses,
    });
    const { number: sNum7 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 90,
        delay: 400,
        config: config.molasses,
    });
    const { number: sNum8 } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        number: 70,
        delay: 400,
        config: config.molasses,
    });


    return (
        <section className='aboutSec'>
            <div className="aboutSecInner container mx-auto" data-aos="fade-up">
                <div className="sectionInner">
                    <div className="Ainfo">
                        <i class='bx bxs-notepad globalIcn mb-3' ></i>
                        <p className='italic mb-4'>Know about my skills</p>
                        <h1 className="text-4xl mb-2">My Current SkillSets
                            <i class='bx bx-edit-alt codeIcn' ></i>
                        </h1>
                        <p className='mt-4'>I have been working as a full-time Fullstack developer & freelancer, over 2 years. Besides that<br></br> I am trying to improve and add new skills to my arsenal & moving towards my dream as a developer.
                            <a className="text-secondary after:content-['_↗'] ..." href="https://www.fiverr.com/akib0079" target="blank"> Visit Fiverr</a>
                        </p>
                    </div>
                    <div className="skillSec grid lg:grid-cols-7 grid-cols-2 gap-9 mt-12 animate__animated animate__fadeIn animate__delay-1s">
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo w-11' src={figmaLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum2.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>Figma</p>
                        </div>
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo w-16' src={htmlLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum3.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>HTML5</p>
                        </div>
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo tailwind w-20' src={tailwindLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum7.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>Tailwind CSS</p>
                        </div>
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo w-16' src={wordpressLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum4.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>Wordpress</p>
                        </div>
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo w-16' src={jsLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum5.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>Javascript</p>
                        </div>
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo w-20' src={reactLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum6.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>React</p>
                        </div>
                        <div className="skillInner">
                            <div className="skill flex-col flex justify-center">
                                <img className='SkillLogo pt-3 w-24' src={nodeLogo} alt="" />
                                <p className='mt-5 flex'><animated.div>{sNum8.to(n => n.toFixed(0))}</animated.div>%</p>
                            </div>
                            <p className='text-center mt-4'>Node Express</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;