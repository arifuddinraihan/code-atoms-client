import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CategoryWiseCourse = () => {
    const catWiseCourse = useLoaderData()
    console.log(catWiseCourse)
    return (
        <div className='lg:pb-24'>
            <div className='grid grid-cols-1'>

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