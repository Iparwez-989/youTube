import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { toggleSideBar } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API,ham_img, USER_IMG, Bell_icon, youtube_logo } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery,setSearchQuery] = useState();
    const [suggestion,setSuggestion] = useState([]);
    const [suggestionBox,setSuggestionBox] = useState(false);
    const dispatch = useDispatch();
    const handleHamClick = ()=>{
        dispatch(toggleSideBar())
    }
    const searchCache = useSelector(store => store.search)
    // console.log(searchCache[searchQuery])
    useEffect(()=>{
      // console.log(searchQuery) 
      if(!searchQuery) return;    // it'll not show undefined(early returning)
      const timer = setTimeout(()=>{
        if(searchCache[searchQuery]){
          setSuggestion(searchCache[searchQuery])
        }else{
           getSearchSuggestion();
        }
      },200);
      return ()=>{
        clearTimeout(timer);
      }
    },[searchQuery])
    const getSearchSuggestion = async()=>{
      console.log("API CALL"+ searchQuery)
      const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json =await data.json();
      // console.log(json[1])
      setSuggestion(json[1]);
      dispatch(cacheResults({
        [searchQuery]:json[1]
      }))

    }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
      <div className='flex col-span-1  items-center gap-4 '>
        <img  onClick={()=>handleHamClick()} className='h-10 cursor-pointer' src = {ham_img} alt='ham'/>
        <img className='h-8' src={youtube_logo} alt="youtube" />

      </div>
      <div className=' col-span-10 place-content-center'>
        <div>
        <input className='border border-black p-2  w-1/2 rounded-l-full' placeholder='Search' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setSuggestionBox(true)} onMouseEnter={()=>setSuggestionBox(true)}   />
        <button className='text-center border border-black  rounded-r-full bg-gray-400  p-2 '>Search</button>
      </div>
      {suggestionBox&&(<div className='fixed mx-1 bg-gray-50 w-[27.5rem] rounded-lg' onMouseLeave={()=>setSuggestionBox(false)}>
        <ul className='mx-2 '>
          
          {suggestion.map((query,index) => <li key={index} onClick={()=>{setSearchQuery(query)}} className='py-2 shadow-sm hover:bg-gray-300 rounded-md'>{query}</li>)}
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
