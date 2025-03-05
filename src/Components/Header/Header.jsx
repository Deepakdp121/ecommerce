import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


function Header({cart}) {
    
    const [sidenav, setsidenav] = useState(false)

    const handlechange =() =>{
        setsidenav(!sidenav)
        
        
    }
  return (
    <>
    <header className="w-full h-[70px] bg-[#f6f6f6] border-b text-[20px] font-semibold">
        <div className='container mx-auto flex justify-between items-center p-2'>
            <div className=''>
                <Link to ="/">
               <h1 className='font-bold text-[30px]'>Deep<span className='text-[orange]'>Shop</span></h1>
               </Link>

            </div>

            <div className=''>
                <ul className='sm:flex items-center text-lg justify-center font-semibold hidden'>
                    <Link to ="/">
                    <li className='hover:text-[red] cursor-pointer mr-5'>Home</li>
                    </Link>
                    <Link to ="/Allproduct">
                    <li className='hover:text-[red] cursor-pointer mr-5'>All product</li>
                    </Link>
                    <Link to ="/Aboutus">
                    <li className='hover:text-[red] cursor-pointer mr-5'>About us</li>
                    </Link>
                    <Link to ="/contactus">
                    <li className='hover:text-[red] cursor-pointer mr-5'>Contact Us</li>
                    </Link>
                </ul>
            </div>
            { sidenav? (<div className='bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh]
             flex items-center justify-center z-10'>
                <ImCross size={25} className="absolute top-3 right-3 cursor-pointer"
                onClick={handlechange} />
                <ul className='flex gap-12 cursor-pointer flex-col'>
                    <Link to ="/">
                    <li className='hover:text-[red] cursor-pointer mr-5'>Home</li>
                    </Link>
                    <Link to ="/Allproduct">
                    <li className='hover:text-[red] cursor-pointer mr-5'>All product</li>
                    </Link>
                    <Link to ="/Aboutus">
                    <li className='hover:text-[red] cursor-pointer mr-5'>About us</li>
                    </Link>
                    <Link to ="/contactus">
                    <li className='hover:text-[red] cursor-pointer mr-5'>Contact Us</li>
                    </Link>
                </ul>
            </div>
            ):(
                ""

            )
        }

            <div className='flex justify-center items-center gap-4 text-center'>
            <div> 
                <GiHamburgerMenu size={30} className='cursor-pointer block sm:hidden'
                onClick={handlechange}/>
                </div>
                <div>
                <Link to="/Login">
                <button className='hover:bg-[black] bg-gray-500 text-white w-[75px] px-2 py-1 rounded'>Login</button>
                </Link>
                </div>
                
                <div>
                <Link to="/Cart">
                
                <button className=''><span className='text-[red] text-[15px] m-0'>{cart.length}</span><FaShoppingCart size={25}/></button> 
                </Link>
                </div>

            </div>

        </div>

    </header>
    
    </>
  )
}

export default Header;