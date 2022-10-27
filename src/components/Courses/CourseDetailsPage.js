import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetailsPage = () => {
    const course = useLoaderData()
    console.log(course)
    const { id, category, description, image, title, rating } = course
    const { count, rate } = rating
    return (
        <div className=' bg-white dark:bg-gray-800'>
            <div className="max-w-2xl overflow-hidden container mx-auto md:py-5 lg:py-10">
                <img className="object-contain w-full h-auto md:rounded-lg shadow-xl"
                    src={image} alt={title} />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                        <h2 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{title}</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-700 dark:text-gray-200">
                                <FaStar></FaStar>
                                <p className="mx-2 font-semibold">{rate}</p>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Reviews : {count}</span>
                        </div>
                    </div>
                    <button className='flex justify-between items-center gap-2 btn btn-sm md:btn-md 
                    btn-success hover:bg-slate-200 dark:text-gray-800 mt-3'>
                        Get Access Now <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;