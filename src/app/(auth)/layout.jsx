import Navbar from '@/components/shared/Navbar';
import React from 'react';
import {montserrat } from "next/font/google";

const Authlayout = ({children}) => {
    return (
     <div className={`${montserrat.className}`}>
     <Navbar></Navbar>
     {children}
     </div>
    );
};

export default Authlayout;