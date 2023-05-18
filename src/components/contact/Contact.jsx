import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
    
        <div className="contact__container container grid">
            <div className="contact__content">

                <div className="contact__info">

                    <div className="contact__card">                        
                        <a href='http://api.whatsapp.com/send?phone=+6285756942080&text=Hello, more information!' className="button button-flex">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                            Whatsapp</a>
                        <span className="contact__card-data"></span>
                       
                    </div>

                    <div className="contact__card">
                        
                        <a href="mailto:mikobangra@gmail.com" className="button button-flex">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                           Email</a>
                        <span className="contact__card-data"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact