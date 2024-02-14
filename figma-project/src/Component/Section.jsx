import React from 'react';
import { Icon } from '@iconify/react';


const Card = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg px-4">
            <div className="px-7">
          
                <div className="font-semibold text-  flex justify-between "><h3>{props.title}</h3>
                 <Icon icon="ph:dots-three-vertical-bold" className='mt-[0.4rem] mr-[-2rem] font-extrabold text-xl'/>
                 </div>
                <h2 className="text-gray-700  font-extrabold text-4xl mt-[10px]">
                    {props.amount}
                </h2>
            </div>
            <div className='justify-around'>
            <div className="flex mt-[-30px]">
                <div className="px-5 py-4 flex mt-[2rem]">
                    <div className='mt-[0.2rem] text-lg'>
                    <Icon icon="uil:arrow-up" className={props.color}/>
                    </div>
         
                <div className='flex'>
                    <p className={props.color}>{props.percent}</p><span className='ml-[5px] text'> vs last month</span>
                </div>  
                </div>
                <div className='ml-[10] pb-[2rem]'>
                <img src={props.img} alt="_Chart.png"/>
                </div>
            </div>
            </div>
     
        </div>
    );
};

export default Card;
