import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <nav className='rounded-xl'>
        <ul className='flex rounded-xl'>
            <li className='bg-Black px-8 py-4 border hover:bg-orange-500 '>
                <Link to="#" className='text-white'>1</Link>
            </li>
            <li className='bg-gray-100/90 text-white px-8 py-4 border hover:bg-orange-500 '>
            <Link to="#" className='text-Black'>2</Link>
            </li>
            <li className='bg-gray-100/90 text-white px-8 py-4 border hover:bg-orange-500 '>
            <Link to="#" className='text-Black'>3</Link>
            </li>
            <li className='bg-gray-100/90 text-white px-8 py-4 border hover:bg-orange-500 '>
            <Link to="#" className='text-Black'>4</Link>
            </li>
            <li className='bg-gray-100/90 text-white px-8 py-4 border hover:bg-orange-500 '>
            <Link to="#" className='text-Black'>5</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination