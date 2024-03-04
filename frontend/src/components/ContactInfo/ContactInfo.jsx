import React from 'react'
import { FaPhone } from "react-icons/fa6";


const ContactInfo = () => {
  return (
    <div className='bg-white w-full'>
        <div className='py-16 px-4'>
            <div className='gap-6 mx-auto md:grid-cols-3 grid '>
                <div className='flex flex-col bg-gray-300/500 shadow-lg text-center justify-center items-center'>
                    <FaPhone className='text-5xl text-Black' />
                    <h3 className='text-2xl font-medium'>Call Us 24/7</h3>
                    <p className='text-lg'>+1 123 456 7890</p>
                </div>
                <div className='flex flex-col bg-gray-300/500 shadow-lg text-center justify-center items-center'>
                    <FaPhone className='text-5xl text-Black' />
                    <h3 className='text-2xl'>Call Us 24/7</h3>
                    <p className='text-lg'>+1 123 456 7890</p>
                </div>
                <div className='flex flex-col bg-gray-300/500 shadow-lg text-center justify-center items-center'>
                    <FaPhone className='text-5xl text-Black' />
                    <h3 className='text-2xl'>Call Us 24/7</h3>
                    <p className='text-lg'>+1 123 456 7890</p>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default ContactInfo