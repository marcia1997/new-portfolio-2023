import "./contact.css";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/git.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";





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
      
<div class="shadow"></div>
      <div className="c-bg">
      <div class="stars-container">
	<div class="stars">
		<div></div><div></div><div></div>
	</div>
	<div class="stars">
		<div></div><div></div><div></div>
	</div>
	<div class="stars">
		<div></div><div></div><div></div>
	</div>
	<div class="stars">
		<div></div><div></div><div></div>
	</div>
	<div class="stars-2"></div>
	<div class="stars-2"></div>
	<div class="stars-2"></div>
</div>

<div class="moon"></div>

<div class="planet-container">
	<div class="planet-ring2"></div>
	<div class="planet"></div>	
	<div class="shine"></div>
	<div class="shine-2"></div>
	<div class="planet-ring"></div>
	<div class="planet-crater"></div>
</div>

      </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className="c-title">
          <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Modak&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      Let's magic!</h2>
          <div className="c-info">
            <div className="c-info-item">
            <a href="https://mail.google.com/mail/u/?authuser=marciadenisevazquez@gmail.com" alt="">
              <img src={Email} className="c-icon" />
             </a>
            </div>
            <div className="c-info-item">
            <a href="https://www.linkedin.com/in/marcia-denise-vazquez-bellagamba-12779321a/" alt ="">
              <img src={LinkedIn} className="c-icon" />
             </a>
            </div>
            <div className="c-info-item">
            <a href="https://github.com/marcia1997/" alt="">
              <img src={Github} className="c-icon" />
             </a>
            </div>
            </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch.I would love to hear from you
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
