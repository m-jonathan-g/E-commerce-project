import { Navbar } from '../../components/Navbar/Navbar'
import './About.css'

export const About = () => {
  return (
    <div >
      <Navbar/>
      <div className='about-page'>
        <h1>About Us</h1>
        <div className='about-content'>
          <img src="/wall.jpg" alt="" className='about-image'/>
          <div className='about-text'>
           <h2>Welcome to BlueFarm:</h2>
            <p>
             Where culinary artistry meets a warm and welcoming atmosphere.
              Our restaurant was founded with a passion for exceptional foods. From our farm-fresh ingredients to our innovative
              recipes, every dish is crafted with care and dedication.
            </p>
            <h2>Mission</h2>
            <p>
            To provide our users with an unforgettable dining experience.
              We believe in the power of good food to create lasting memories, and we are committed to
              excellence in every aspect of our restaurant. Order a meal and experience the
              difference that quality ingredients and a passionate team can make.
            </p>
            <h2>Values</h2>
            <ul>
              <li>Quality: We use only the freshest ingredients to create our dishes.</li>
              <li>Community: We strive to create a welcoming environment for all our guests.</li>
              <li>Innovation: We are always exploring new recipes and culinary techniques.</li>
              <li>Sustainability: We are committed to environmentally friendly practices.</li>
            </ul>
            <h1>Delivery Hours</h1>
            <div className='hours'>
            <p><span>Monday - Friday: <hr /></span> 7:00 AM - 10:00 PM</p>
            
              <p> <span>Saturday: <hr /></span> 9:00 PM - 11:00 PM</p>
             
              <p><span>Sunday:<hr /></span> 10:00 PM - 9:00 PM</p>
              
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}
