import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import logo2 from '../../images/logo2.png'

const Footer = () => {

    return (
        <footer>
            <div className="footerTopInner flex flex-col md:flex-row gap-6 container mx-auto mb-10 justify-between">
                <div className="contactdiv footerInfo">
                    <h1 className="md:text-4xl">
                        Lets Develop Something Exclusive<br></br> For you in a Convenient way.
                        <i class='bx bx-message-square-dots codeIcn' ></i>
                    </h1>
                    <a target={'blank'} href="https://www.fiverr.com/akib0079"><button className="mainBtn mt-10 mb-9">Hire me <i className='bx bxs-conversation' ></i></button></a>
                </div>

                {/*  */}
                <div className="info footerInfo w-max">
                    <p className='mb-5'>Contact info.</p>
                    <p className='md:text-2xl'>Mirpur-2 Dhaka 1216</p>

                    <p className="md:text-3xl text-white mt-2 hover:underline">
                        <a target={'blank'} href="mailto:akibzawayed0079@gmail.com">akibzawayed0079@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="footerBtmInner footer items-center text-neutral-content container mx-auto">
                <div className="items-center grid-flow-col">
                    <img className='fLogo' src={logo2} alt="footer Logo" />
                    <i className='icn bx bxs-copyright' ></i>
                    <p className='text-white'>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end icns items-center">
                    <a target={'blank'} href="https://www.facebook.com/akibzawayed0079"><i class='bx bxl-facebook'></i></a>
                    <a target={'blank'} href="https://www.instagram.com/akib_zawayed/"><i class='bx bxl-instagram' ></i></a>
                    <a target={'blank'} href="https://github.com/akib0079"><i class='bx bxl-github' ></i></a>
                    <a href="mailto:akibzawayed0079@gmail.com"><i class='bx bxs-envelope' ></i></a>
                    <i onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} class='bx bxs-chevron-up-circle topIcn' title='Navigate to Top' ></i>
                </div>
            </div>
        </footer >
    );
};

export default Footer;