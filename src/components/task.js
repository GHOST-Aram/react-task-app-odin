import React from 'react'
import Button from './button'
import {FaTimes} from 'react-icons/fa'
import {FaPen} from 'react-icons/fa'

const Task = ({index, task, deleteTask, editTask}) => {
  return (<li key={task.id} className='flex flex-row justify-between items-center text-green-500 py-4 px-2 border-b-1 border-light-gray'>
    <h3 className='font-light'>{index + 1}.  {task.text}</h3>
    <div>
      <Button Icon={FaPen} handleClick={() => editTask(task.id)} textClass={'text-yellow-500'}/>
      <Button Icon={FaTimes} handleClick={() => deleteTask(task.id)} textClass={'text-red-500'}/>
    </div>
    </li>)
}

export default Task