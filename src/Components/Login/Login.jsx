import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const[input, setinput] = useState();


  const handlechange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setinput(value =>({...value,[name]:value}))

  }

  const submitform =() =>{
    console.log(input);
  }


  return (
    <>
    
        <div className='relative'>
            <img src='https://up.yimg.com/ib/th?id=OIP.0rLLRQPgiUhKxDup53nvwQHaEK&pid=Api&rs=1&c=1&qlt=95&w=186&h=104'
             alt='' className='object-center w-full object-cover h-[200px] mt-0' />
            <div className='w-full h-[500px]  absolute top-0 left-0 opacity-[.4]'>  </div>
            <h2 className='absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>Login
            </h2>
        </div>

    {// login form 
}

        <div className="container px-3 py-10 mx-auto flex">
    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative shadow-md">
      <h2 className="text-white text-center text-4xl text-lg mb-1 font-bold title-font">Login</h2>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" value={input} onChange={handlechange} />
      </div>

      <div className="relative mb-4">
        <label for="Password" className="leading-7 text-sm text-white">Password</label>
        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" value={input} onChange={handlechange} />
      </div>
     
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submitform}>
        Login</button>
        <p className='text-5px text-white mt-3'>
            Don't  Have Account? <Link to="/Signup"><button className='cursor-pointer hover:text-blue-300'>Sign up</button>
            </Link>
        </p>
    </div>
  </div>
    
    </>
  );
};

export default Login;