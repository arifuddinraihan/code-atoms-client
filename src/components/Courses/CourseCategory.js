import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const CourseCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    console.log(categories)
    return (
        <div className='text-center'>
            <h2 className='hidden lg:block text-lg text-cyan-600 font-bold mb-4'>Total Course : {categories.length}</h2>
            <div className='grid grid-cols-1 content-evenly'>
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
                            'text-start bg-success dark:bg-success px-4 py-2 rounded-xl shadow-lg dark:text-gray-800 font-semibold' : undefined}
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