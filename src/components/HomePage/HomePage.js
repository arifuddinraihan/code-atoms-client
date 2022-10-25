import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div class="min-h-screen bg-white dark:bg-gray-900">
            <div class="container px-6 mx-auto">
                <div class="items-center flex flex-col lg:flex-row-reverse">
                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Player src={'https://assets2.lottiefiles.com/packages/lf20_es4p9zph.json'}
                            className="player w-full h-full lg:max-w-2xl"
                            loop
                            autoplay></Player>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>

                            <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                            <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomePage;