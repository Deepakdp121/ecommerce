import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

function Service() {
  return (
    <>
    <div className='container mx-auto flex gap-10 py-11 px-5 justify-center flex-wrap items-center'> 
        <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] h-[100px] hover:scale-110  transition-duration-500'>
         <MdLocalShipping size={30} className='item-center'/>
            <p>FREE SHIPPING</p>
        </div>

        <div className='bg-red-500 py-3 px-5 rounded text-white gap-2 flex flex-col items-center w-[220px] h-[100px] hover:scale-110  transition-duration-500'>
        <MdProductionQuantityLimits size={30}/>
            <p>AUTHENTIC PROCESS</p>
        </div>

        <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] h-[100px] hover:scale-110  transition-duration-500'>
        <TbTruckReturn size={30}/>
            <p>EASY RETURN</p>
        </div>

        <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] h-[100px] hover:scale-110  transition-duration-500'>
         <MdPayment size={30} />
            <p>SECURE PAYMENT</p>
        </div>
    </div>
    </>
  );
};


export default Service;