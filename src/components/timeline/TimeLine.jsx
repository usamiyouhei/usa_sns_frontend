import React from 'react'
import  "./TimeLine.css";
import Share from "../share/Share";

function TimeLine() {
  return (
    <div className='timeline'>
     <div className="timelineWrapper">
      <Share/>
      {/* <Post/> */}
     </div>
    </div>
  )
}

export default TimeLine
