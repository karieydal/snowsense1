"use client";
import React from "react";
import "../styles/myndirhome.css";

function Myndirhome() {
  return (
    
    <div>
      <div className="logo_mynd">
          <img src="./pictures/pols_logo_800.jpg" alt="" />
      </div>
    <div>
        <h1>Snowsense</h1>
    </div>
      <nav>
        <div className="english">
          <a href="/">Íslenska</a>
        </div>
        <div className="row">
          <div className="column">
            <div className="image">
              <a href="data">
                <img src="./pictures/forsida2.jpeg" alt="" className="default-image1" />
                <img src="./pictures/gognenglish.jpeg" alt="" className="hover-image1" />
              </a>
            </div>
          </div>
          <div className="column2">
            <div className="image">
              <a href="usa">
                <img src="./pictures/forsida1.jpeg" alt="" className="default-image2" />
                <img src="./pictures/englishmeters.jpeg" alt="" className="hover-image2" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Myndirhome;


