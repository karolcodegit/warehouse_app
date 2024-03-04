import React, { useState } from 'react'
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItem = [
        {
            name: 'Accessories',
            path: '/accessories'
        },
        {
            name: 'Clothing & Shoes',
            path: '/blog'
        },
        {
            name: 'Home & Living',
            path: '/about'
        },
        {
            name: 'Wedding & Party',
            path: '/contact'
        },
        {
            name: 'Toys',
            path: '/toys'
        },
        {
            name: 'Art & Collectibles',
            path: '/art'
        },
        {
            name: 'Craft Supplies',
            path: '/craft'
        },
        {
            name: 'Gifts & Gift Cards',
            path: '/gift'
        }
    ]
  return (
    <header className='mx-auto max-w-screen-2xl xl:px-28 px-4 fixed top-0 right-0 left-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
            <CiSearch className='text-Balck w-5 h-5 cursor-pointer hidden md:block'/>
            {/* Logo */}
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>

            <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
                <a href='/user' className='flex items-center gap-2'><CiUser /> Account</a>
                <a href='/user' className='flex items-center gap-2'><CiShoppingCart /> Shopping</a>
            </div>

            {/* nav mobile */}
            <div className='lg:hidden '>
                <button onClick={toggleMenu}>
                    {
                        isMenuOpen ? <FaTimes className='w-5 h-5 text-Black' /> : <FaBars className='w-5 h-5 text-Black' />
                    }
                </button>
            </div>

        </nav>

        <hr />
        {/* Navbar */}
        <div className='py-4'>
            <ul className='lg:flex items-center justify-between text-Black hidden'>
                {
                    navItem.map(({name, path}) => {
                        return (
                            <li key={name} className='hover:text-orange-500'>
                                <Link to={path}>{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

        {/* Mobile */}

        <div>
            <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? '' : 'hidden'}`}>
                {
                    navItem.map(({name, path}) => {
                        return (
                            <li key={name} className='hover:text-orange-500 my-3 cursor-pointer'>
                                <Link to={path}>{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar