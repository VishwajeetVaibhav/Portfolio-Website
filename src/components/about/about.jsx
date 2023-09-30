import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { ImUserTie } from 'react-icons/im'
import { VscFolderLibrary } from 'react-icons/vsc'


const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={ME} alt='About Image' />
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>Still Waiting...</small>
                        </article>
                        <article className='about_card'>
                            <ImUserTie className='about_icon' />
                            <h5>Clients</h5>
                            <small>Waiting! Hire Me.</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>Soon getting One..</small>
                        </article>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default about