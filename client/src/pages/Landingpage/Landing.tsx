import './landing.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page__container">
               <div className='landing-page__right'>
                <img src="/bluefarm logo.png" alt="logo" />
                <button><Link to={'/menu'} className='link'>Place Order</Link></button>
               </div>
               <div className='landing-page__left'>
                <ul>
                    <li><Link to={'/home'} className='link'>Home</Link></li>
                    <li><Link to={'/menu'} className='link'>Menu</Link></li>
                    <li><Link to={'/about'} className='link'>About</Link></li>
                    <li><Link to={'/contact'} className='link'>Feedback</Link></li>
                  
                </ul>
               </div>
            </div>
        </div>
    )
}

export default LandingPage