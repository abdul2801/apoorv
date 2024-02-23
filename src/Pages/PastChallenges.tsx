import React from "react";
import "./PastChallenges.css";
import ChallengeBox from "../components/ChallengeBox";
export default function PastChallenges() {
  let genres = ["Genre 1", "Genre 2", "Genre 3", "Genre 4"];
  return (
    <div className="past_cont">
      <h1 className="active">Challenges</h1>

      <div className="">
          {genres.map((genre) => (
            <div className="genre_cont">
               <h2 className="genre_heading active">{genre}</h2>
               <div className="challenges_cont">
     
                <ChallengeBox title="Challenge 1" description="Description 1" />
                <ChallengeBox title="Challenge 2" description="Description 2" />
                <ChallengeBox title="Challenge 3" description="Description 3" />
                <ChallengeBox title="Challenge 4" description="Description 4" />
                
               </div>
            </div>
            
            
            
            ))}
          
         
        </div>
      </div>
  
  );
}
