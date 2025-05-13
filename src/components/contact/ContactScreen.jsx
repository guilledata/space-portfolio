import React from 'react'
import './contact-styles.css'; 

export const ContactScreen = () => {
  return (
    <div className='main-container'>
      <div className="stars-container stars-container-home">
          <div className="stars stars-home container-stars"></div>
          <div className="twinkling twinkling-home container-tw"></div>

          <div className='img-center'>
            <div>
              <figure className='asteroid'>
                <img src="/assets/contact/contact-asteroid.webp" alt="asteroid" />
              </figure>
              <figure className='contact-astronauta'>
                <img src="/assets/contact/contact-astronauta.webp" alt="astronaut" />
              </figure>
            </div>

            <div>
              <h2>Write me! I answer all e-mails.</h2>
              <a className="send-mail btn hover-border-2 animate__animated animate__fadeIn"  href="mailto:gfernandezestrella@gmail.com">
                <span>Send mail</span>
              </a>
            </div>

            {/* social media */}
            <div className="contact-container page-contact-container">
                <a href="https://github.com/guilledata" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github">
                        <div className='square square1 square-white-important'></div>
                        <div className='square square2 square-white-important'></div>
                    </i>
                </a>
                <a href="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-estrella-b1096119b/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in">
                        <div className='square square1 square-white-important'></div>
                        <div className='square square2 square-white-important'></div>
                    </i>    
                </a>
                <a href="https://www.instagram.com/guilledata/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram">
                        <div className='square square1 square-white-important'></div>
                        <div className='square square2 square-white-important'></div>
                    </i>  
                </a>
                <a href="https://twitter.com/guilledata" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter">
                        <div className='square square1 square-white-important'></div>
                        <div className='square square2 square-white-important'></div>
                    </i>
                </a>
            </div>

          </div>
          <figure className='satelite'>
            <img src="/assets/contact/satelite.webp" alt="satelite" />
          </figure>

          <div className='page-name'>
            <p>CONTACT</p>
          </div>
      </div>
    </div>
  )
}
