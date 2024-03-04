import React from 'react'
import Search from '../Search/Search'


const BarFilter = ({children, title}) => {
  return (
    <div className='sm:flex sm:justify-between sm:items-center mb-8'>
      <div className='flex flex-wrap justify-center sm:justify-start'>
          <h2>{title}</h2>
      </div>
      <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
        <div className='inline-flex relative'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BarFilter