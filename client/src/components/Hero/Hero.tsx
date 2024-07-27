import './Hero.css'
import Slider from 'react-slick'


export const Hero: React.FC = () => {

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,

  }

  const heroSlides = [
    {
      image: '/Offer1.png',
      title: 'Pancake Promo',
      description: 'Get a free batch of pancakes with any order'
    },
    {
      image: '/offer2.png',
      title: 'New Burger Menu',
      description: 'Try out our new addition to the menu - BlueFarm Burgers'
    },
    {
      image: '/offer3.png',
      title: 'Tea Shop Sale',
      description: 'Get a 50% discount on any tea and coffee orders'
    }
  ]


  return (
    <div className="hero">
      <h1>Offers and Promos</h1>
   <div className='hero-slider'>
    <Slider {...heroSliderSettings}>
      {heroSlides.map((slide, index) => {
        return (
          <div key={index} className='slide'>
            <img src={slide.image} alt={slide.title} className='slider-image' />
            <h2 className='slider-title'>{slide.description}!</h2>
            <hr />
          </div>
        )
      })}
    </Slider>
   </div>
   </div>
  )
}
