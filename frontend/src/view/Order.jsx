import React from 'react'
import { GoPerson } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";

import Shoe from '../assets/hiking-boots_11283212.png'




const Order = () => {
  return (
    <>
    <div className='mt-20'>
        <div className="bg-white p-4 rounded-md shadow flex flex-col xl:flex-row justify-center items-start xl:items-center xl:gap-32">
            <div className="flex items-center mb-4 w-full md:w-auto">
                <span className='bg-green-400 p-7 text-white text-4xl rounded-full mx-4'><GoPerson /></span>
                <div>
                    <p className="text-xl font-semibold text-gray-800">Admin Doe</p>
                    <p className="text-gray-600">admin@example.com</p>
                </div>
            </div>
            <div className="flex items-center mb-4 w-full md:w-auto">
                <span className='bg-green-400 p-7 text-white text-4xl rounded-full mx-4'><FaShippingFast /></span>
                <div>
                    <p className="text-gray-600">Shipping: Tanzania</p>
                    <p className="text-gray-600">Pay method: Paypal</p>
                    <p className="text-gray-600">Paid on Jan 12 2021</p>
                </div>
            </div>
            <div className="flex items-center mb-4 w-full md:w-auto">
                <span className='bg-green-400 p-7 text-white text-4xl rounded-full mx-4'><CiLocationOn /></span>
                <div>
                    <p className="text-gray-600">Address:</p>
                    <p className="text-gray-600">
                    Arusha Tz, Ngaramtoni Crater, PO BOX 1234 Arusha Tz
                    </p>
                    <p className="text-xl font-semibold text-gray-800">Not Delivered</p>
                </div>
            </div>
        </div>
    </div>

    <div className='mt-20'>
    <div className='max-w-screen-2xl mx-auto mt-10 flex flex-col xl:flex-row'>
    <div className='w-full md:w-3/4 mx-10'>
        <div className='flex w-full border-b p-4'>
            <div className='flex items-center space-x-4'>
                <img className='w-20 h-20' src={Shoe} alt="Shoe" />
                <span>Girls Nike Shoes</span>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='text-center'>
                    <span className='uppercase text-sm'>Quantity</span>
                    <span className='block'>4</span>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='text-center'>
                    <span className='uppercase text-sm'>Subtotal</span>
                    <span className='block'>$456</span>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full md:w-1/4'>
        <table className="table-auto bg-gray-100 w-full">
            <tbody>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Products</td>
                    <td className="p-4 text-right">$234</td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Shipping</td>
                    <td className="p-4 text-right">$342</td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Tax</td>
                    <td className="p-4 text-right">23%</td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Total</td>
                    <td className="p-4 text-right font-semibold">$444</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>
 
    </>
  )
}

export default Order