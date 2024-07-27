
import { Hero } from '../../components/Hero/Hero'
import { Navbar } from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar/>
            <div className='home-container'>
            <Hero/>
            <div className="home-page-content">
                <div className='menu-prompt'>
                    <h2>Explore Our Menu</h2>
                   <Link to={'/menu'}>
                   <img src="/mains.jpg" alt="" />
                   <div className='hover-text'>Explore Menu</div>
                   </Link>
                   <button><Link to={'/menu'} className='menu-order'>Place an Order</Link></button>
                </div>
            </div>
            <div className='home-delivery'>
            <h1>Delivery Hours</h1>
            <div className='hours'>
            <p><span>Monday - Friday: </span> 7:00 AM - 10:00 PM</p>
            <hr />
              <p> <span>Saturday: </span> 9:00 PM - 11:00 PM</p>
             <hr />
              <p><span>Sunday:</span> 10:00 PM - 9:00 PM</p>
              </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage