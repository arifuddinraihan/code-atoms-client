import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { AuthContext } from '../../../context/AuthProvider';
import CourseCategory from '../../Courses/CourseCategory';

const Navbar = () => {

    // Dark mode Theme 
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

    // Auth Context Used here
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-success transition-colors duration-300 transform dark:bg-white dark:hover:bg-gray-800 dark:hover:text-white shadow-xl sticky top-0 z-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52 gap-2">
                        <li><NavLink to={'/category'} className={({ isActive }) => isActive ? 'bg-success dark:bg-success dark-text-white font-bold' : undefined}>Courses</NavLink></li>
                        <li><NavLink to={'/faq'} className={({ isActive }) => isActive ? 'bg-success dark:bg-success dark-text-white font-bold' : undefined}>FAQ</NavLink></li>
                        <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? 'bg-success dark:bg-success dark-text-white font-bold' : undefined}>Blog</NavLink></li>
                        <CourseCategory className='block lg:hidden text-start'></CourseCategory>
                    </ul>
                </div>
                <div
                    className="ml-3 transition-colors duration-300 transform text-gray-800 hover:text-white dark:text-success dark:hover:text-white">
                    <div className='flex text-xs items-center gap-2'>
                        <img className='hidden md:block flex-shrink: 1' src="code-atom-icon.svg" style={{ width: "10%", height: "10%" }}></img>
                        <Link to={'/'} className='text-sm md:text-xl lg:text-3xl font-bold justify-self-stretch'>
                            <p>Code Atoms</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    <li><NavLink to={'/category'} className={({ isActive }) => isActive ? 'bg-white dark:bg-success font-bold' : undefined}>Courses</NavLink></li>
                    <li><NavLink to={'/faq'} className={({ isActive }) => isActive ? 'bg-white dark:bg-success font-bold' : undefined}>FAQ</NavLink></li>
                    <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? 'bg-white dark:bg-success font-bold' : undefined}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost rounded-3xl" onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-gray-600 dark:text-slate-300">
                        <>
                            {
                                user ?
                                    <>
                                        <li><span>{user?.displayName}</span></li>
                                        <li><button className="btn btn-sm btn-ghost" onClick={handleLogOut}>Log out</button></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/register'>Register</Link></li>
                                    </>
                            }
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;