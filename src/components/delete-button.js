import React from 'react'
import {FaTimes} from 'react-icons/fa'

export const Button = ({deleteTask}) => {
  return (
    <button className = 'bg-gray text-red-500 text-lg py-4 px-4 border-none rounded-md'
    onClick={deleteTask}>
        <FaTimes/>    
      </button>
  )
}

export default Button