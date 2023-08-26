import React from 'react'
import { Task } from '../types/Task';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { BsFillClipboardCheckFill } from "react-icons/bs"
import { FaStar } from "react-icons/fa"

function Todo({todo,index}:{todo : Task ; index : number}) {
  AOS.init()
  return (
    <div 
    className='shadow rounded-md py-6 px-4 place-items-center flex'
    data-aos={index < 5 ? "fade-zoom-in" :index % 2 === 0 ?"fade-up":"fade-up"}
    data-aos-easing="ease-in-back"
    data-aos-duration="1500"
    >
      <BsFillClipboardCheckFill className={`text-xl ${todo.completed ? "text-green-600" : "text-gray-500/70"} mr-4 cursor-pointer`} />
      <h1 className={`font-bold ${todo.completed ? " text-green-600" : ""} relative  flex-grow mr-4 truncate`}>
        {todo.name}
        {todo.completed ?<span className="before:absolute before:bottom-1/2 before:translate-y-1/2 before:left-0 before:w-full before:border-b-[2px] before:border-green-500 before:content-['']"></span>:""}
      </h1>
      {todo.completed ? <FaStar className='text-xl text-yellow-400 cursor-pointer' /> : <FaStar className='text-xl text-gray-500/50 cursor-pointer' />}
    </div>
  )
}

export default Todo