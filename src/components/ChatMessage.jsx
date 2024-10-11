import React from 'react'
import { USER_IMG } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-2 shadow-red-600 shadow-sm'>
      <img src={USER_IMG} className="h-8" alt="" />
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
