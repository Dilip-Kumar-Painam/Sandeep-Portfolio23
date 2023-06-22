import React, { useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [wish, setWish] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dt4as4c",
        "template_bwmbmge",
        formRef.current,
        "FHR8e_Dydb3j8nnDf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setWish(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-title">Let's discuss your thoughts</div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 XXXXXX2714
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              dxpainam@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              7200 Dallas Pkwy, Plano, TX 75024 U.S.A
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your thought?</b> Get in touch. Always available for
            discussing the right approach that comes along~~Sandeep.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="Name" name="from_name" required />
            <input type="text" placeholder="Subject" name="subject" required />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea rows="5" placeholder="Message" name="message" required />
            <button>Submit</button>
            {wish && (
              <div className="f-success">{"Successfully Submitted..."}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
