import React, { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutProvider';

const Checkout = () => {

    const { courseId } = useContext(CheckoutContext)
    const { id, category, description, image, title, rating, price } = courseId
    const { count, rate } = rating

    return (
        <div className='bg-white dark:bg-gray-800 flex flex-col justify-center'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 container mx-auto px-2 md:px-0 py-4 md:pt-20">
                <div className="px-4 py-2">
                    <h1 className="text-xl md:text-3xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p className="mt-1 text-sm text-indigo-400 dark:text-gray-400">{category}</p>
                </div>

                <img className="object-cover w-full h-48 mt-2 rounded-t-lg" src={image} alt={title} />

                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-lg font-bold text-white">${price}</h1>

                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                    </div>
            </div>
        </div>
    );
};

export default Checkout;