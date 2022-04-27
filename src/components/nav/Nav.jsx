import React, {Component} from 'react';
import {AiOutlineHome, AiOutlineUser, AiOutlineAudit,AiOutlinePhone} from 'react-icons/ai';
import './nav.css'
import {useState} from 'react'

function Nav() {
    const [activeNav, setActiveNav] =useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><AiOutlineAudit/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlinePhone/></a>
            
        </nav>
        
    )
}

export default Nav
