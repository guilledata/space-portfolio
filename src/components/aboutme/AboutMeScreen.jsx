import React from 'react'
import './aboutme-styles.css';

export const AboutMeScreen = () => {
  return (
    <div className='main-container'>
      <div className="stars-container stars-container-home">
          <div className="stars stars-home container-stars"></div>
          <div className="twinkling twinkling-home container-tw"></div>

        <div className='medium-container'>

          <div className='small-parragraph'>
            <h1 className='title-aboutme animate__animated animate__fadeInUp '>Hi, I'm Guillermo</h1>
            <p className='animate__animated animate__fadeInUp '>I am a front-end developer. Currently I work in a Mexican marketing 
            company with an emphasis on creating responsive websites that generate 
            interest for the user in order to generate prospects.</p>
          </div>
          <div className='small-parragraph am-parrafo2'>
            <p >I am a front-end developer. Currently I work in a Mexican marketing 
            company with an emphasis on creating responsive websites that generate 
            interest for the user in order to generate prospects.</p>
          </div>
          
          
          
          
        </div>

        <div className='composicion-vr'>
            <figure className='aboutme-planetface'>
              <img src="/assets/aboutme/planet-aboutme.webp" alt="planet" />
            </figure>
            <figure className='vr-face'>
              <img src="/assets/aboutme/vr-face.webp" alt="vr" />
            </figure>
          </div>
          

          <figure className='aboutme-satelite'>
            <img src="/assets/aboutme/aboutme-satelite.webp" alt="satelite" />
          </figure>
          <div className='page-name'>
            <p>ABOUT ME</p>
          </div>
      </div>
    </div>
  )
}
