import React from 'react'
import {FaTimes} from 'react-icons/fa'

export const Button = () => {
  return (
    <button className = 'bg-gray text-red-500 text-lg py-4 px-4 border-none rounded-md'>
        <FaTimes/>    
      </button>
  )
}

export default Button