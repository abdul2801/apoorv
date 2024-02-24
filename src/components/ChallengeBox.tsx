import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal/Modal'

type ChallengeBoxProps = {
    title : string,
    difficulty : string
}

export default function ChallengeBox({title, difficulty} : ChallengeBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const bgref = useRef(null);

  useEffect(() => {
    // change a-courses-item_bg color based on difficulty 
   
    const bg = bgref.current as HTMLElement | null;
    if(bg === null) return;
    if(difficulty === "Easy") {
      bg.style.backgroundColor = "var(--green)";
    } else if(difficulty === "Hard") {
      bg.style.backgroundColor = "red";
    }
  

},[])

  return (
    <>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    <div onClick={openModal} className="a-courses_item">
      
    <a href="#" className="a-courses-item_link">
      <div ref={bgref} className="a-courses-item_bg"></div>

      <div className="a-courses-item_title">
        {title}
      </div>

      <div className="a-courses-item_date-box">
        
        <span  className="a-courses-item_date">{difficulty}</span>
      </div>
    </a>
  </div>
  </>
  )
}
