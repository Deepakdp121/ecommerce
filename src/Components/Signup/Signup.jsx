import React, { useState } from 'react';
import http from '../../Pages/http/http';
import axios from 'axios';

function Signup() {

  
  const [usersignup, setusersignup] = useState({name:"", email:"",phone:"", password:"" });

  const[error, seterror] = useState({})

  const handlechange =(e) =>{
    setusersignup({...usersignup, [e.target.name]:e.target.value})
    
  };

  const handlesubmit = (e) =>{ 
    e.preventDefault();

    const newerror = {};


    if(usersignup.name == "") {
     
      newerror.name = "please enter name";

    }
    if(usersignup.email == "") {
      
      newerror.email = "please enter email";
    }
    if(usersignup.phone == "") {
      
      newerror.phone = "please enter phone";
    }
    if(usersignup.password == "") {
      
      newerror.password = "please enter password";
    }
    seterror(newerror);

    http.post('/login', usersignup).then((res)=>{

    });

  
};
  return (
    <>
    <div className="container px-3 py-10 mx-auto flex">
    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative shadow-md text-white">
      <h2 className="text-white text-center text-2xl text-lg mb-1 font-bold title-font underline">SIGN UP HERE</h2>

      <div className="relative mb-4">
        <label aria-autocomplete="off" for="Name:" className="leading-7 text-sm text-white">Name:</label>
        <input type="text"  name="name" value={usersignup.name} 
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" onChange={handlechange} />
          <span style={{color:"blue"}}>{error.name}</span>
      </div>
      <div className="relative mb-4">
        <label for="email:" className="leading-7 text-sm text-white">Email:</label>
        <input type="email"  name="email" value={usersignup.email}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" onChange={handlechange} />
          <span style={{color:"blue"}}>{error.email}</span>
      </div>
      <div className="relative mb-4">
        <label for="Phone no:" className="leading-7 text-sm text-white">Phone:</label>
        <input type="text" name="phone" value={usersignup.phone}
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" onChange={handlechange} />
          <span style={{color:"blue"}}>{error.phone}</span>
      </div>
    <div className="relative mb-4">
    <label for="Password:" className="leading-7 text-sm text-white">Password</label>
    <input type="password" name="password" value={usersignup.password}
    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
     focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
      duration-200 ease-in-out" 
      onChange={handlechange}/>
      <span style={{color:"blue"}}>{error.password}</span>
  </div>
 
  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600
   rounded text-lg" onClick={handlesubmit}>
    Signup</button>
    
    
</div>
</div>
</>
  );
};

export default Signup;