import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CategoryWiseCourse from './CategoryWiseCourse';
import CourseCategory from './CourseCategory';

const AllCourses = () => {
    const category = useLoaderData()
    return (
        <div className='bg-white dark:bg-gray-800 py-3 md:py-5 lg:py-8'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='hidden lg:block flex-none'>
                        <CourseCategory category={category}></CourseCategory>
                    </div>
                    <div className='flex-initial'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;