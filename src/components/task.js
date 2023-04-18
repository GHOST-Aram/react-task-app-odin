import React from 'react'

const Task = ({task}) => {
  return (<li key={task.id} className='text-green-500 py-4 px-2 border-b-1 border-light-gray'>
    {task.text}</li>)
}

export default Task