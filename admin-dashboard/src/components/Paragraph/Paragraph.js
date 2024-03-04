import React from 'react'

const Paragraph = ({children}) => {
  return (
    <div className='mt-2'><p className='text-sm text-gray-500'>{children}</p></div>
  )
}

export default Paragraph