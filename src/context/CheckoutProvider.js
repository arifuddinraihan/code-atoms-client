import React, { createContext, useState } from 'react';

export const CheckoutContext = createContext()

const CheckoutProvider = ({children}) => {

    const [ courseId ,  setCourseId] = useState("")

    const checkoutHanddle = (event) => {
        setCourseId(event)
    }

    const value = {
        checkoutHanddle,
        courseId
    }
    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
        
    );
};

export default CheckoutProvider;