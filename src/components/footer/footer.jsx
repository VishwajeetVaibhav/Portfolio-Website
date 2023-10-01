import './footer.css'
import React from 'react'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'>VISHWAJEET VAIBHAV</a>


        <ul className='permalinks'>
            <li className='linkss'><a href='#'>Home</a></li>
            <li className='linkss'><a href='#about'>About</a></li>
            <li className='linkss'><a href='#experience'>Experience</a></li>
            <li className='linkss'><a href='#services'>Services</a></li>
            <li className='linkss'><a href='#portfolio'>Portfolio</a></li>
            <li className='linkss'><a href='#testimonials'>Testimonials</a></li>
            <li className='linkss'><a href='#contact'>Contact</a></li>            
        </ul>

        <div className='footer_socials'>
            <a href='https://facebook.com'><BiLogoFacebookSquare/></a>
            <a href='https://facebook.com'><FiInstagram/></a>
            <a href='https://facebook.com'><IoLogoTwitter/></a>
        </div>


        <div className='footer_copyright'>
            <small>&copy; VISHWAJEET VAIBHAV. All right reserved.</small>
        </div>
    </footer>
  )
}
 
export default footer 