import React from 'react';
import { Icon } from '@iconify/react';
import Iconc from '../assets/Images/Icon (1).png';

const Header = () => {
  return (
    <header className=" p-4 px-[8.2rem] gap-4 mr-[0.7rem]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className='space-x-[1rem]'>
        <button className=" bg-purple-200 font-semibold  px-5 py-1 rounded-md"><span className='text-[purple] flex '><p>All time</p><Icon icon="octicon:x-16" className='mt-[1.5px] text-2xl ml-[7px]'/></span></button>
        <button className=" bg-purple-200 font-semibold  px-5 py-1 rounded-md"><span className='text-[purple] flex '><p>US, AU, +4</p><Icon icon="octicon:x-16" className='mt-[1.5px] text-2xl ml-[7px]'/></span></button>
        <button className=" bg-white font-semibold border-2 border-black  px-6  mt-[-10px] rounded-md"><span className='text-black flex'> <img src={Iconc} alt="Icon(1).png" className=' w-[15px] h-[10px] mt-[20px] mr-[10px]' /><p className='mt-[16px]'>More filter</p></span></button>
        </div>
       
        {/* Search Bar at the End */}

    <div className="flex items-center border rounded-md overflow-hidden mr-[20px] px-[25px]">
      <div className="p-2 bg-white">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
          />
          <circle cx="10" cy="10" r="8" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-4 w-full focus:outline-none"
      />
    </div>
      </div>
    </header>
  );
};

export default Header;
