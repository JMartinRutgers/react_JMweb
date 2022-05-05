import React from 'react'
import './contact.css'
import {BsWhatsapp, BsMailbox} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
          <br></br>
            <h2>Contact me </h2>

            <div className="container contact_container">
                <div className="contact__options">
                    <article className="contact__option">
                        <BsMailbox className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>jorge2005melchor@mail.com</h5>
                        <a href="mailto:jorge2005melchor@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h4>+6023154015</h4>
                        <a href="https://api.whatsapp.com/send?phone+6023154015" target="_blank">Send a message</a>
                    </article>
                    
                </div>
               {/* END OF CONTACT OPTIONS */}
               <form action="">
               <input type="text" name='name' placeholder='Your full name' required/>
               <input type="mail" name='mail' placeholder='Your email' required/>
               <textarea name="message" rows="7" placeholder='Your message' required></textarea>
               <button type='submit' className='btn btn-primary'>Send message</button>
               </form>

            </div>
        </section>
    )
}

export default Contact
