// import React from "react";
import './header.css'
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'


const header = () => {
  return (
    <header>
        <div className="container header_container">

            <h5>Hello I'm</h5>
            <h1>Vishwajeet Vaibhav</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocial/>

            <div className='me'>
                <img src={ME} alt= "me" className='me_image'/>
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header