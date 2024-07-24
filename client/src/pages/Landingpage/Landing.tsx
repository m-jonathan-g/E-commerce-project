import './landing.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page__container">
               <div className='landing-page__right'>
                <img src="/bluefarm logo.png" alt="logo" />
                <button><Link to={'/menu'}>Place Order</Link></button>
               </div>
               <div className='landing-page__left'>
                <ul>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Feedback</Link></li>
                  
                </ul>
               </div>
            </div>
        </div>
    )
}

export default LandingPage