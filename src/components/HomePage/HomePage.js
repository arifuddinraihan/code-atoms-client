import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 pt-0 xl:py-16">
                <div className="container px-6 mx-auto">
                    <div className="items-center flex flex-col lg:flex-row-reverse">
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-3/5">
                            <Player src={'https://assets2.lottiefiles.com/packages/lf20_es4p9zph.json'}
                                className="player w-full h-full lg:max-w-2xl"
                                loop
                                autoplay></Player>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Best Place To Choose Your Clothes</h1>

                                <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                                <button className="w-full tracking-wider px-6 py-3 md:py-4 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-cyan-800 rounded-xl lg:w-auto hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-white dark:bg-gray-900'>
                <div className="max-w-lg mx-auto ">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Building Your Next App with our Awesome components</h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start 14-Day free trial
                    </button>
                    <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
                </div>
                <div className="bg-white dark:bg-gray-900 pt-0 xl:pt-16">
                    <div className="container px-6 mx-auto">
                        <div className="items-center flex flex-col lg:flex-row">
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-3/5">
                                <Player src={'https://assets4.lottiefiles.com/packages/lf20_1jibotah.json'}
                                    className="player w-full h-full lg:max-w-2xl"
                                    loop
                                    autoplay></Player>
                            </div>
                            <div className="w-full lg:w-2/5">
                                <div className="lg:max-w-lg">
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Best Place To Choose Your Clothes</h1>

                                    <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;