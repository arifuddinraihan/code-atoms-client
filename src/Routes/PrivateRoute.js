import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const location = useLocation()

    if(loading) {
        return (
            <button type="button" className="bg-cyan-400 dark:bg-slate-200" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
            </button>
        )
    }

    if (user === null) {
           return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
        }
    return children
};

export default PrivateRoute;