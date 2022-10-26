import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CategoryWiseCourse = () => {
    const catWiseCourse = useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>

            {
                catWiseCourse.map(singleCourse => <Course></Course>)
            }
            
        </div>
    );
};

export default CategoryWiseCourse;