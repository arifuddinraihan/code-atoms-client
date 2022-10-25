import React from 'react';

const CourseCategory = ({ category }) => {
    console.log(category)
    return (
        <div className='text-center'>
            <h2>This is all courses sidebar</h2>
            <div className='grid grid-cols-1 content-evenly'>
                {
                    category.map(perCategory =>
                        <button
                            key={perCategory.id}
                            className="btn btn-ghost text-center mb-3"
                        >
                            {perCategory.name}
                        </button>)
                }
            </div>
        </div>
    );
};

export default CourseCategory;