import React from "react";
import "./work.css";
import Loginconten from './Loginconten'
import Rockpaperscissors from './Rockpaperscissors'

// import Img from "../../assets/search.jpg";
// import Kopi from "../../assets/Screenshot 2023-04-27 093130.png";

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Portofolio</h2>
      <span className="section__subtitle">My Project</span>
      <div className="work__container container grid">
        <Loginconten />
        <Rockpaperscissors/>
    </div>
    </section>
  );
};

export default Work;
