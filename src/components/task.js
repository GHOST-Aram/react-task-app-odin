import React from 'react'
import Button from './delete-button'
const Task = ({index, task}) => {
  return (<li key={task.id} className='flex flex-row justify-between items-center text-green-500 py-4 px-2 border-b-1 border-light-gray'>
    <h3 className='font-light'>{index + 1}.  {task.text}</h3>
    <Button />
    </li>)
}

export default Task