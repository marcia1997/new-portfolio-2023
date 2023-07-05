import "./about.css";
import Award1 from "../../img/award1.png";
import Award2 from "../../img/award2.png";
import Award3 from "../../img/award3.png";
import Award4 from "../../img/award4.png";
import Award5 from "../../img/award5.png";
import Award6 from "../../img/award6.png";
import Award7 from "../../img/award7.png";
import Award8 from "../../img/award8.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1543652437-15ae836b33e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
        I love to design and create proyects,ideas and dreams.
            <br/>The most powerful thing is giving them life through my hands.
        </p>
        <p className="a-desc">
         I considere myself an self-thought person.<br></br>
         I enjoy learning new things and challanging with.<br></br>
         Learning differents aspects of coding and programming gave me an opportunity of discover myself.
         During my journey I discover how amazing is the power of generate something amazing only with my computer.<br></br>
         
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
