import React from 'react';
import { Link } from 'react-router-dom';
import './home-styles.css'; 

export const HomeScreen = () => {
    return (
    <div className='main-container'>
        <div className="stars-container stars-container-home">
            <div className="stars stars-home container-stars"></div>
            <div className="twinkling twinkling-home container-tw"></div>

            <div className='home-container'>
                <div className="stars container-stars"></div>
                    <div className="twinkling container-tw"></div>
                <figure className='black-hole'>
                    <img className="planet" src="/assets/home/blackhole.webp" alt="black hole" />
                </figure>

                <div className='home-planet blog-planet'>
                    <figure>
                        <img className="planet animate__animated animate__fadeIn animate__faster" src="/assets/home/blog-p.webp" alt="blog planet" />
                    </figure>
                    <Link className="btn btn-blog hover-border-2 animate__animated animate__fadeIn"  to="/blog">
                        <span>BLOG</span>
                    </Link>
                </div>

                <div className='home-planet contact-planet'>
                    <figure>
                        <img className="planet animate__animated animate__fadeIn animate__faster" src="/assets/home/contact-p.webp" alt="contact planet" />
                    </figure>
                    <Link className="btn btn-contact hover-border-2 animate__animated animate__fadeIn"  to="/contact">
                        <span>CONTACT</span>
                    </Link>
                </div>

                <div className='home-planet aboutme-planet'>
                    <figure>
                        <img className="planet animate__animated animate__fadeIn animate__faster" src="/assets/home/aboutme-p.webp" alt="aboutme planet" />
                    </figure>
                    <Link className="btn btn-aboutme hover-border-2 animate__animated animate__fadeIn"  to="/aboutme">
                        <span>ABOUT ME</span>
                    </Link>
                </div>

                <div className='home-planet projects-planet'>
                    <figure>
                        <img className="planet animate__animated animate__fadeIn animate__faster" src="/assets/home/projects-p.webp" alt="aboutme planet" />
                    </figure>
                    <Link className="btn btn-projects hover-border-2 animate__animated animate__fadeIn"  to="/projects">
                        <span>PROJECTS</span>
                    </Link>
                </div>

                <div className='astronaut-home'>
                    <figure>
                        <img className="planet animate__animated animate__fadeIn animate__faster" src="/assets/home/astronaut-home.webp" alt="astronaut" />
                    </figure>
                </div>

                
            </div>
        </div>
    </div>
    )
}
