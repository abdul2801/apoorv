import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import useFetchData from "../hooks/useFetchData";

export default function Home() {
  const handleScrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // fetch announcements and define the type of the data
  const data = useFetchData("api/all/announcements");
  const announcement_data = data.data;
  announcement_data?.sort((a: any, b: any) => {
    if(a.date === null || b.date === null) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const loading = data.loading;
  useEffect(() => {
    ScrollReveal().reveal('.container', { delay: 500,});
    // ScrollReveal().reveal('.heading', { delay: 500  });
    ScrollReveal().reveal('.ag-courses_item', { opacity : 0.5 , delay: 500 , interval : 200});
    

  }, []);

  let Announcements : Announcements  = {
    "Announcement 1": {
      title: "Announcement 1",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe recusandae. Ipsam quasi natus eaque",
    },
    "Announcement 2": {
      title: "Announcement 2",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe recusandae. Ipsam quasi natus eaque",
    },
    "Announcement 3": {
      title: "Announcement 3",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe recusandae. Ipsam quasi natus eaque",
    },
  }
  type Announcement = {
    title: string;
    description: string;
  };
  type Announcements = {
    [key: string]: Announcement;
  };






  return (

    
    <div>
      <div className="cont">
        <div className="container">
          <div className="glitch" data-text="APOORV CTF">
            APOORV CTF
          </div>
          <div className="glow">APOORV CTF</div>
          <p className="subtitle">FEB-MAR 2024</p>
        </div>
      </div>
      <div className="faq-cont">
        <div className="heading">
          <span className="faq">Announcements</span>
        </div>

        <div className="ag-courses_box">
          {loading && <p>Loading...</p>}
          { announcement_data?.map( (announcement : any , index) => (
            <Announcement key={announcement.id} title={announcement.title} description={announcement.description} />
          ))}
         
        
        </div>
        <div className="bottom">
          <button className="round" onClick={handleScrolltoTop}>
            <svg
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
            >
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              />
            </svg>
          </button>
        </div>

        <div className="scanlines"></div>
      </div>
    </div>
  );
}
