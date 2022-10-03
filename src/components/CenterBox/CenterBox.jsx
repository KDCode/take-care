import React from "react";
import "./CenterBox.css";
const CenterBox = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <h3>📸 By Photo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>
            <a href="#">Here !</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <h3>🤒 By Symptoms</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>
            <a href="#">Here !</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterBox;
