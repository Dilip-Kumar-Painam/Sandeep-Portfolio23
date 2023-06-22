import React from "react";
import sisi from "../../assets/sisi.jpg";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, the name is</h2>
          <h1 className="i-name">Painam Sandeep </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Enterprenuer</div>
              <div className="i-title-item">Painam Sambaiah </div>
              <div className="i-title-item">Painam Rama Devi </div>
              <div className="i-title-item">Painam Dilip </div>
              <div className="i-title-item">Painam Narendra</div>
            </div>
          </div>
          <p className="i-desc">
            As a front-end developer, I build the front-end portion of websites
            and web applications— basically the Interface users see and interact
            with. As a developer I've created websites and applications using
            web languages such as HTML, CSS, and JavaScript (React JS) that
            allow users to access and interact with the website.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={sisi} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
