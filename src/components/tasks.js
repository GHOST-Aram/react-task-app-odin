import React from 'react'
import Task from './task'
const Tasks = ({editTask, deleteTask, tasks}) => {
  return (
    <ul className='text-left container px-8 border-solid rounded-lg py-8 border-light-gray'>
        {tasks.map((task, index) => <Task editTask={editTask} deleteTask={deleteTask} index = {index} key ={task.id} task={task} />)}
    </ul>
  )
}

export default Tasks