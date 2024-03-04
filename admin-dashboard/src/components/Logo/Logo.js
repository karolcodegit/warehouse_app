import React from 'react'
import Title from '../Title/Tilte'
import { Link } from 'react-router-dom'


const Logo = ({col, big}) => {
  return (
    <div className='flex  items-center'>
      <Link to='/' className={`flex items-center ${col ? 'flex-col' : 'flex-row'} `}>
          <img
              className={`${big ? 'w-20 h-20' : 'w-10 h-10'} mx-auto ${col ? 'mb-3' : 'mr-3'}`}
              src="https:tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
              alt="CodeCraft"
          />
          <Title className="" tag="h3" white>CodeCraft</Title>
        </Link>
    </div>
  )
}

export default Logo