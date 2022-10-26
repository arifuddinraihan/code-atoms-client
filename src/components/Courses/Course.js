import React from 'react';
import { FaStar } from 'react-icons/fa';

const Course = ({ singleCourse }) => {
    const { category, description, image, title, rating } = singleCourse
    const { count, rate } = rating
    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-contain w-full h-64" 
            src={image} alt={title} />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                    <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title ? title.slice(0, 60)+"..." : "N/A"}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {description ? description.slice(0, 100)+"..." : "N/A"}
                    </p>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FaStar></FaStar>
                            <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{rate}</a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Reviews : {count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;