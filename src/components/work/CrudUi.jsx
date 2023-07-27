import React from 'react'
import crud from '../../assets/crud.png'

const CrudUi = () => {
  return (
    <div className="work__content">
      <h3 className="work__title">Crud Ui
      <img src={crud} alt="" className="work__img" />
      </h3>
      <div className="work__box">
        <div className="work__group">
          <div className="work__data">
            <i className="uil uil-github-alt"></i>
            <div>
              {/* <h3 className="skills__name">Html</h3> */}
              <span className="work__level">CRUD UI</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CrudUi