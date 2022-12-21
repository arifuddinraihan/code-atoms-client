import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SecondarySpinner from '../PrimarySpinner/SecondarySpinner';

const CourseCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://as10-code-atoms-server.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCategories(data)
                setLoading(false)
            });
    }, [])
    if(loading){
        return <SecondarySpinner></SecondarySpinner>
    }
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