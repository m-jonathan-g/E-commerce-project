import { Link,useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'

export const Navbar = () => {
  const location = useLocation()
  const {isLoggedIn, user, logout} = useAuth();
  const { cart } = useCart()
  const [dropDown, setDropDown] = useState(false)

  const handleDropdown = () => {
    setDropDown(!dropDown)
  }
  
  return (
    <div className='navbar'>
       <div className='nav-logo'>
           <Link to={'/home'}><img src="/bf-logo.png" alt="" className='logo-img'/></Link>
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
        {isLoggedIn && user ? (
          <div className='profile' onClick={handleDropdown}>
            <img src='/profile.png' alt='' className='profile-img' />
            {dropDown && (
              <div className='dropdown-menu'>
                <h2 className='dropdown-item-title'>My Profile</h2>
                <h3><Link to={'/addproduct'} className='dropdown-item'>Add Product</Link></h3>
                <h3><Link to={'/cart'} className='dropdown-item'>Checkout</Link></h3>
                <h3><Link to={'/contact'} className='dropdown-item'>Contact Us</Link></h3>
                <h3><Link to={'/'} className='dropdown-item'>Gift Cards</Link></h3>
                {user.isAdmin && (
                    <Link to='/admin' className='dropdown-item'>
                    Admin Dashboard
                  </Link>
                )}
              
                <button onClick={logout} className='dropdown-item'>
                  Logout
                </button>
              </div>
            )}
          </div>
        ): (
              <Link style={{textDecoration: 'none'}}  to={'/login'}>
                <button>Login</button> 
                </Link>
                
            )
          }
          <Link to={'/cart'}>
            <img src="/kart.png" alt="" className='kart' />
          </Link>
          <div className='nav-cart-count'>{cart.items.length}</div>
        </div>
    </div>
  )
}
