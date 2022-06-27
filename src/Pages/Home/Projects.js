import React, { useRef } from 'react';
import reactLogo from '../../images/ProjectReactLogo.svg';
import bootstrapLogo from '../../images/ProjectbootstrapLogo.svg';
import MongoLogo from '../../images/ProjectmongoDbLogo.svg';
import expressLogo from '../../images/ProjectexpressLogo.svg';
import firebaseLogo from '../../images/ProjectfirebaseLogo.svg';
import TailwindLogo from '../../images/ProjecttailWindLogo.svg';
import project1Img from '../../images/portfolioD1.svg';
import project2Img from '../../images/portfolioD2.svg';
import project3Img from '../../images/portfolioD3.svg';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';


const Projects = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section className="projectSec" id='project'>
            <div className="container mx-auto">
                <div className="projectSecInner">
                    <div className="Ainfo flex mb-8 justify-between items-center" data-aos="fade-up">
                        <div className="sectionHeader">
                            <i className='bx bxs-bookmarks globalIcn mb-3' ></i>
                            <h1 className="text-4xl mb-2">Featured Projects
                                <i className='bx bxl-codepen codeIcn'></i>
                            </h1>
                        </div>
                        <div className="navigations flex">
                            <div className='btn' ref={prevRef}><i className='bx bx-left-arrow-alt globalIcn -m-3' ></i></div>
                            <div className='btn' ref={nextRef}><i className='bx bx-right-arrow-alt globalIcn -m-3'></i></div>
                        </div>
                    </div>
                    <Swiper
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        navigation={true} modules={[Navigation]} className="mySwiper"
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        <SwiperSlide>
                            {/* project 1 */}
                            <div style={{ backgroundImage: `linear-gradient(to bottom, #312e4397 5%, #312e4325),url(${project1Img})` }} className="projectInner p-4 lg:py-7 lg:px-11 shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <div className="info">
                                        <h1 className="text-2xl">Andro's Car</h1>
                                        <p>Andro-cars is a car parts manufacturing website,<br></br>From this website Users can order car parts as their needs.
                                            <a className="text-white after:content-['_↗'] ..." href="https://github.com/akib0079/andro-s-cars-frontend" target="blank">View on Github</a>
                                        </p>
                                        <div className="technologies mt-4">
                                            <div className="avatar-group -space-x-4">
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={reactLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={bootstrapLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={firebaseLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={MongoLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={expressLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="links">
                                        <button className='LinkBtn shadow-xl mt-3'> <a target={'blank'} href='https://andro-cars.netlify.app/'>
                                            <i className='bx bx-link-alt' ></i>
                                        </a></button>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* project 2 */}
                            <div style={{ backgroundImage: `linear-gradient(to bottom, #312e4397 5%, #312e4325),url(${project2Img})` }} className="projectInner p-4 lg:py-7 lg:px-11 shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <div className="info">
                                        <h1 className="text-2xl">My-Booky</h1>
                                        <p>My-Booky is a ware-house management website for <br></br>various books.User will be able to maintain books stocks or add new books.
                                            <a className="text-white after:content-['_↗'] ..." href="https://github.com/akib0079/booky-front-end" target="blank">View on Github</a>
                                        </p>
                                        <div className="technologies mt-4">
                                            <div className="avatar-group -space-x-4">
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={reactLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={TailwindLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={firebaseLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={MongoLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={expressLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="links">
                                        <button className='LinkBtn shadow-xl mt-3'> <a target={'blank'} href='https://my-booky.netlify.app/'>
                                            <i className='bx bx-link-alt' ></i>
                                        </a></button>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* project 3 */}
                            <div style={{ backgroundImage: `linear-gradient(to bottom, #312e4397 5%, #312e4325),url(${project3Img})` }} className="projectInner p-4 lg:py-7 lg:px-11 shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <div className="info">
                                        <h1 className="text-2xl">Travel Mania</h1>
                                        <p>Travel Mania is a Travel booking website for<br></br> Travel agencies.Verified Logged In Users can book a package from the
                                            website.
                                            <a className="text-white after:content-['_↗'] ..." href="https://github.com/akib0079/travel-manias" target="blank">View on Github</a>
                                        </p>
                                        <div className="technologies mt-4">
                                            <div className="avatar-group -space-x-4">
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={reactLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={bootstrapLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                                <div className="avatar">
                                                    <div className="w-12">
                                                        <img src={firebaseLogo} alt="reactlogo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="links">
                                        <button className='LinkBtn shadow-xl mt-3'> <a target={'blank'} href='https://travelmanias.netlify.app/'>
                                            <i className='bx bx-link-alt' ></i>
                                        </a></button>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                </div>
            </div>
        </section>
    );
};

export default Projects;