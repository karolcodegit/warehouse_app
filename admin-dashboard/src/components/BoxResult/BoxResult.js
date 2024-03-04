import React from 'react'

const BoxResult = ({name, value, procent}) => {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-lg border border-slate-200 '>
        <div className='p-5'>
            <h2 className='text-lg font-semibold text-slate-800  mb-2'>{name}</h2>
            <div className='flex items-start'>
                <span className='text-3xl font-bold text-slate-800  mr-2'>{value}</span>
                <span className='text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full'>{procent}</span>
            </div>
        </div>  
    </div>
  )
}

export default BoxResult