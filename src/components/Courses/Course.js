import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ singleCourse }) => {
    const { id, category, description, image, title, rating } = singleCourse
    const { count, rate } = rating

    return (
        <div className="card lg:card-side bg-base-100 dark:bg-gray-800 shadow-xl">
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body">
                <Link to={`/courses/${id}`}>
                    <h2 className="card-title text-gray-600 dark:text-white hover:underline hover:text-success">{title}</h2>
                </Link>
                <span className="text-sm font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                <p className='mt-2 text-md text-gray-600 dark:text-gray-400'>{description ? description.slice(0, 150) + '...' : "N/A"}</p>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-0 justify-between items-start md:items-center text-gray-600 dark:text-gray-400">
                    <div className='flex justify-evenly items-center gap-2 text-gray-700 dark:text-gray-200'>
                        <FaStar></FaStar> {rate}
                    </div>
                    <div>Reviews: {count}</div>
                    <Link to={`/courses/${id}`}>
                        <button
                            className="btn modal-button btn-success dark:text-gray-800">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;