import React from 'react'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
const Sidebar = () => {
    const isSideBar = useSelector(store=> store.app.isSideBarOpen);
    // or else we can do early return {if(!isSideBar) return null}
    return isSideBar && (
    <div className='p-5 m-2 border shadow-lg w-64'>
        <p className='text-xl font-bold'><Link to='/'>Home</Link> </p>
        <p className='text-xl font-bold'>Shorts</p>
        <p className='text-xl font-bold'>Subscription</p>
      <p className='text-xl font-bold pt-5'>You</p>
        <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Watch later</li>
            <li>Liked Videos</li>
            <li>Downloads</li>
        </ul>
      <p className='text-xl font-bold pt-5'>Explore</p>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>Fashion&Beauty</li>
        </ul>
      
    </div>
  )
}

export default Sidebar
