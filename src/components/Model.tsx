import React, { useEffect } from 'react'
import Input from './Input'

function Model({ setModel } : { setModel : any }) {

  useEffect(() : any =>{
    const closeModel = (e : any) : void => {
      if(e.target.classList.contains('backdrop-blur-sm')){
        setModel(false)
      }
    }
    window.addEventListener('click', closeModel)
    return () : void => window.removeEventListener('click', closeModel)
  })

  return (
        <div
        data-aos="fade-zoom-in"
        data-aos-delay="300"
        className='min-w-full p-4 backdrop-blur-sm h-screen bg-black/30  fixed top-0 left-0 overflow-hidden flex place-content-center place-items-center'>
            <div 
            data-aos="zoom-out-up"
            data-aos-delay="300"
            className='w-full md:w-1/2 p-4 min-h-92 bg-white rounded-md shadow-md '>
                <h1 className='font-black text-2xl mb-5'>Add Task</h1>
                <Input />
                <div className='mt-5 space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row'>
                    <button 
                    className='p-2 bg-blue-600 rounded text-white font-bold w-full shadow-md hover:bg-blue-400 duration-300'
                    >Add Task</button>
                    <button 
                    className='p-2  bg-red-600 rounded text-white font-bold w-full hover:bg-red-400 duration-300'
                    onClick={() : void => setModel(false)}
                    >Close</button>
                </div>
            </div>
        </div>
  )
}

export default Model