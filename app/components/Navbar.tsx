import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";


const NavBar = () => {
  return (
    <>
     <div className=" bg-slate-600 w-full text-white flex justify-between ">
    <div className="flex  p-2   mx-48 space-x-4">
    <div className=" ">
      <h1 className="text-3xl ">Digital Hub</h1>
    </div>
    <div className="flex"> 
      <input type="search" name="" id=""  className="border rounded-md p-1 w-96  focus:ring-green-500 focus:ring-1  text-black" placeholder="Search Products, items"/>
      <IoSearchCircleSharp  className="text-4xl p-1 text-gray-400 relative "/>   
    </div>
    
    
    </div>
    
    <div className='p-2 text-xl flex  space-x-8 mr-10  uppercase mx-48 '>
     <Link href='/login'> <h1 className='"bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 flex text-nowrap ">
  Hover me'><IoHome className='text-2xl ' /> </h1>   </Link>
     {/* <Link href="/signup">About </Link> */}
     {/* <Link href="/signup">Gallery </Link> */}
     {/* <Link href="/signup">  */}
      {/* <select name="" id="">
      <option value=""> Mobile</option>
      <option value=""> Mobile</option>
      <option value=""> Mobile</option>
      <option value=""> Mobile</option>
      </select> */}
      {/* </Link> */}
     <Link href="/signup" ><FaCartShopping className='text-2xl ' /></Link>
     {/* <Link href="/signup">My Orders </Link> */}
     <Link href="/signup"><FaUserCircle  className='text-2xl' /></Link>
    </div>
    </div>
    </>
  )
}

export default NavBar