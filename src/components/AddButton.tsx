import React from 'react'
import { MdAddTask } from 'react-icons/md'
import Model from './Model'

function AddButton({modelActive ,setModelActive}:{modelActive : boolean ; setModelActive : any}) {
  return (
    <>
    <div className='max-w-3xl py-2 bottom-2 container  fixed left-1/2 -translate-x-1/2 mx-auto flex place-items-center justify-end px-4'>
    {!modelActive && <button onClick={() : void => setModelActive(true)} className='bg-blue-500 p-2 px-4 rounded flex place-content-center place-items-center font-bold text-white    '>
            Add Task <MdAddTask className='ml-2 text-2xl' />
        </button>
    }
    </div>
    {modelActive && <Model setModel={setModelActive}   />}
    </>
  )
}

export default AddButton