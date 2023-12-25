import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm'>
       <img
          className="h-12"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL0xm6dUTEVbYn_suX7dMuhA05fIIb_pATA&usqp=CAU"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        </div>
  )
}

export default ChatMessage