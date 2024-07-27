import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
          <img src="/bf-logo.png" alt="" className='footer-logo__img' />
        </div>
        <ul className='footer-links'>
          <li>
            <Link 
               style={{
                 textDecoration: 'none', 
                 color: '#2f3c48', 
                 fontWeight: '800',
                }} 
                to={'/home'}>Home</Link>
          </li>
          <li>
            <Link 
               style={{
                  textDecoration: 'none', 
                  color: '#2f3c48', 
                  fontWeight: '800',
                }} 
              to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link 
               style={{
                textDecoration: 'none', 
                color: '#2f3c48', 
                fontWeight: '800',
               }} 
             to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link 
             style={{
              textDecoration: 'none', 
              color: '#2f3c48', 
              fontWeight: '800',
             }} 
             to={'/about'}>About</Link>
          </li>
        </ul>
        <div className='footer-social-icon'>
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
        <div className='footer-copyright'>
          <hr />
          <p>Copyright © 2024 Blue Farm. All rights reserved.</p>
        </div>
    </div>
  )
}
