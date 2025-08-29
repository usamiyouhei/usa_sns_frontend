import React from 'react'
import "./Home.css";
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import TimeLine from '../../components/timeline/TimeLine'


export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <TimeLine/>
        <Rightbar/>
      </div>
    </>
    )
}
