import React from 'react'
import Input from './Input'

function Model() {
  return (
    <>
        <div className='min-w-full h-screen bg-black/30  fixed top-0 left-0 overflow-hidden flex place-content-center place-items-center'>
            <div className='w-1/2 p-4 min-h-92 bg-white rounded-md shadow-md '>
                <h1 className='font-black text-2xl mb-5'>Add Task</h1>
                <Input />
                <div className='mt-5 space-x-3'>
                    <button 
                    className='p-2 bg-blue-600 rounded text-white font-bold shadow-md hover:bg-blue-400 duration-300 focus:scale-105'
                    >Add Task</button>
                    <button 
                    className='p-2  bg-blue-600 rounded text-white font-bold hover:bg-blue-400 duration-300 focus:scale-105'
                    >Add Task</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Model