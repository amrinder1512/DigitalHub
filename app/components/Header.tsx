import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { PiSnapchatLogoBold } from "react-icons/pi";
import { FaSnapchat } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className='flex  bg-white text-black font-bold  text-justify justify-between sticky top-0 mx-48 '>
        <div className=' flex  space-x-16 my-0.5'>
          <h1 className=''>+91- 9464397968</h1>
          <h1>  as413620@gmail.com</h1>
        </div>
        <div className='flex space-x-4 mr-12 '>
          <Link href="https://www.instagram.com/" className='hover:opacity-50 cursor-pointer flex text-nowrap'><FaInstagramSquare className='text-2xl rounded-full' />Instagram</Link>
          <Link href="https://web.whatsapp.com/" className='hover:opacity-50 cursor-pointer flex text-nowrap'><FaWhatsappSquare  className='text-2xl rounded-full' /> Whatsapp</Link>
          <Link href="https://web.snapchat.com/" className='hover:opacity-50 cursor-pointer flex text-nowrap'><FaSnapchat className='text-2xl' />Snapchat</Link>

        </div>
      </div>
    </>
  )
}

export default Header