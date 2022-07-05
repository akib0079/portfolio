import React, { useRef } from 'react';
import reactLogo from '../../images/ProjectReactLogo.svg';
import bootstrapLogo from '../../images/ProjectbootstrapLogo.svg';
import MongoLogo from '../../images/ProjectmongoDbLogo.svg';
import expressLogo from '../../images/ProjectexpressLogo.svg';
import firebaseLogo from '../../images/ProjectfirebaseLogo.svg';
import TailwindLogo from '../../images/ProjecttailWindLogo.svg';
import project1Img from '../../images/AndroCar.webp';
import project2Img from '../../images/my-booky.webp';
import project3Img from '../../images/travel-mania.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { useState } from 'react';
import { useQuery } from 'react-query'
import Project from './project';


const Projects = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [projects, setProjects] = useState([]);

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    )

    console.log(projects);
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
                        data-aos="fade-up"
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {
                            projects.map(project => <SwiperSlide key={project.id}>
                                <Project key={project.id} info={project}></Project>
                            </SwiperSlide>)
                        }
                    </Swiper>


                </div>
            </div>
        </section>
    );
};

export default Projects;