import React from 'react'
import "./Share.css";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";


function share() {
  return (
    <div className='share'>
      <div className="shareTop">
        <img src="/assets/person/1.png" alt="" className='shareProfileImg'/>
        <input
          type="text"
          className='shareInput'
          placeholder='今何してる？'/>
      </div>
      <hr className="shareHr" />

      <div className="shareButtons">
        <div className="shareOptions">
          <div className="shareOption">
            <Image className='shareIcon'/>
            <span className='shareOptionText'>写真</span>
          </div>
          <div className="shareOption">
            <Gif className='shareIcon'/>
            <span className='shareOptionText'>Gif</span>
          </div>
          <div className="shareOption">
            <Face className='shareIcon'/>
            <span className='shareOptionText'>気持ち</span>
          </div>
          <div className="shareOption">
            <Analytics className='shareIcon'/>
            <span className='shareOptionText'>投票</span>
          </div>
        </div>
        <button className="shareButton">投稿</button>
      </div>
    </div>
  )
}

export default share
