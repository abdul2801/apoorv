import React, { useState } from "react";
import "./PastChallenges.css";
import ChallengeBox from "../components/ChallengeBox";
import Modal from "../components/Modal/Modal";
export default function PastChallenges() {
  let genres = ["Genre 1", "Genre 2", "Genre 3", "Genre 4"];
  let tags  = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "lorem ipsum","Tag 5" , "Tag 6" , "Tag 7" , "Tag 8" , "Tag 9"];
  let [activeTags, setActiveTags] = useState<string[]>([]);

  const tagClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // add to active tags and remove if already present

    const tag = e.currentTarget.textContent as string;
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
    // toggle active class
    




    
  };
  return (
    <div className="past_cont">
      <h1 className="active">Challenges</h1>

      <div className="filters tags-cont">
        {/* add active tags first */}
        {activeTags.map((tag) => (
          <div className="tags filter active-filter"  onClick={tagClick}>
            <div style={{textShadow : "-1px 0 #27ac32, 1px 0 #27ac32, 0 -1px #27ac32, 0 1px #27ac32"}} >{tag}</div>
          </div>
        ))}
        {/* add remaining tags */}
        {tags.map((tag) => (
          !activeTags.includes(tag) &&
          <div className="tags filter" onClick={tagClick}>
            <div>{tag}</div>
          </div>
        ))}
       
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
