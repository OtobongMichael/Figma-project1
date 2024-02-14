import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <nav className=" px-[8.4rem] bg-white-800 p-2 flex mx-auto mr-[2rem]">

            <div className="container mx-auto flex justify-between items-center ">
                <div className="space-x-11 mr-[1rem]">
                    <a href="#" className="text-black ">Overview</a>
                    <a href="#" className="text-black">Notifications</a>
                    <a href="#" className="text-black">Analysics</a>
                    <a href="#" className="text-black">Save reports</a>
                    <a href="#" className="text-black">Trade history</a>
                    <a href="#" className="text-black">User report</a>
                </div>
                <div className="text-black font-bold">
              


    <div className="flex items-center border rounded-md overflow-hidden px-[10px]">
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


            </div>
        </nav>
    );
};

export default Navbar;
