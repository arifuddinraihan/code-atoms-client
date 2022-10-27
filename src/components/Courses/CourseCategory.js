import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CourseCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://as10-code-atoms-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='text-start'>
            <h2 className='hidden lg:block text-md text-cyan-600 font-bold mb-4 text-center'>Categories: {categories.length}</h2>
            <div className='grid grid-cols-1 lg:pl-4 '>
                {
                    categories.map(perCategory =>
                        <p
                            className="mb-3 dark:text-white"
                            key={perCategory.id} >

                            <NavLink 
                            to={`/category/${perCategory.id}`}
                            className={({ isActive }) => 
                            isActive 
                            ? 
                            'bg-success dark:bg-success px-4 py-2 rounded-xl shadow-lg dark:text-gray-800 font-semibold' : undefined}
                            >
                                {perCategory.name}
                            </NavLink>

                        </p>)
                }
            </div>
        </div>
    );
};

export default CourseCategory;