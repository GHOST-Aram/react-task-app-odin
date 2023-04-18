import React from 'react'

export const Button = ({Icon, handleClick, textClass}) => {
  return (
    <button className = {`bg-gray ${textClass}  text-lg py-4 px-8 border-none rounded-md`}
    onClick={handleClick}>
        <Icon/>    
      </button>
  )
}

export default Button