import React, { useContext } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { CheckoutContext } from '../../context/CheckoutProvider';
import ReactToPdf from "react-to-pdf";

const CourseDetailsPage = () => {
    const course = useLoaderData()
    const { category, description, image, title, rating } = course
    const { count, rate } = rating

    const { checkoutHanddle } = useContext(CheckoutContext)

    const accessBtn = (course) => {
        return checkoutHanddle(course)
    }

    const ref = React.createRef();


    return (
        <div className=' bg-white dark:bg-gray-800'>
            <div className="max-w-2xl overflow-hidden container mx-auto md:py-5 lg:py-10">
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf} className='flex justify-between items-center gap-2 btn btn-sm md:btn-md 
                            btn-warning hover:bg-slate-200 dark:text-gray-800 mt-3 mb-2 md:mb-5 ml-2 md:ml-0'>
                            Generate Course PDF <FaArrowRight></FaArrowRight></button>
                    )}
                </ReactToPdf>
                <img className="object-contain w-full h-auto md:rounded-lg shadow-xl"
                    src={image} alt={title} />
                <div className="p-6">
                    <div ref={ref}>
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                            <h2 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{title}</h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {description}
                            </p>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center text-gray-700 dark:text-gray-200">
                                    <FaStar></FaStar>
                                    <p className="mx-2 font-semibold">{rate}</p>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Reviews : {count}</span>
                            </div>
                        </div>
                    </div>
                    <Link onClick={() => accessBtn(course)}
                        to={'/check-out'} className='flex justify-between items-center gap-2 btn btn-sm md:btn-md 
                        btn-success hover:bg-slate-200 dark:text-gray-800 mt-3'>
                        Get Access Now <FaArrowRight></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default CourseDetailsPage;