import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './navbar-styles.css';
import 'animate.css';
import { MenuButtom } from './MenuButtom';
import { ClickButtom } from './ClickButtom';
import ChangeColor from './ChangeColor';
import ChangeHomeColor from './ChangeHomeColor';



export const Navbar = () => {

    

    return (
        <Fragment>
        
            <MenuButtom />

            <div id='menu-container' className='full-menu hide-menu'>

                

                <div className="stars-container">
                    <div className="stars container-stars"></div>
                    <div className="twinkling container-tw"></div>

                <div className='container-selector '>
                    <div className='black-bar'></div>
                    <nav className="navbar">
                            
                        <Link className="navbar-item navbar-item-home animate__animated animate__fadeInLeft frames"  to="/" onMouseOver={ChangeHomeColor} onClick={ClickButtom}>
                            HOME
                        </Link>
                        <Link className="navbar-item animate__animated animate__fadeInLeft " to="/projects" onMouseOver={ChangeColor} onClick={ClickButtom} >
                            PROJECTS
                        </Link>
                        <Link className="navbar-item animate__animated animate__fadeInLeft " to="/aboutme" onMouseOver={ChangeColor} onClick={ClickButtom} >
                            ABOUT ME
                        </Link>
                        <Link className="navbar-item animate__animated animate__fadeInLeft " to="/blog" onMouseOver={ChangeColor} onClick={ClickButtom} >
                            BLOG
                        </Link>
                        <Link className="navbar-item animate__animated animate__fadeInLeft " to="/contact" onMouseOver={ChangeColor} onClick={ClickButtom} >
                            CONTACT
                        </Link>
                    </nav>

                    {/* social media */}
                    <div className="contact-container">
                        <a href="https://github.com/guilledata" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github">
                                <div className='square square1'></div>
                                <div className='square square2'></div>
                            </i>
                        </a>
                        <a href="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-estrella-b1096119b/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in">
                                <div className='square square1'></div>
                                <div className='square square2'></div>
                            </i>    
                        </a>
                        <a href="https://www.instagram.com/guilledata/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram">
                                <div className='square square1'></div>
                                <div className='square square2'></div>
                            </i>  
                        </a>
                        <a href="https://twitter.com/guilledata" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter">
                                <div className='square square1'></div>
                                <div className='square square2'></div>
                            </i>
                        </a>
                    </div>

                </div>

                <figure className='menu-planet'>
                    <img className="planet active-planet animate__animated animate__fadeInRight animate__faster" src="/assets/menu/home.webp" alt="sun" />
                    <img className="planet animate__animated animate__fadeInRight animate__faster" src="/assets/menu/projects.webp" alt="planet" />
                    <img className="planet animate__animated animate__fadeInRight animate__faster" src="/assets/menu/aboutme.webp" alt="planet" />
                    <img className="planet animate__animated animate__fadeInRight animate__faster" src="/assets/menu/blog.webp" alt="planet" />
                    <img className="planet animate__animated animate__fadeInRight animate__faster" src="/assets/menu/contact.webp" alt="planet" />
                </figure>

                
                </div>
            </div>
        </Fragment>
    )
}
