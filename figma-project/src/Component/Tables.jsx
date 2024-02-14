import React from 'react'
// import Tables from "./Component/Tables"
import Avatar from '../assets/Images/AvatarA.png';
import { Icon } from '@iconify/react';
import Avatar1 from '../assets/Images/AvatarB.png';
import Avatar2 from '../assets/Images/AvatarC.png';
import Avatar3 from '../assets/Images/AvatarD.png';
import Avatar4 from '../assets/Images/AvatarE.png';
import Avatar5 from '../assets/Images/AvatarF.png';
import Avatar6 from '../assets/Images/AvatarG.png';
import Avatari from '../assets/Images/Avatar (2).png';
import Avatarii from '../assets/Images/Avatar (8).png';
import Avatariii from '../assets/Images/Avatar (3).png';
import Avatariv from '../assets/Images/Avatar (5).png';
import Avatarv from '../assets/Images/Avatar (7).png';


function Tables() {

  return (
    <div className='px-[10rem] ml-[-2rem] rounded'>

      <div className="relative px- shadow-md sm:rounded-lg border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white">
          <thead className="text-xs text-gray-700  bg-white dark:text-gray-400">
            <tr className='text-gray-800'>
              <th scope="col" className="px-6 py-3 font-normal">
                Company
              </th>
              <th scope="col" className="px-[6.2rem] py-3 font-normal">
                License use
              </th>
              <div className='ml-[0.5rem]'>
                <th scope="col" className="  font-normal">
                  Statue
                </th>
              </div>

              <th scope="col" className="px-[3.7rem] py-3 font-normal +++">
                users
              </th>


              <div className=' mt-[10.8px] mr-[4rem] py-2 p-[10rem]'>

                <th scope="col" className="  font-normal  pr-[2rem] ">

                  About

                </th>
              </div>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5" />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar} alt="AvatarA.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>catalog</h4>
                    <p>catalogapp.io</p>
                  </div>

                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[70%] h-full rounded-[16px]'>
                  </div>
                </div>

              </td>
              <td className=" py-4">
                <button className='px-2  py-[-2px] mb-[3px] bg-green-100 rounded-full text-xm font-medium' >customer</button>
              </td>
              <td className=" w-[300px]   ">
                <div className='flex relative  h-[30px] ml-[3.5rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > +5</div>
                </div>
              </td>
              <td className=" py-4 flex ">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>content curating app</h4>
                  <p className='text-gray-400'>Bring all your newws into one place</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[2rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5" />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar1} alt="AvatarB.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>circooles</h4>
                    <p>getcirclooles.com</p>
                  </div>
                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[60%] h-full rounded-[16px]'>
                  </div>
                </div>
              </td>
              <td className=" py-4">
                <button className='px-2 border py-[-2px] mb-[3px] bg-gray-200 rounded-full text-xm font-medium' >churned</button>
              </td>
              <td className="px-6 py-4">
                <div className='flex relative  h-[30px] ml-[2rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > +8</div>
                </div>
              </td>
              <td className=" py-4 flex">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>Design software</h4>
                  <p className='text-gray-400'>Super lightweight design app</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[4.3rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
            <tr className="bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5" />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar2} alt="AvatarC.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>Command+R</h4>
                    <p>cmdr.ai</p>
                  </div>
                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[40%] rounded-[16px] h-full'>
                  </div>
                </div>
              </td>
              <td className=" py-4">
                <button className='px-2 border py-[-2px] mb-[3px] bg-green-100 rounded-full text-xm font-medium' >customer</button>
              </td>
              <td className="px-6 py-4">
                <div className='flex relative  h-[30px] ml-[2rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > +2</div>
                </div>
              </td>
              <td className=" py-4 flex">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>Data prediction</h4>
                  <p className='text-gray-400'>AI and machine learnin data</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[4.8rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5" />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar3} alt="AvatarD.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>Hourglass</h4>
                    <p>hourglass.app</p>
                  </div>
                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[80%] h-full rounded-[16px]'>
                  </div>
                </div>
              </td>
              <td className=" py-4">
                <button className='px-2 border py-[-2px] mb-[3px] bg-green-100 rounded-full text-xm font-medium' >customer</button>
              </td>
              <td className="px-6 py-4">
                <div className='flex relative  h-[30px] ml-[2rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > </div>
                </div>
              </td>
              <td className=" py-4 flex">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>Productivity app</h4>
                  <p className='text-gray-400'>Time management and productivity</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[1.9rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
            <tr className='bg-gray-50'>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5" />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar4} alt="AvatarE.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>Layers</h4>
                    <p>getlayers.io</p>
                  </div>
                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[30%] h-full rounded-[16px]'>
                  </div>
                </div>
              </td>
              <td className=" py-4">
                <button className='px-2 border py-[-2px] mb-[3px] bg-gray-200 rounded-full text-xm font-medium' >churned</button>
              </td>
              <td className="px-6 py-4">
                <div className='flex relative  h-[30px] ml-[2rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > +1</div>
                </div>
              </td>
              <td className="py-4 flex">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>Web app integrations</h4>
                  <p className='text-gray-400'>Connect web app seamlessly</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[4.6rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5" />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar5} alt="AvatarF.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>Quotient</h4>
                    <p>quotient.co</p>
                  </div>
                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[20%] h-full rounded-[16px]'>
                  </div>
                </div>
              </td>
              <td className=" py-4">
                <button className='px-2 border py-[-2px] mb-[3px] bg-green-100 rounded-full text-xm font-medium' >customer</button>
              </td>
              <td className="px-6 py-4">
                <div className='flex relative  h-[30px] ml-[2rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > +6</div>
                </div>
              </td>
              <td className=" py-4 flex">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>Sales CRM</h4>
                  <p className='text-gray-400'>web-based sales doc management</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[2.3rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
            <tr className='bg-gray-50'>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span className='flex'>
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox1" className="checkbox w-5 h-5 " />
                    <label for="checkbox1" className="checkbox-label"></label>
                  </div>
                  <img src={Avatar6} alt="AvatarG.png" className=' mr-[10px] px-4' />
                  <div>
                    <h4>Sisyphus</h4>
                    <p>sisyphus.com</p>
                  </div>
                </span>
              </th>
              <td className="px-[6.2rem] py-4">
                <div className=' bg-gray-100  w-[120px] h-[9.5px] rounded-[16px] overflow-hidden'>
                  <div className='bg-purple-700 w-[50%] h-full rounded-[16px]'>
                  </div>
                </div>
              </td>
              <td className=" py-4 ">
                <button className='px-2 border py-[-2px] mb-[3px] bg-green-100 rounded-full text-xm font-medium' >customer</button>
              </td>
              <td className="px-6 py-4  ">
                <div className='flex relative  h-[30px] ml-[2rem] '>
                  <img src={Avatari} alt="Avatar(2).png" className='w-[25px] h-[25px] rounded-full absolute' />
                  <img src={Avatarii} alt="Avatar(8).png" className='w-[25px] h-[25px] rounded-full absolute left-[1rem]' />
                  <img src={Avatariii} alt="Avatar(3).png" className='w-[25px] h-[25px] rounded-full absolute left-[2rem]' />
                  <img src={Avatariv} alt="Avatar(5).png" className='w-[25px] h-[25px] rounded-full absolute left-[3rem]' />
                  <img src={Avatarv} alt="Avatar(7).png" className='w-[25px] h-[25px] rounded-full absolute left-[4rem]' />
                  <div className='w-[20px] bg-gray-200 rounded-full h-[25px] text-[12px] absolute left-[5rem]' > +4</div>
                </div>
              </td>
              <td className=" py-4 flex">

                <div className='ml-[5rem]'>
                  <h4 className='text-black'>Automation and workflow</h4>
                  <p className='text-gray-400'>Time tracking, invoicing and expresses</p>
                </div>
                <Icon icon="mi:delete" className='text-xl mt-[15px]   ml-[1rem]' />
                <Icon icon="lucide:pen" className='text-xl  mt-[15px]   ml-[2rem]' />

              </td>
            </tr>
  
          </tbody>
     
        </table>
        <div className='flex mt-[0.2rem] justify-between p-4'>
              <div class="flex space-x-4">
                <button class="bg-white font-semibold py-2 px-4 rounded border-2">
                  Previous
                </button>
                <button class="bg-white font-semibold py-2 px-4 rounded border-2 ">
                  Next
                </button>
              </div>
              <div className='mr-[1rem]'>
                <p>
                  page 1 of 10
                </p>
              </div>
            </div>
      </div>

    </div>
  )
}
export default Tables;
