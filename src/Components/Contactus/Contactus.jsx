import React from 'react';
import { Link } from 'react-router-dom';

function Contactus() {
  return (
    <>
    <div className='w-full bg-blue-300'>
      <div className='text-white text-center' >
        <h2 className='text-center text-4xl pt-[50px] text-bold mx-3'>Contact us</h2>
        <h2 className='text-2xl mt-2'>Please feel free to contact us & We would happy to assist you! </h2>
        <p className='text-2xl mt-5'>Email ids</p>
        <p className='text-2xl'>For Sales : sales@zauca.in</p>
        <p className='text-2xl'>For Support: support@zauca.in</p>
        <p className='text-2xl'>For Resellers: reseller@zauca.in</p>
        <h2 className='text-3xl mt-5'>Phone Numbers</h2>
        <p className='text-2xl'>Sales: 1800-212-9495</p>
        <p className='text-2xl'>Support: 080-6777-6777</p>
        
      </div>

      <div className="container px-3 py-10 w-[80%]">
    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative shadow-md">
      <h2 className="text-white text-center text-4xl text-lg mb-1 font-bold title-font">Login</h2>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" />
      </div>

      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" />
      </div>

      <div className="relative mb-4">
        <label for="Password" className="leading-7 text-sm text-white">Password</label>
        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" />
      </div>
     
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Login</button>
        <p className='text-5px text-white mt-3'>
            Don't  Have Account? <Link to="/Signup"><button className='cursor-pointer hover:text-blue-300'>Sign up</button>
            </Link>
        </p>
    </div>
  </div>


      </div>
      
      




 
    </>
  );
};

export default Contactus;