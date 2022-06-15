import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './header.css';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);



    let menu;

    if (showMenu) {
        menu = <ul className="menu lite p-4 overflow-y-auto animate__animated animate__slideInRight">
            <li>
                <Link to={'/home'}>
                    <i className='bx bxs-home m-0' ></i>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to={'/about'}>
                    <i className='bx bxs-pen' ></i>
                    <p>About</p>
                </Link>
            </li>
            <li>
                <Link to={'/projects'}>
                    <i className='bx bx-code-curly' ></i>
                    <p>Recent Projects</p>
                </Link>
            </li>
            <li>
                <Link to={'/home'}>
                    <i className='bx bxl-blogger' ></i>
                    <p>Blogs</p>
                </Link>
            </li>
        </ul>
    }


    return (
        <header>
            <nav className="navbar bg-base-100 container mx-auto py-3 z-40">
                <div className="flex-1">
                    <Link to={'/home'}>
                        <img className="logo" src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a target={'blank'} href='https://github.com/akib0079'>
                            <i className='icn bx bxl-github'></i>
                            <p className='hidden sm:block'>Github</p>
                        </a></li>
                        <li><a target={'blank'} href='https://www.linkedin.com/in/akib0079/'>
                            <i className='icn bx bxl-linkedin'></i>
                            <p className='hidden sm:block'>LinkedIn</p>
                        </a></li>
                        <li><a target={'blank'} href='https://drive.google.com/file/d/1fopxi84ITSOX1MuTDqEE13qm_iratkLq/view?usp=sharing'>
                            <i className='icn bx bx-download' ></i>
                            <p className='hidden sm:block'>Resume</p>
                        </a></li>
                        <li className='lg:ml-4 menuIcn'>
                            <label className="swap swap-rotate w-full">
                                <input onClick={() => setShowMenu(!showMenu)} type="checkbox" />
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                                <p className='md:ml-10 hidden sm:block'>Menu</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </nav>
            {menu}


            {/* sticky
            <ul className="menu sticky hidden 2xl:block bg-base-100 rounded-box">
                <li>
                    <Link to={'/home'} title={'Back to Home'}>
                        <i className='bx bxs-home m-0' ></i>
                    </Link>
                </li>
                <li>
                    <Link to={'/about'} title={'About me'}>
                        <i className='bx bxs-pen' ></i>
                    </Link>
                </li>
                <li>
                    <Link to={'/projects'} title={'Projects'}>
                        <i className='bx bx-code-curly' ></i>
                    </Link>
                </li>
                <li>
                    <Link to={'/blogs'} title={'visit blogs'}>
                        <i className='bx bxl-blogger' ></i>
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'} title={'contact me'}>
                        <i className='bx bxs-envelope'></i>
                    </Link>
                </li>
            </ul> */}

        </header>
    );
};

export default Header;