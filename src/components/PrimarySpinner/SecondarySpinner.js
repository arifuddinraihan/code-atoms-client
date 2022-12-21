import React from 'react';
import SkewLoader from "react-spinners/SkewLoader";

const SecondarySpinner = () => {
    return (
        <div className='flex justify-center content-center dark:bg-slate-900'>
            <SkewLoader
                color="#36d7b7"
                size={10}
            />
        </div>
    );
};

export default SecondarySpinner;