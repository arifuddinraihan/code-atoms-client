import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CategoryWiseCourse = () => {
    const catWiseCourse = useLoaderData()
    return (
        <div className='lg:pb-24 px-2 md:px-4'>
            <h2 className='text-md text-slate-800 dark:text-slate-200 font-bold mb-4 text-start ml-4'>Course Found : {catWiseCourse.length}</h2>
            <div className='grid grid-cols-1 gap-2 lg:gap-4'>

                {
                    catWiseCourse.map(singleCourse => <Course
                        key={singleCourse.id}
                        singleCourse={singleCourse}
                    ></Course>)
                }

            </div>
        </div>
    );
};

export default CategoryWiseCourse;