import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex transition-transform ease-in-out duration-300'>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg '>{name}</button>
    </div>
  )
}

export default Button