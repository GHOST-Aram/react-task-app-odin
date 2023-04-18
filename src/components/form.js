import React from 'react'

export const Form = ({onTextChange, taskText, onSave}) => {
  const onSubmit = (e) =>{
    e.preventDefault()
    onSave()
    
  }
  return (
    <form onSubmit={(e) =>onSubmit(e)} className='flex flex-row justify-between container py-4'>
        <input type="text" required name="" id=""  value={taskText} onChange={(e) => onTextChange(e.target.value)}
        className='py-4 px-4 border-none bg-light-gray outline-none rounded-md w-60' placeholder='New task' />
        <input type="submit" value="Save Task" className='bg-gray text-light py-4 px-8 border-none rounded-md' />
    </form>
  )
}

export default Form