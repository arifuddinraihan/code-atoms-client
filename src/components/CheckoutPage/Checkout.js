import React from 'react';
import { toast } from 'react-toastify';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Checkout = () => {
    // Course Id wise check-out routing via private route
    const { category, image, title, price } = useLoaderData()
    const categoryRoute = '/category'
    const navigate = useNavigate()
    // Add to cart 
    const addedToCart = () => {
        toast.success('Our team will contact you soon.', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigate(categoryRoute, { replace: true })
    }


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

                    <button onClick={addedToCart}
                        className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;