import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-cont">

      <div>
        <h1 className="active" style={{color : "white"}}>ABOUT</h1>
      </div>
      <p>
        Hello hackers! We are a group of buttheads from IIIT Kottayam passionate
        about CTFs. Here, we post about upcoming CTFs organised by us.
      </p>
      <h2 className="active">What is Capture the Flag?</h2>
      <p>
        A capture the flag (CTF) contest is a special kind of cybersecurity
        competition designed to challenge its participants to solve computer
        security problems and/or capture and defend computer systems. The game
        consists of a series of challenges where participants must reverse
        engineer, break, hack, decrypt, or do whatever it takes to solve the
        challenge. The challenges are all set up with the intent of being
        hacked, making it an excellent, legal way to get hands-on experience.
      </p>

      <h2 className="active">Socials</h2>
      <div className="socials">
        <a
          href="https://twitter.com/CsyClub_IIITK"
          className="fa fa-twitter fa-2x"
        ></a>
        <a
          href="https://instagram.com/csyclub_iiitkottayam"
          className="fa fa-instagram fa-2x"
        ></a>
        <a
          href="https://www.linkedin.com/company/csyclub-iiitkottayam/"
          className="fa fa-linkedin fa-2x"
        ></a>
        <a
          href="https://github.com/CSYClubIIITK"
          className="fa fa-github fa-2x"
        ></a>
      </div>
      <footer>
        Organized by{" "}
        <a
          className="link"
          style={{ paddingLeft: 0, fontStyle: "italic" }}
          href="https://csyclub.iiitkottayam.ac.in/"
        >
          Cyber Security Club - IIIT Kottayam
        </a>
      </footer>
    </div>
  );
}
