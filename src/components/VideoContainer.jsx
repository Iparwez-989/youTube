import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_URL } from '../utils/constants';
import VideoCards from './VideoCards';
import {Link} from 'react-router-dom'

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((vid) =>(
        <Link key={vid.id} to={"/watch?v="+vid.id}>
          <VideoCards details = {vid} />
          </Link>
      ) 
      )}
      
    </div>
  )
}

export default VideoContainer
