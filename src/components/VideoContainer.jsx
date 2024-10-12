import VideoCards from './VideoCards';
import {Link} from 'react-router-dom'
import useRecommendedVid from '../utils/useRecommendedVid';

const VideoContainer = () => {
  const[videos] = useRecommendedVid();
  return(
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
