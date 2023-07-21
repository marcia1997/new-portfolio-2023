import "./about.css";
import { Helmet } from "react-helmet";


import Award1 from "../../img/award1.png";
import Award2 from "../../img/award2.png";
import Award3 from "../../img/award3.png";
import Award4 from "../../img/award4.png";
import Award5 from "../../img/award5.png";
import Award6 from "../../img/award6.png";
import Award7 from "../../img/award7.png";
import Award8 from "../../img/award8.png";
import photo from "../../img/profile.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src={photo} alt=""className="i-img"/>
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">
        <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Modak&display=swap"
          rel="stylesheet"
        />
      </Helmet>
          About me</h2>
        <p className="a-sub">
        I love to design and create proyects,ideas and dreams.
            <br/>The most powerful thing is giving them life through my hands.
        </p>
        <p className="a-desc">
         I considere myself an self-thought person.<br></br>
         I enjoy learning new things and challanging with.
         Learning differents aspects of coding and programming gave me an opportunity of discover myself.
         During my journey I enjoy how amazing is the power of generate something unique only with my computer.<br></br>
         I attend different courses and trainings,going from MERN stack,Python and UI/UX which gave me a big vision and skills about the creation of products,focused in the code side and also  the user needs.<br>
         </br>
         I still have a lot to learn I believe perserverance and hunger of knowledge are my main strengths.
         
        </p>
        
        <div className="container-1">
        <div className="a-award">
          <img src={Award1} alt="" className="a-award-img"/>
          <img src={Award2} alt="" className="a-award-img" />
          <img src={Award3} alt="" className="a-award-img" />
          <img src={Award4} alt="" className="a-award-img" />
         </div>
        </div>
        <div className="container-2">
        <div className="a-award">
          <img src={Award5} alt="" className="a-award-img" />
          <img src={Award6} alt="" className="a-award-img" />
          <img src={Award7} alt="" className="a-award-img" />
          <img src={Award8} alt="" className="a-award-img" />
         </div>
        </div>
      </div> 
      </div>
  );
};

export default About;
