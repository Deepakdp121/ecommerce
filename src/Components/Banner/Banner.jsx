import React from 'react';
import banner2 from "../../assets/banner2.jpg";


function Banner() {
  return (
   <>
   <div className='relative'>
   <div>
                <img src={banner2} alt="" className="w-full object-center object-cover" />
            </div>
            <div className="absolute top-[30%] w-full text-end right-5">
                <h1 className="text:1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[red]">
                    Discover Your Next Adventure!
                </h1>
                
                <p className="text:[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold">
                    Shop our latest Arrival & Unleash Your Style
                </p>
                
            </div>
            </div>


   </>
  )
}

export default Banner