import React, {Component} from 'react';
import './about.css'
import Me from '../../assets/me-about.png'
import {FaAward, FaUserFriends,FaThemeco} from 'react-icons/fa'

function About() {
    return (
        <section id='about'>
            <br></br>
            <h5>Get To Know </h5>
            <h2>About Me</h2>

            <div className="container about__container">
               <div className="about__me">
                  <div className="about__me-image">
                    <img src={Me} alt="About Image"/>
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card"> 
                    <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>3+Years Working Data Science </small>
                        </article>

                        <article className="about__card"> 
                    <FaUserFriends className="about__icon"/>
                        <h5>Experience</h5>
                        <small>3+Years Working Data Visualization </small>
                        </article>
 
                        <article className="about__card"> 
                    <FaThemeco className="about__icon"/>
                        <h5>Experience</h5>
                        <small>3+Years working D3, React, Flask </small>
                        </article>
                </div>
                <p>
                I have been working as a freelance visual journalist for more than 18 years for video, online, print and broadcast media outlets, including NBC News, the New York Times, the History Channel, the Financial Times and many others. 
                I started my career working in both Mexico and the U.S., and I have added programming, cyber security and data to my skillset in the past 10 years. 
                </p>
               <a href="#contact" className='btn btn-primary'>Let's talk </a>
                </div>
            </div> 
        </section>
    )
}

export default About


