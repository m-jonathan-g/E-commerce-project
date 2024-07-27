import './landing.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page__container">
               <div className='landing-page__right'>
                <img src="/bf-logo.png" alt="logo" />
                <button><Link to={'/menu'} className='place-order'>Place Order</Link></button>
               </div>
               <div className='landing-page__left'>
                <ul>
                    <li><Link to={'/home'} className='link'>Home</Link></li>
                    <hr />
                    <li><Link to={'/menu'} className='link'>Menu</Link></li>
                    <hr />
                    <li><Link to={'/about'} className='link'>About</Link></li>
                    <hr />
                    <li><Link to={'/contact'} className='link'>Feedback</Link></li>
                    <hr />
                  
                </ul>
               </div>
            </div>
        </div>
    )
}

export default LandingPage