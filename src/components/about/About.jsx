import React from "react";
import "./About.css";
import Award1 from "../../assets/awards.jpg";
import Sasi from "../../assets/sasi.jfif";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card.bg"></div>
        <div className="a-card">
          <img src={Sasi} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          In this portfolio, you will find a short description which includes
          family, awards. Also you can write me an email.
        </p>
        <p className="a-desc">
          My name is Painam Sandeep Kumar aka Sasi, and you can wish me on June
          29th every year by writing your thoughts in the form below. I have
          done my Bachelor's and always wanted to be an enterprenuer. I am
          passionate about my career, family and the people around me.
        </p>
        <div className="a-award">
          <img src={Award1} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Atheletic Awards </h4>
            <p className="a-award-desc">
              Have participated and won several awards, accolades while
              schooling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
