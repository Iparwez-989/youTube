import React from 'react'
// import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
// import WatchPage from './WatchPage'
import {Outlet} from "react-router-dom"

const Body = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>    
      {/* <MainContainer />
      <WatchPage /> instead of this we are using outlet for routing the sidebar will
      be same in the page maincontainer and watchpage will be change according to path*/}
      <Outlet />
    </div>
  )
}

export default Body
