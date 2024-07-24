import './Video.css'
import videobg from '../assets/BF background.mp4'

export const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted className='video-background__video'>
               <source src={videobg} type='video/mp4'/>
            </video>   
        </div>
    )
}