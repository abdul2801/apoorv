import React, { useEffect } from "react";

export default function Home() {
  const handleScrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    ScrollReveal().reveal('.container', { delay: 500,});
    ScrollReveal().reveal('.heading', { delay: 500  });
    ScrollReveal().reveal('.ag-courses_item', { delay: 500 , interval : 16});
    

  }, []);




  return (
    
    <div>
      <div className="cont">
        <div className="container">
          <div className="glitch" data-text="APOORV CTF">
            APOORV CTF
          </div>
          <div className="glow">APOORV CTF</div>
          <p className="subtitle">APOORV CTF &emsp; &emsp; FEB-MAR 2024</p>
        </div>
      </div>
      <div className="faq-cont">
        <div className="heading">
          <span className="faq">Announcements</span>
        </div>

        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="./about.html" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <h2 className="ag-courses-item_title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, voluptatibus.?
              </h2>
              <p className="ag-courses-item_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                saepe recusandae. Ipsam quasi natus eaque
              </p>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="./about.html" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <h2 className="ag-courses-item_title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, voluptatibus.?
              </h2>
              <p
                className="ag-courses-item_title"
                style={{ textShadow: "none" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam amet quia, harum necessitatibus magnam animi molestias
                quidem, accusantium vero, cumque unde! Repellat modi vero
                voluptates nihil tenetur et exercitationem facilis.
              </p>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="./about.html" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <h2 className="ag-courses-item_title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, voluptatibus.?
              </h2>
              <p className="ag-courses-item_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                saepe recusandae. Ipsam quasi natus eaque
              </p>
            </a>
          </div>
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
