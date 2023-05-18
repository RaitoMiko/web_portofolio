import React from "react";
import LoginM from "../../assets/loginM.png";

const Loginconten = () => {
  return (
    <div className="work__content">
      <h3 className="work__title">Login
      <img src={LoginM} alt="" className="work__img" />
      </h3>
      <div className="work__box">
        <div className="work__group">
          <div className="work__data">
            <i class="uil uil-github-alt"></i>
            <div>
              {/* <h3 className="skills__name">Html</h3> */}
              <span className="work__level">Login & Register use JWT: Node JS, Express, React JS, and Postgres.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loginconten;