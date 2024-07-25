
import { Hero } from '../../components/Hero/Hero'
import { Navbar } from '../../components/Navbar/Navbar'
import './Home.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar/>
            <Hero/>

        </div>
    )
}

export default HomePage