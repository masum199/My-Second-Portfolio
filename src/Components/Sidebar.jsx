import React from 'react';
import Image from '../assets/my image.jpg'
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { SlBriefcase } from "react-icons/sl";
import { LuBook } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div>
           <div className='relative'>
           <img src={Image}  className='' alt="" />
            <div className='bg-opacity-30 text-nowrap w-full bg-sky-400 absolute bottom-0 text-white font-bold text-center'>
                <h1 className='mytext'>MASUM CHOWDHURY</h1>
            </div>
           </div>
           <div className=' text-gray-500 '>
            <Link to='/home'>
            <div className='border-b-2  border-gray-800 '>
            <p className='flex items-center text-base ml-10 my-2'><HiOutlineHome className='text-xl mx-2'/> HOME</p>
            </div>
            </Link>
            
            <Link to='/about'>
            <div className='border-b-2  border-gray-800 '>
            <p className='flex items-center text-base ml-10 my-2'><FaRegUser className='text-xl mx-2'/> ABOUT ME</p>
            </div>
            </Link>

            <Link to='/resume'>
            <div className='border-b-2  border-gray-800 '>
            <p className='flex items-center text-base ml-10 my-2'><GrCertificate className='text-xl mx-2'/> RESUME</p>
            </div>
            </Link>

            <Link to='/portfolio'>
            <div className='border-b-2  border-gray-800 '>
            <p className='flex items-center text-base ml-10 my-2'><SlBriefcase className='text-xl mx-2'/> PORTFOLIO</p>
            </div>
            </Link>

           <Link to='/blog'>
           <div className='border-b-2  border-gray-800 '>
            <p className='flex items-center text-base ml-10 my-2'><LuBook className='text-xl mx-2'/>BLOG</p>
            </div>
           </Link>

            <Link to='/contact'>
            <div className='border-b-2  border-gray-800 '>
            <p className='flex items-center text-base ml-10 my-2'><RxEnvelopeClosed className='text-xl mx-2'/>CONTACT</p>
            </div>
            </Link>
           </div>
        </div>
    );
};

export default Sidebar;