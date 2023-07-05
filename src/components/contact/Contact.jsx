import "./contact.css";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/git.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import anime from 'animejs';
import React, { useEffect } from 'react';





const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "marciavaz97",
        "template_zxxws5g",
        formRef.current,
        "user_SURBd9ZwQa7Zl4KVAdvsw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <div className="c">
      <div className="c-bg">
      </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's magic!</h1>
          <div className="c-info">
            <div className="c-info-item">
            <a href="https://www.w3schools.com/" alt="">
              <img src={Email} className="c-icon" />
             </a>
            </div>
            <div className="c-info-item">
            <a href="https://www.w3schools.com/" alt ="">
              <img src={LinkedIn} className="c-icon" />
             </a>
            </div>
            <div className="c-info-item">
            <a href="https://www.w3schools.com/" alt="">
              <img src={Github} className="c-icon" />
             </a>
            </div>
            </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Your message had been sent.Thank you:)"}
          </form>
        </div>
      </div>
    </div>
  );
 
};

export default Contact;
