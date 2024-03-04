import React from 'react'
import { RxUpdate } from 'react-icons/rx'

const ButtonUpdate = () => {
  return (
    <div className='relative inline-flex'>
    <button className='btn bg-white px-2 py-2 rounded-md border-slate-200 hover:border-slate-300  text-slate-500 hover:text-slate-600  '>
        <RxUpdate className='w-5 h-5'/>
    </button>
</div>
  )
}

export default ButtonUpdate