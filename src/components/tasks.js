import React from 'react'
import Task from './task'
const Tasks = ({tasks}) => {
  return (
    <ul className='text-left container px-8 border-solid rounded-lg py-8 border-light-gray'>
        {tasks.map((task) => <Task key ={task.id} task={task} />)}
    </ul>
  )
}

export default Tasks