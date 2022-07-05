import React from 'react';
import project1Img from '../../images/AndroCar.webp';
import reactLogo from '../../images/ProjectReactLogo.svg';
import bootstrapLogo from '../../images/ProjectbootstrapLogo.svg';
import MongoLogo from '../../images/ProjectmongoDbLogo.svg';
import expressLogo from '../../images/ProjectexpressLogo.svg';
import firebaseLogo from '../../images/ProjectfirebaseLogo.svg';
import TailwindLogo from '../../images/ProjecttailWindLogo.svg';

const project = (props) => {

    const { name, img, s_info, g_link, l_link, techs } = props.info;


    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, #312e4397 5%, #312e4325),url(${img})` }} className="projectInner p-4 lg:py-7 lg:px-11 shadow-2xl">
            <div className="flex justify-between items-center">
                <div className="info">
                    <h1 className="text-2xl">{name}</h1>
                    <p>{s_info}
                        <a className="text-white after:content-['_↗'] ..." href={g_link} target="blank">View on Github</a>
                    </p>
                    <div className="technologies mt-4">
                        <div className="avatar-group -space-x-4">
                            {
                                techs.map(tech => <div className="avatar">
                                    <div className="w-12">
                                        <img src={tech.img} alt="reactlogo" />
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="links">
                    <button className='LinkBtn shadow-xl mt-3'> <a target={'blank'} href={l_link}>
                        <i className='bx bx-link-alt' ></i>
                    </a></button>
                </div>

            </div>
        </div>
    );
};

export default project;