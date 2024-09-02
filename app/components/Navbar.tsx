import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <div className="bg-slate-600 w-full text-white flex flex-col md:flex-row justify-between p-2 items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl">Digital Hub</h1>
          <div className="flex items-center">
            <input 
              type="search" 
              className="border rounded-md p-2 w-64 md:w-96 focus:ring-green-500 focus:ring-1 text-black" 
              placeholder="Search Products, items"
            />
            <IoSearchCircleSharp className="text-4xl p-1 text-gray-400" />
          </div>
        </div>
        
        <div className='flex space-x-6 md:space-x-8 text-xl uppercase'>
          <Link href='/login' className="flex items-center space-x-1 hover:text-teal-400">
            
              <IoHome className='text-2xl' />
              <span className="hidden md:block">Home</span>
            
          </Link>
          <Link href='/signup' className="flex items-center hover:text-teal-400">
       
              <FaCartShopping className='text-2xl' />
            
          </Link>
          <Link href='/profile'  className="flex items-center hover:text-teal-400">
              <FaUserCircle className='text-2xl' />
            
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar;
