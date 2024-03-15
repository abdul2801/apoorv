import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal/Modal'

type ChallengeBoxProps = {
    title : string,
    difficulty : string,
    hints : string[],
    tags : string[],
    description : string
    attachments? : {
      [key: string]: string;
    }
}
const capitalize = (s : string) => { 
  if(s.length === 0) return s;
  
  return s.charAt(0).toUpperCase() + s.slice(1) }


export default function ChallengeBox(data : any) {
  console.log(data)
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const bgref = useRef(null);

  useEffect(() => {
    // change a-courses-item_bg color based on difficulty 
    const bg = bgref.current as HTMLElement | null;
    if(bg === null) return;
    if(capitalize(data.challenge_difficulty) === "Easy") {
      bg.style.backgroundColor = "var(--green)";
    } else if(capitalize(data.challenge_difficulty) === "Hard") {
      bg.style.backgroundColor = "red";
    }
  

},[])

  return (
    <>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={data}  />
    <div onClick={openModal} className="a-courses_item">
      
    <a href="#" className="a-courses-item_link">
      <div ref={bgref} className="a-courses-item_bg"></div>

      <div className="a-courses-item_title">
        {data.challenge_title}
      </div>

      <div className="a-courses-item_date-box">
        
        <span  className="a-courses-item_date">{capitalize(data.challenge_difficulty)}</span>
      </div>
    </a>
  </div>
  </>
  )
}
