import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h2 className='font-bold mb-2'>Total Course : {categories.length}</h2>
            <div className='grid grid-cols-1 content-evenly text-center'>
                {
                    categories.map(perCategory =>
                        <p
                            className="mb-3"
                            key={perCategory.id} >

                            <Link to={`/category/${perCategory.id}`}>
                                {perCategory.name}
                            </Link>

                        </p>)
                }
            </div>
        </div>
    );
};

export default CourseCategory;