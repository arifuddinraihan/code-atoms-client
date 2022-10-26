import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CategoryWiseCourse = () => {
    const catWiseCourse = useLoaderData()
    console.log(catWiseCourse)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>

            {
                catWiseCourse.map(singleCourse => <Course 
                    key={singleCourse.id}
                    singleCourse={singleCourse}
                ></Course>)
            }
            
        </div>
    );
};

export default CategoryWiseCourse;