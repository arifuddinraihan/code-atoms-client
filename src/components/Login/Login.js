import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa"
const Login = () => {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <div className="pt-4 xl:pt-48 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <Player 
                    src={'https://assets4.lottiefiles.com/packages/lf20_KvK0ZJBQzu.json'} 
                    className="player" loop autoplay></Player>
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                        Brand
                    </h2>

                    <p className="text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <button 
                    className="w-full flex items-center justify-center mt-4 bg-slate-200 text-gray-600 transition-colors duration-300 transform hover:text-white border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-emerald-400 dark:hover:bg-gray-600 dark:bg-slate-800">
                        <div className="px-4 py-2">
                            <FaGoogle></FaGoogle>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </button>
                    <button className="w-full flex items-center justify-center mt-4 bg-slate-200 text-gray-600 transition-colors duration-300 transform hover:text-white border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-slate-500 dark:hover:bg-gray-600 dark:bg-slate-800">
                        <div className="px-4 py-2">
                            <FaGithub></FaGithub>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with GitHub</span>
                    </button>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                            with email</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                        <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>

                        <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    </div>

                    <div className="mt-8">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Login
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;