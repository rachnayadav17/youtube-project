import React, { useState } from 'react'
import { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generate, makeid } from '../utils/helper'

const LiveChat = () => {
    const[liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();

    const ChatMessages=useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        const i=setInterval(()=>{
            //api polling
            console.log("api polling")
            dispatch(addMessage({
                name:generate(),
                message:makeid(20)
            }))

        },1500);


        return ()=>clearInterval(i);

    },[])

  return (
    <>
    <div className='w-full ml-2 h-[500px] p-2 border border-black bg-white-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div> {
        ChatMessages.map((c,i)=>(
        <ChatMessage key={i} name={c.name} message={c.message}/>))
       }
       </div>
        </div>
        <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
            e.preventDefault()
            console.log("on submit")
            dispatch(addMessage({
                name:"Rachna",
                message:liveMessage,
            }))
            setLiveMessage("");
        }}>
        <input className='px-2 w-64 border border-black' type="text" value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value)
        }}/>
        <button className='px-2 mx-2 bg-green-100'>Send</button>
       </form>
        </>
  )
}

export default LiveChat