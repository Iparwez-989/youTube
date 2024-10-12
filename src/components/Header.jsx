import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { toggleSideBar } from '../utils/appSlice';
import {ham_img, USER_IMG, Bell_icon, youtube_logo } from '../utils/constants';
import useSuggestionBox from '../utils/useSuggestionBox';


const Header = () => {
  const [searchQuery,suggestion,suggestionBox,setSearchQuery,setSuggestion,setSuggestionBox] = useSuggestionBox();
  const dispatch = useDispatch();
  const handleHamClick = ()=>{
       dispatch(toggleSideBar())
  }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
      <div className='flex col-span-1  items-center gap-4 '>
        <img  onClick={()=>handleHamClick()} className='h-10 cursor-pointer' src = {ham_img} alt='ham'/>
        <img className='h-8' src={youtube_logo} alt="youtube" />

      </div>
      <div className=' col-span-10 place-content-center'>
        <div>
        <input className='border border-black p-2  w-1/2 rounded-l-full' placeholder='Search' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onClick={()=>setSuggestionBox(true)}    />
        <button className='text-center border border-black  rounded-r-full bg-gray-400  p-2 '>Search</button>
      </div>
      {suggestionBox&&(<div className='fixed mx-1 bg-gray-50 w-[27.5rem] rounded-lg' >
        <ul className='mx-2 '>
          
          {suggestion.map((query,index) => <li key={index} onClick={()=>{
            setSearchQuery(query)
            setSuggestionBox(false)
            }} className='py-2 shadow-sm hover:bg-gray-300 rounded-md'>{query}</li>)}
        </ul>
      </div>)}
      </div>
      <div className='flex col-span-1 justify-end items-center '>
        <img className='h-8 mx-4' src={Bell_icon} alt="bell" />
        <img className='h-9' src={USER_IMG} alt="admin" />

      </div>
    </div>
  )
}

export default Header
