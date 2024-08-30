import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare, FaWhatsappSquare, FaSnapchat } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className='bg-white text-black font-bold sticky top-0 w-full p-4 shadow-md'>
        <div className='flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl'>
          {/* Contact Info */}
          <div className='flex space-x-8 mb-4 md:mb-0'>
            <h1 className='text-sm md:text-base'>+91-9464397968</h1>
            <h1 className='text-sm md:text-base'>as413620@gmail.com</h1>
          </div>

          {/* Social Media Links */}
          <div className='flex space-x-4'>
            <Link href="https://www.instagram.com/"
              className='flex items-center space-x-1 hover:opacity-70'>
                <FaInstagramSquare className='text-2xl' />
                <span className='hidden md:block'>Instagram</span>
              
            </Link>
            <Link href="https://web.whatsapp.com/"
              className='flex items-center space-x-1 hover:opacity-70'>
                <FaWhatsappSquare className='text-2xl' />
                <span className='hidden md:block'>Whatsapp</span>
              
            </Link>
            <Link href="https://web.snapchat.com/"
              className='flex items-center space-x-1 hover:opacity-70'>
                <FaSnapchat className='text-2xl' />
                <span className='hidden md:block'>Snapchat</span>
            
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
