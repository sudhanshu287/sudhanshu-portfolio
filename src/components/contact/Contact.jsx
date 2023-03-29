import React from 'react'
import './Contact.css';
import {FaFacebookMessenger} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>contact2sudhanshup@gmail.com</h5>
              <a href="mailto:contact2sudhanshup@gmail.com" target="_blank" rel='noopener'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>sudhanshu287</h5>
              <a href="https://facebook.com/sudhanshu287/" target="_blank" rel='noopener'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+9187xxxxxx11</h5>
              <a href={`https://wa.me/+${import.meta.env.VITE_APP_MOBILE_NUMBER}/?text=Hii. Sudhanshu`} target="_blank" rel='noopener' >Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact