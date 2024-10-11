import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/appSlice';
import {useSearchParams} from 'react-router-dom'
import CommentContainer from './CommentContainer';
import Livecomments from './Livecomments';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    // console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar());
    },[])
  return (
    <div className='w-full'>
    <div className="p-4 flex w-full">
      <div className='w-full'>
      <iframe  width="1020" height="500" src={"https://www.youtube.com/embed/"+videoId+"?si=Yv_m3lji-SYdOqjH&autoplay=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className='ml-2 w-full'>
        <Livecomments />
      </div>
    </div>
    <div className=''>
      <CommentContainer />
    </div>
    </div>
  )
}

export default WatchPage
