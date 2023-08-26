import React, { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

function Headers() {
    const [isActive,setIsActive] = useState<boolean>(false)
  return (
    <div 
    className='w-full  flex place-items-center justify-between '>
        <div 
        className='text-3xl cursor-pointer duration-200 text-blue-500' onClick={() : void => {setIsActive(!isActive)}}>
            {isActive?<IoMdClose />:<HiMenuAlt1 />}
        </div>
        <div 
        className=''>
            <h1 
            className='font-black text-2xl text-gray-500'>
                TUDU
            </h1>
        </div>
    </div>
  )
}

export default Headers