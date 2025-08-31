import React from 'react'
import "./Post.css";

function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <img src="./assets/person/1.png" alt="" className='postProfile'/>
          <span className='postUserName'>Usa Code</span>
          <span className="postDate">5分前</span>
        </div>
        <div className="postRight"></div>
      </div>
    </div>
  )
}

export default Post
