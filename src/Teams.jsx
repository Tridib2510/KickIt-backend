import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import React from "react";
import Card from "./card.jsx";
function Team() {
  return (
    <>
      <div className="app">
        <main className="main-content">
          <h1 className="title">Meet Our Team</h1>
          <div className="TeamCard">
            <Card
              name="Unmesh Ghosh"
              pic="Unmesh.jpg"
              role="Team Lead"
              linkedin="https://www.linkedin.com/in/unmesh-ghosh/"
              github="https://www.linkedin.com/in/unmesh-ghosh/"
            />
            <Card
              className="small-text"
              name="Tridib Roy Chowdhury"
              pic="trc.jpg"
              role="Backend Developer"
            />
            <Card
              name="Parthib Biswas"
              pic="Parthib.JPG"
              role="Frontend Developer"
              linkedin="https://www.linkedin.com/in/parthib-biswas-79b06029b/"
              github="https://github.com/ParthibBiswas10"
            />
            <Card
              className="small-text"
              name="Dhritiman Bhattacharjee"
              pic="dhriti.jpg"
              role="Designer"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Team;
