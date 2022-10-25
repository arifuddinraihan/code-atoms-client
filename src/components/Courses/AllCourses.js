import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryWiseCourse from './CategoryWiseCourse';
import CourseCategory from './CourseCategory';

const AllCourses = () => {
    const category = useLoaderData() 
    return (
        <div className='bg-white dark:bg-gray-800 py-3 md:py-5 lg:py-8'>
            <div className='grid grid-cols-5 container mx-auto'>
                <div className='col-span-1'>
                    <CourseCategory category={category}></CourseCategory>
                </div>
                <div className='col-span-3'>
                    <CategoryWiseCourse></CategoryWiseCourse>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;