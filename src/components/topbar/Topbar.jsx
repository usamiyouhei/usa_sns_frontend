import React from 'react'
import { Search, Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>Usa SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input 
            type="text" 
            className="searchInput" 
            placeholder='探し物は何ですか？'
          />
        </div>
      </div>
      <div className="topbrRight">
        <div className="topbarIconItem">
          <Chat/>
          <span className='topbarIconBadge'>1</span>
        </div>
        <div className="topbarIconItem"> 
          <Notifications/>
          <span className='topbarIconBadge'>2</span>
        </div>
      </div>
      <img src="/assets/person/1.png" alt="" className='topbarImg'/>
    </div>
  )
}
