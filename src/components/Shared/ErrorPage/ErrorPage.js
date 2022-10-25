import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto flex flex-col justify-center'>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content flex-col lg:flex-row">
                    <Player src={'https://assets2.lottiefiles.com/packages/lf20_m6k6uhad.json'}
                        className="player"
                        loop
                        autoplay
                    ></Player>
                    <div className=''>
                        <h1 className="text-5xl font-bold mt-4 lg:mt-0 text-secondary hover:text-cyan-800">404</h1>
                        <p className="py-6">Sorry we couldn't find
                            <span className='px-2 text-cyan-600 text-2xl'>this page.</span></p>
                        <Link to={'/'} className=' flex gap-3'>
                            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-cyan-500 active:bg-cyan-900 hover:bg-cyan-400">back to homepage</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default ErrorPage