import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram, FaX } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='my-2 shadow-md bg-gray-100 py-3 relative bottom-0 w-full rounded-lg'>
        <h2 className='text-center text-[12px] font-semibold mb-2'>Follow Us</h2>
        <div className='flex justify-center gap-3'>
            <FaFacebookF className='text-blue-600'/>
            <FaInstagram className='text-red-600'/>
            <FaX className='text-black-600'/>
        </div>
        <h2 className='text-center text-[10px] my-2'>All Right Reserve quickridenepal@</h2>
    </div>
  )
}

export default Footer