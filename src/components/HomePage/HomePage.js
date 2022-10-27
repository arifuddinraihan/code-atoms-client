import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 pt-0 xl:py-16">
                <div className="container px-6 mx-auto">
                    <div className="items-center flex flex-col lg:flex-row-reverse">
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Player src={'https://assets2.lottiefiles.com/packages/lf20_es4p9zph.json'}
                                className="player w-full h-full lg:max-w-2xl"
                                loop
                                autoplay></Player>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                                    The Best Online Learning Site and Education Courses for Skill Development
                                </h1>

                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    Here are the best online learning courses, offering a paid classes, courses, training, certificates, and much more...</p>

                                <Link to={'/category'}
                                    className='flex justify-between items-center gap-2 btn btn-sm md:btn-md 
                                btn-success hover:bg-slate-200 dark:text-gray-800 mt-3'>
                                    See the Courses <FaArrowRight></FaArrowRight></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-white dark:bg-gray-900'>
                <div className="max-w-lg px-6 mx-auto py-20 xl:py-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                        Build your skills with our Awesome Course Library
                    </h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300">
                        We have the best Teachers and Instructors from all over the world. To make you develop your skills from scratch. 
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-900 pt-0 xl:pt-16 py-6">
                    <div className="container px-6 mx-auto">
                        <div className="items-center flex flex-col lg:flex-row">
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-3/5">
                                <Player src={'https://assets4.lottiefiles.com/packages/lf20_1jibotah.json'}
                                    className="player w-full h-full lg:max-w-2xl"
                                    loop
                                    autoplay></Player>
                            </div>
                            <div className="w-full lg:w-2/5">
                                <div className="lg:max-w-lg text-start md:text-center lg:text-start">
                                    <h2 className='hidden lg:block text-3xl font-bold text-gray-800 dark:text-white'>
                                        So! Are You Ready?
                                    </h2>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        Here from now, We promise you to make a well skilled professional. You just need to complete the daily course videos and practice regularly. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1608600712992-03e5325d94c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Work Hard</h1>
                        <p className="mb-5">Winners embrace hard work. They love the discipline of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that's the difference.</p>
                        <Link to={'/blog'}><button className="btn btn-success">Go to BLog</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;