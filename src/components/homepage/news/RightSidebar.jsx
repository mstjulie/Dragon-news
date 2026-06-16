import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl">Login with</h2>

            <div className='flex flex-col gap-3 mt-6'>
            <button className='btn border-bule-500 text-blue-500'>
                <FaGoogle /> Login with google
            </button>
            <button className='btn'>
                <FaGithub /> Login with github
            </button>
            </div>

        </div>
    );
};

export default RightSidebar;