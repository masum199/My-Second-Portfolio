import React from 'react';
import Image from '../assets/my image.jpg'
import { HiOutlineHome } from "react-icons/hi2";
const Sidebar = () => {
    return (
        <div>
           <div className='relative'>
           <img src={Image}  className='' alt="" />
            <div className='bg-opacity-30 text-nowrap w-full bg-sky-400 absolute bottom-0 text-white font-bold text-center'>
                <h1 className='mytext'>ABDULLAH AL MASUM</h1>
            </div>
           </div>
           <div className=''>
            <p className='flex items-center'><HiOutlineHome/> HOME</p>
            <p>ABOUT ME</p>
            <p>RESUME</p>
            <p>PORTFOLIO</p>
            <p>BLOG</p>
            <p>CONTACT</p>
           </div>
        </div>
    );
};

export default Sidebar;