import React from 'react'

type ChallengeBoxProps = {
    title : string,
    description : string
}

export default function ChallengeBox({title, description} : ChallengeBoxProps) {
  return (
    <div className="a-courses_item">
    <a href="#" className="a-courses-item_link">
      <div className="a-courses-item_bg"></div>

      <div className="a-courses-item_title">
        {title}
      </div>

      <div className="a-courses-item_date-box">
        
        <span className="a-courses-item_date">{description}</span>
      </div>
    </a>
  </div>
  )
}
