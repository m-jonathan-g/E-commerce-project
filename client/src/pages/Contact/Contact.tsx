import { useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './Contact.css'

export const Contact = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFeedback = () => {
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <Navbar/>
        <div className='contact-container'>
          <h1>Reach Out To Us!</h1>
          <h3>For any enquiries, complains and suggestions reach out to us below:</h3>
          <h2>Feedback Form</h2>
          <div className='feedback-form'>
            <form>
              <label>Your Email:
                <input  
                   type="email"
                   value={email}
                   placeholder='Your email'
                   onChange={(e) => e.target.value}
                 />
              </label>
              <label>
                Your Message:
                <textarea 
                   placeholder='Describe your issue'
                   value={message}
                   onChange={(e) => e.target.value}
                />
              </label>
              <button className='feedbackbutton' onClick={handleFeedback}>Submit</button>
            </form>
          </div>

          <div className='contact-box'>
            <h2>Contact Us Below:</h2>
            <div className='contact-align'>  
            <div className='email-container'>
            <h3>Email</h3>
              <img src="/email.png" alt="" className='contact-img' />
            </div>
            <div className='call-container'>
            <h3>Phone</h3>
              <img src="/phone-call.png" alt="" className='contact-img' />
            </div> 
            <div className='sms-container'>
            <h3>SMS</h3>
              <img src="/chat.png" alt="" className='contact-img'  />
            </div>
            </div>
          </div>

          <div className='socials-box'>
            <h2>Connect With Us on Socials!</h2>
            <div className='socials-container'>
            <a href="https://www.instagram.com/"> <img src="/instagram.png" alt="" className='socials-img' />
            </a>       
          </div>
          <div className='socials-container'>
            <a href="https://web.whatsapp.com/"> <img src="/whatsapp.png" alt="" className='socials-img'/>
            </a>          
          </div>
          <div className='socials-container'>
            <a href="https://www.pinterest.com/"> <img src="/pinterest.png" alt="" className='socials-img'/>
            </a>
          </div>
          <div className='socials-container'>
            <a href="https://x.com/?lang=en"> <img src="/twitter.png" alt="" className='socials-img'/>
          </a>     
          </div>
          </div>
        </div>
    </div>
  )
}
