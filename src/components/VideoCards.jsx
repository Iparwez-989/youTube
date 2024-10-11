import React from 'react'

const VideoCards = ({details}) => {
    // console.log(details)
    const {snippet,statistics} = details;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='w-64 p-2 m-2 shadow-md'>
      
      <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
      <p className='font-bold line-clamp-2 overflow-hidden'>{title}</p>
      <p className='text-sm'>{channelTitle}</p>
      <p className='text-sm'>{statistics.viewCount} views</p>

    </div>
  )
}

export default VideoCards
