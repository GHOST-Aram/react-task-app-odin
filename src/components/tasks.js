import React from 'react'
import Task from './task'
const Tasks = ({tasks}) => {
  return (
    <ul>
        {

        tasks.map((task, index) => <Task key ={index} task={task} />)
        }
    </ul>
  )
}

export default Tasks