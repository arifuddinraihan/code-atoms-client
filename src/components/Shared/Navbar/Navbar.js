import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div className="navbar bg-success">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        <li><NavLink to={'/courses'} className={({ isActive }) => isActive ? 'bg-success font-bold' : undefined}>Courses</NavLink></li>
                        <li><NavLink to={'/faq'} className={({ isActive }) => isActive ? 'bg-success font-bold' : undefined}>FAQ</NavLink></li>
                        <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? 'bg-success font-bold' : undefined}>Blog</NavLink></li>
                    </ul>
                </div>
                <Link to={'/'}
                    className="btn btn-ghost normal-case text-lg md:text-xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                    Code Atoms</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    <li><NavLink to={'/courses'} className={({ isActive }) => isActive ? 'bg-white font-bold' : undefined}>Courses</NavLink></li>
                    <li><NavLink to={'/faq'} className={({ isActive }) => isActive ? 'bg-white font-bold' : undefined}>FAQ</NavLink></li>
                    <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? 'bg-white font-bold' : undefined}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;