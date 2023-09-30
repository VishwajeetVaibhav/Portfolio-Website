import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'




const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review:'Exceptional frontend developer! Outstanding design sense, pixel-perfect execution, and exceptional problem-solving skills. Consistently delivered projects ahead of schedule. Highly recommended for any web development needs.'
    },

    {
        avatar: AVTR2,
        name: 'Tina Snow',
        review:'Exceptional frontend developer! Outstanding design sense, pixel-perfect execution, and exceptional problem-solving skills. Consistently delivered projects ahead of schedule. Highly recommended for any web development needs.'
    },

    {
        avatar: AVTR3,
        name: 'Tina Snow',
        review:'Exceptional frontend developer! Outstanding design sense, pixel-perfect execution, and exceptional problem-solving skills. Consistently delivered projects ahead of schedule. Highly recommended for any web development needs.'
    },

    {
        avatar: AVTR4,
        name: 'Tina Snow',
        review:'Exceptional frontend developer! Outstanding design sense, pixel-perfect execution, and exceptional problem-solving skills. Consistently delivered projects ahead of schedule. Highly recommended for any web development needs.'
    },
]


const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials_container' 
                
            
                spaceBetween={40}
                slidesPreView={1}
                
            
            
            >
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client_avatar'>
                                <img src={avatar} alt='#'/>
                            </div>
                            <h5 className='client_name'>{name}</h5>
                            <small className='client_review'>{review}</small>
                        </SwiperSlide>
                    )
                })
            }
                          
            </Swiper>
        </section>
    )
}

export default testimonials