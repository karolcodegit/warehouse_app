import React from 'react'

const CallToActionSection = () => {
  return (
    <div className='w-full bg-Black'>
        <div className='py-16 mx-auto text-white text-center'>
            <h3 className='text-4xl uppercase'>Do you need more tips?</h3>
            <p className='text-2xl mt-3'>We are here to help you</p>
            <input type="email" className='rounded-lg my-10' />
        </div>
    </div>
  )
}

export default CallToActionSection