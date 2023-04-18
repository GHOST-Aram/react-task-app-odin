import React from 'react'

export const Form = () => {
  return (
    <form className='flex flex-row justify-between container py-4'>
        <input type="text" name="" id="" 
        className='py-4 px-4 border-none bg-light-gray outline-none rounded-md w-60' placeholder='New task' />
        <input type="submit" value="Save Task" className='bg-gray text-light py-4 px-8 border-none rounded-md' />
    </form>
  )
}

export default Form