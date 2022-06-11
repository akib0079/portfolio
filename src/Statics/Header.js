import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-base-100 container mx-auto py-7 z-40">
                <div className="flex-1">
                    <Link to={'/home'}>
                        <img className="w-4/5" src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a target={'blank'} href='https://github.com/akib0079'>
                            <i class='icn bx bxl-github'></i>
                            <p className='hidden sm:block'>Github</p>
                        </a></li>
                        <li><a target={'blank'} href='https://www.linkedin.com/in/akib0079/'>
                            <i class='icn bx bxl-linkedin'></i>
                            <p className='hidden sm:block'>LinkedIn</p>
                        </a></li>
                        <li className='ml-4 menuIcn'>
                            <label for="my-drawer" class="swap swap-rotate w-full">
                                <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                <p className='w-full ml-10'>Menu</p>
                            </label>

                        </li>
                    </ul>
                </div>
            </nav>

            <div class="drawer drawer-end">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu lite p-4 overflow-y-auto w-80">
                        <li>
                            <Link to={'/home'}>
                                <i class='bx bxs-home m-0' ></i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/about'}>
                                <i class='bx bxs-pen' ></i>
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/projects'}>
                                <i class='bx bx-code-curly' ></i>
                                <p>Recent Projects</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/home'}>
                                <i class='bx bxl-blogger' ></i>
                                <p>Blogs</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;