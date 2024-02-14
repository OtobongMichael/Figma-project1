import React from 'react';
import { Icon } from '@iconify/react';
import images from '../assets/Images/Logomark.png';
import Avatar from '../assets/Images/Avatar.png';

// import Images from './Users/pc/Desktop/WEB DEVELOPMENT/React Classes/Figma project/figma-project/src/assets/Images'

const Navbar = () => {
    return (
        <nav className="bg-white px-[8rem] mr-[1rem]">
            <div>
                <div className="container mx-auto ">
                    <div className='flex justify-between items-center'>
                        <div className="text-black font-bold flex d-flex">
                            <img src={images} alt="Logomark.png" />
                            <h2 className='mt-2'>Untitled UI</h2>
                        </div>

                        <div className="space-x-[3rem]  mt-2  pl-[1rem]">
                            <a href="#" className="text-black ">Home</a>
                            <a href="#" className="text-black ">Dashboard</a>
                            <a href="#" className="text-black">Projects</a>
                            <a href="#" className="text-black">Tasks</a>
                            <a href="#" className="text-black">Reporting</a>
                            <a href="#" className="text-black">Users</a>
                        </div>
                        <div className='border-solid border-2 border-indigo-600 rounded bg-white text-black flex items-center p-1 px-3 mt-[5px] ml-[10rem] '>
                            <Icon icon="mdi:lightning-bolt-outline" />
                            <button >Upgrade now</button>
                        </div>
                        <div className=' text-[27px]  '>
                        <Icon icon="icon-park-outline:setting"/>
                        </div>
                        <div  className='mr-2 text-[27px] '>
                        <Icon icon="ph:bell" />
                        </div>
                        <img src={Avatar} alt="Avatar.png" className='mr-[25px]'/>

                    </div>


                </div>
            </div>

        </nav>
    );
};

export default Navbar;
