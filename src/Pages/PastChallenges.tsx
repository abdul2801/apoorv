import React from "react";
import "./PastChallenges.css";
import ChallengeBox from "../components/ChallengeBox";
import Modal from "../components/Modal/Modal";
export default function PastChallenges() {
  let genres = ["Genre 1", "Genre 2", "Genre 3", "Genre 4"];
 
  //change color of tag on click
  const tagClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tag = e.target as HTMLElement;
    tag.classList.toggle("active-filter");
  };
  return (
    <div className="past_cont">
      <h1 className="active">Challenges</h1>

       <div className="filters tags-cont">
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>
       <div className='tags filter' onClick={tagClick}><div>Tag 1</div></div>




       </div>
      <div className="">
          {genres.map((genre) => (
            <div className="genre_cont">
               <h2 className="genre_heading active">{genre}</h2>
               <div className="challenges_cont">
     
                <ChallengeBox title="Challenge 1" difficulty="Easy" />
                <ChallengeBox title="Challenge 2" difficulty="Medium" />
                <ChallengeBox title="Challenge 3" difficulty="Hard" />
                <ChallengeBox title="Challenge 4" difficulty="Easy" />
                
               </div>
            </div>
            
            
            
            ))}
          
         
        </div>
      </div>
  
  );
}
