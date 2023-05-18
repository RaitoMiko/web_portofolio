import React from "react";
import WebGame from "../../assets/game_gunting.png";

const Rockpaperscissors = () => {
  return (
    <div className="work__content">
    <h3 className="work__title">Rock Paper Scissors Game
    <img src={WebGame} alt="" className="work__img" />
    </h3>
    <div className="work__box">
      <div className="work__group">
        <div className="work__data">
          <i class="uil uil-github-alt"></i>
          <div>
            {/* <h3 className="skills__name">Html</h3> */}
            <span className="work__level">Rock Paper Scissors Web Game : Html, CSS, Bootstrap, Javascript.</span>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Rockpaperscissors;