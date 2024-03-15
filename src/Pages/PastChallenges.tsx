import React, { useState } from "react";
import "./PastChallenges.css";
import ChallengeBox from "../components/ChallengeBox";
import useFetchData from "../hooks/useFetchData";
import {
  parseChallenges,
  get_all_categories,
  get_all_tags,
} from "../hooks/parseChallenges";
export default function PastChallenges() {
  let genres = ["Genre 1", "Genre 2", "Genre 3"];

  
  type Challenge = {
    title: string;
    difficulty: string;
    hints: string[];
    tags: string[];
    description: string;
    // key pair value for attachments
    attachments?: {
      [key: string]: string;
    };
  };
  type Challenges = {
    [genre: string]: Challenge[];
  };

  // fetch challenges
  const data = useFetchData("api/all/challenges");
  const categories = get_all_categories(data.data);
  // parse the challenges
  const Challenges = parseChallenges(data.data);
  const tags = get_all_tags(data.data);
  const loading = data.loading;
  const error = data.error;

  let [activeTags, setActiveTags] = useState<string[]>([]);
  const tagClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // add to active tags and remove if already present
    const tag = e.currentTarget.textContent as string;
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  return (
    <div className="past_cont">
      <h1 className="active">Challenges</h1>

      <div className="filters tags-cont">
        {/* add active tags first */}
        {activeTags.map((tag,i) => (
          <div key={i} className="tags filter active-filter" onClick={tagClick}>
            <div
              style={{
                textShadow:
                  "-1px 0 #27ac32, 1px 0 #27ac32, 0 -1px #27ac32, 0 1px #27ac32",
              }}
            >
              {tag}
            </div>
          </div>
        ))}
        {/* add remaining tags */}
        {tags?.map(
          (tag,i) =>
            !activeTags.includes(tag as string) && (
              <div key={i} className="tags filter" onClick={tagClick}>
                <div>{tag as string}</div>
              </div>
            )
        )}
      </div>
      <div className="">
        {/* loading */}
        {loading && <div>Loading...</div>}
        {/* error */}
        {categories.map((genre: any,i) => (
          <div key={i} className="genre_cont">
            <h2 className="genre_heading active">{genre}</h2>
            <div className="challenges_cont">
              {/* {activeTags.length > 0
                ? challenges[genre]
                    ?.filter((challenge) =>
                      // challenge.tags.some((tag) => activeTags.includes(tag))
                      activeTags.every((tag) => challenge.tags.includes(tag))
                    )
                    ?.map((challenge) => <ChallengeBox {...challenge} />)
                : challenges[genre]?.map((challenge) => (
                    <ChallengeBox {...challenge} />
                  ))} */}
              {activeTags.length > 0
                ? Challenges[genre]
                    ?.filter((challenge: any) =>
                      activeTags.every(
                        (tag) =>
                          challenge.tags.includes(tags) ||
                          challenge.event_name == tag
                      )
                    )
                    ?.map((challenge : any,i : Number) => <ChallengeBox {...challenge} key={i} />)
                : Challenges[genre]?.map((challenge: any , i : Number) => (
                    <ChallengeBox key={i} {...challenge}/>
                  ))}
            </div>
            <div className="line" style={{}}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
