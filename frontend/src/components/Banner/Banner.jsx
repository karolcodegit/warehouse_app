import React from 'react'
import ClothesImg from '../../assets/clothes.jpg'

const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
        <div className='flex flex-col py-28 md:flex-row-reverse justify-between items-center gap-14'>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>
                  Collection
                </h1>
                <p className='text-xl mb-7'>
                    You can explore and find the best clothes for you
                </p>
                <button className='bg-Black px-6 py-2 text-white hover:bg-orange-500 font-semibold rounded-sm'>Shop Now</button>
            </div>
            <div className='md:w-1/2'>
                <img src={ClothesImg} alt="Clothes Image" />
            </div>
        </div>
    </div>
  )
}

export default Banner