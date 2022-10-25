import React from 'react';
import CategoryWiseCourse from './CategoryWiseCourse';
import CourseCategory from './CourseCategory';

const AllCourses = () => {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                    <CourseCategory></CourseCategory>
                </div>
                <div className='col-span-3'>
                    <CategoryWiseCourse></CategoryWiseCourse>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;