import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'



function Header() {
    return (
        <header>
            <div  className=".container header__container ">
                <h1>Small Business Applications</h1>
                <h5>Data marketing</h5>
                <h5 className="text-light">Data Scicence and Visualization</h5>
                
                <CTA />
                <HeaderSocials />
               

                 <div className="me">
                    <img src={Me} alt="me" />
                </div> 

                
                <a  href="#contact" className='scroll__down'>Scroll Down</a>
            
            
            </div>
            
        </header>
    )
}

export default Header
