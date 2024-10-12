import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_URL } from '../utils/constants';
const useRecommendedVid = () => {
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
  return [videos];
}

export default useRecommendedVid
