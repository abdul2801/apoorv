import React from "react";

export default function About() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div>
        <h1 className="active">ABOUT</h1>
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
      <h2 className="active">Upcoming CTFs</h2>
      <h3 className="active">Apoorv CTF (FEB-MAR 2024)</h3>
      <p>
        Apoorv CTF is the flagship CTF organised by our college during our
        annual technocultural fest - Apoorv where participants come from all
        over the world. The contest is exclusively designed for undergraduate
        students getting familiar with CTFs.
      </p>
      <h2 className="active">Past CTFs</h2>
      <h3 className="active">Apoorv CTF 2023</h3>
      <p>
        This was the first ever 24-hour CTF organized by our club. It was a fun
        filled event with around 600 participants from all over the world.
        Challenges were made from all categories - from OSINT to Reverse
        Engineering! It was a nail biting performance from the participants -
        with winners not being decided until the last minute!
        <br />
        <a
          style={{ fontStyle: "italic", paddingLeft: 0 }}
          href="https://github.com/CSYClubIIITK/ClubVault/tree/main/Events/Apoorv%20Capture%20The%20Flag'23"
        >
          Read more
        </a>
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
          style={{ paddingLeft: 0, fontStyle: "italic" }}
          href="https://csyclub.iiitkottayam.ac.in/"
        >
          Cyber Security Club - IIIT Kottayam
        </a>
      </footer>
    </div>
  );
}
