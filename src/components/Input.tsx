import React from 'react'

function Input() {
  return (
    <div className='flex flex-col '>
        <label htmlFor="name">Titre</label>
        <input type="text" className='outline-none border-2 border-blue-500 rounded-md p-2 shadow-md' placeholder='Complete Project Proposal'/>
    </div>
  )
}

export default Input