import React, { useState } from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title section__title-education">Education</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">                  
                    <div className="qualification__sections">
                        <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"    
                    }>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Teknik Informatika</h3>
                                    <span className="qualification__subtitle">Universitas Muslim Indonesia</span>

                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                    </div> 2015 - 2022 
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    {/* <span className="qualification__line"></span> */}
                                </div>

                                <div>
                                    <h3 className="qualification__title"> Fullstack Web Developer</h3>
                                    <span className="qualification__subtitle">Binar Academy</span>

                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                    </div> 2022 - 2023
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification