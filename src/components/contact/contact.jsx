
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {SiInstagram} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('submit');

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_v6jn9fw', 'template_6onu0js', form.current, 'kONOjuBtZw6ks_Aq2');
            e.target.reset();

            // Show a toast notification when the message is sent successfully
            toast.success('Message sent!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000, // Close the notification after 2 seconds
            });
        } catch (error) {
            // Handle any errors here
            console.error('Error sending message:', error);
            toast.error('Error sending message. Please try again later.');
        }
    };



  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact_container'>
            <div className='contact_options'>
                <article className='contact_option'>
                    <MdOutlineMail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>vishwajeetvaibhavv@gmail.com</h5>
                    <a href='mailto:vishwajeetvaibhavv@gmail.com' target='_blank'>Send Mail</a>
                </article>
                <article className='contact_option'>
                    <SiInstagram className='contact_option-icon'/>
                    <h4>Instagram</h4>
                    <h5>Vishwajeet Vaibhav</h5>
                    <a href='https://www.instagram.com/vaibhavvishwajeet/' target='_blank'>Follow Me</a>
                </article>
                <article className='contact_option'>
                    <BsWhatsapp className='contact_option-icon'/>
                    <h4>Whatsapp</h4>
                    <h5>Message Me</h5>
                    <a href='	https://wa.me/+916201311020' target='_blank'>Message Me</a>
                </article>
            </div>
            {/* END OF CONTACT */}
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Full Name' required/>
                <input type='email' name='email' placeholder='xyz@abcmail.com' required/>
                <textarea name='message' rows='7' placeholder='Type your message here...' required></textarea>
                <div  className='cont'>
                    <button className='btn btn-primary'><span><b>Send Message</b></span></button>
                </div>
            </form>
        </div>

        <ToastContainer />
    </section>
  )
}

export default Contact