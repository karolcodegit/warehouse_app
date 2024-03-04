import React from 'react'
import Logo from '../components/Logo/Logo'

const Footer = ({isSidebarOpen}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`fixed left-0 right-0 bottom-0 bg-[#182235] p-2 shadow-lg z-10 ${isSidebarOpen ? 'ml-64' : ''}`}>
      <div className='mx-auto'>
        <div className='flex flex-wrap flex-row items-center justify-between'>
          <div className='flex-shrink max-w-full px-4 lg:w-1/2'>
            <Logo className='justify-self-start' />
          </div>
          <div className='flex-shrink max-w-full w-full px-4 lg:w-1/2 lg:text-right'>
            <span className='text-white'>
              © {currentYear - 1 } - {currentYear} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer