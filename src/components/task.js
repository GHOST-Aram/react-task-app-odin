import React from 'react'

const Task = ({key, task}) => {
  return (
    <li key={key} className='text-green-500'>
        {task.text}
    </li>
  )
}

export default Task