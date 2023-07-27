import React from 'react'
import p3 from '../../assets/p3.png'

const PortofolioWeb1 = () => {
  return (
    <div className="work__content">
      <h3 className="work__title">Web Portofolio
      <img src={p3} alt="" className="work__img" />
      </h3>
      <div className="work__box">
        <div className="work__group">
          <div className="work__data">
            <i className="uil uil-github-alt"></i>
            <div>
              {/* <h3 className="skills__name">Html</h3> */}
              <span className="work__level">Personal Web Portofolio</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PortofolioWeb1