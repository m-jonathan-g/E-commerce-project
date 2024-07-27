
import { Hero } from '../../components/Hero/Hero'
import { Navbar } from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar/>
            <Hero/>
            <div className="home-page-content">
                <div className='menu-prompt'>
                    <h2>Explore Our Menu</h2>
                   <Link to={'/menu'}>
                   <div className='image-container'>
                   <img src="/mains.jpg" alt="" />
                   <div className='overlay'> </div>
                   <div className='explore-menu-text'>Explore Menu</div>
                   </div>
                   </Link>
                   <Link to={'/menu'}><button>Place an Order</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage