import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Rightbar from '../../components/rightbar/Rightbar'
import  "./Profile.css";

function Profile() {
  return (
     <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className='profileCoverImg'
              />
              <img
                src="assets/person/1.png"
                alt=""
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className="profileInfoName">Usa Code</h4>
              <span className="profileInfoDesc">ドバイでパティシエしてます</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <TimeLine/>
          <Rightbar/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
