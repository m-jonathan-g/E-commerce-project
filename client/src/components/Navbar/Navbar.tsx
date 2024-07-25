
import { Link,useLocation } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const location = useLocation()
  
  return (
    <div className='navbar'>
       <div className='nav-logo'>
           <Link to={'/home'}><img src="/bluefarm logo.png" alt="" className='logo-img'/></Link>
        </div> 
        <ul className='nav-menu'>
          <li> 
            <Link 
               style={{
                 textDecoration: 'none', 
                 color: '#2f3c48', 
                 fontWeight: '800',
                 borderBottom: location.pathname === '/home' ? '3px solid #2f3c48' : 'none'
                }} 
                to={'/home'}>Home</Link>
          </li>
          <li> 
            <Link 
              style={{
                textDecoration: 'none', 
                color: '#2f3c48', 
                fontWeight: '800',
                borderBottom: location.pathname === '/menu' ? '3px solid #2f3c48' : 'none'
              }} 
              to={'/menu'}>Menu </Link>
          </li>
          <li> 
            <Link 
               style={{
                textDecoration: 'none', 
                color: '#2f3c48', 
                fontWeight: '800',
                borderBottom: location.pathname === '/about' ? '3px solid #2f3c48' : 'none'
              }} 
              to={'/about'}>About</Link>
          </li>
          <li>
            <Link 
                style={{
                  textDecoration: 'none', 
                  color: '#2f3c48', 
                  fontWeight: '800',
                  borderBottom: location.pathname === '/contact' ? '3px solid #2f3c48' : 'none'
                }} 
                to={'/contact'}>Feedback </Link>
          </li>
        </ul>
        <div className='nav-login-cart'>
          <Link style={{textDecoration: 'none'}}to={'/login'}>
            <button>Login</button>
          </Link>
          <Link to={'/cart'}>
            <img src="/kart.png" alt="" className='kart' />
          </Link>
          <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
