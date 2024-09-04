import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export default function Header() {
    return (
        <header className="bg-forestGreen shadow sticky z-50 top-0">
            <nav className="border-b-2 border-leafGreen px-4 lg:px-6 py-2 h-26">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-20 bg-transparent"
                            alt="Logo"
                        />
                    </Link>
                    
                    {/* Login and Get Started Buttons */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-ivoryWhite hover:text-leafGreen focus:ring-4 focus:ring-oceanTeal font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-sunsetOrange hover:bg-leafGreen focus:ring-4 focus:ring-sunsetOrange font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-sunsetOrange" : "text-ivoryWhite"
                                        } border-b border-gray-100 hover:bg-leafGreen lg:hover:bg-transparent lg:border-0 hover:text-sunsetOrange lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-sunsetOrange" : "text-ivoryWhite"
                                        } border-b border-gray-100 hover:bg-leafGreen lg:hover:bg-transparent lg:border-0 hover:text-sunsetOrange lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/EducationalContent"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-sunsetOrange" : "text-ivoryWhite"
                                        } border-b border-gray-100 hover:bg-leafGreen lg:hover:bg-transparent lg:border-0 hover:text-sunsetOrange lg:p-0`
                                    }
                                >
                                    Eco-learn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/testimonials"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-sunsetOrange" : "text-ivoryWhite"
                                        } border-b border-gray-100 hover:bg-leafGreen lg:hover:bg-transparent lg:border-0 hover:text-sunsetOrange lg:p-0`
                                    }
                                >
                                    Testimonials
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calc"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-sunsetOrange" : "text-ivoryWhite"
                                        } border-b border-gray-100 hover:bg-leafGreen lg:hover:bg-transparent lg:border-0 hover:text-sunsetOrange lg:p-0`
                                    }
                                >
                                    Carbon Footprint Calculator
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/weather"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-sunsetOrange" : "text-ivoryWhite"
                                        } border-b border-gray-100 hover:bg-leafGreen lg:hover:bg-transparent lg:border-0 hover:text-sunsetOrange lg:p-0`
                                    }
                                >
                                    Weather
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
