import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch, useSelector} from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';

const Livecomments = () => {
  const [liveMessage,setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector(store=>store.chat.message);
  // console.log(selector);
  useEffect(()=>{
    // API POLLING
    const i =  setInterval(()=>{
      // console.log('API POLLING');
      dispatch(addMessage({
        name:generateRandomName(),
        message:"Hello this is live chat"
      }))
    },2000)
    return ()=> clearInterval(i);

  },[])
  return (
    <>
    <div className='border border-black h-[500px] w-full bg-slate-100 rounded-t-xl overflow-y-scroll  flex flex-col-reverse '>
      <div>
      {chatMessages.map((val,index)=> (
        <ChatMessage key={index} name={val.name} message ={val.message} />
      ))}
      {/* <ChatMessage name="Irfan" message="This is message" /> */}
</div>
    </div>
    <form className='w-full py-3 border border-black rounded-b-xl flex items-center justify-evenly' onSubmit={(e)=>{
      e.preventDefault();
      setLiveMessage("")
      dispatch(addMessage({
        name:"Irfan",
        message: liveMessage,
      }))
    }}>
    <input className='mx-2 py-2 border rounded-lg' placeholder='enter your text' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} type="text" />
    <button className='bg-green-500 px-4 py-1 rounded-lg' >Send</button>
  </form>
  </>
  )
}

export default Livecomments
