import React, { useState } from 'react'
import Todo from './Todo';
import { Task } from '../types/Task';


const tasks : Task[] = [
    {
      id: 1,
      name: "Complete Project Proposal",
      completed: false
    },
    {
      id: 2,
      name: "Design User Interface",
      completed: false
    },
    {
      id: 3,
      name: "Develop Backend API",
      completed: true
    },
    {
      id: 4,
      name: "Implement Frontend Components",
      completed: false
    },
    {
      id: 5,
      name: "Write Documentation",
      completed: false
    },
    {
      id: 6,
      name: "Implement Frontend Components",
      completed: false
    },
    {
      id: 7,
      name: "Write Documentation",
      completed: false
    },
    {
      id: 84,
      name: "Implement Frontend Components",
      completed: false
    },
    {
      id: 9,
      name: "Write Documentation",
      completed: false
    }
  ];

function Todos() {
    const [data,setData] = useState<Task[]>(tasks)
  return (
    <div className='w-full p-2 space-y-4 mt-10 '>
      <div className='flex space-x-2'>
        <h1 className='font-black text-3xl flex'>
          Tasks 
          <p className='inline-block text-gray-400 font-normal'>List</p>
        </h1>
        <div className='w-full flex py-2'>
          <div className='bg-blue-300 w-full '>

          </div>
        </div>
      </div>
        {
            data && data.map((todo : Task, index : number) => (
                <Todo key={index} index={index} todo={todo} />
            ))
        }
        <div 
        className=' rounded-md py-6 px-4 place-items-center flex'
        data-aos="fade-up"
        data-aos-easing="ease-in-back"
        data-aos-duration="1500"
        >
    </div>
    </div>
  )
}

export default Todos