import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { Navbar } from '../../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'
import  { useState } from 'react'
import { CheckoutModal } from '../../Modal/CheckoutModal'

interface CartItem {
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory: string;
  productionDate: string;
  images: { path: string }[];
}

//calculating total price
const getTotalPrice = (items: CartItem[]):number => {
  return items.reduce((total, item) => total + item.price, 0)
}

export const Cart = () => {
  const { cart, removeFromCart} = useCart()
  const {isLoggedIn} = useAuth()
  const navigate = useNavigate()
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  

  if(!isLoggedIn) {
    alert('Login to view your cart')
    navigate('/login')
    return null;
  }

  const handleCheckoutModalOpen = () => {
    if (cart.items.length === 0) {
      alert('Your cart is empty. Add Items.')
      return;
    }
    setIsCheckoutModalOpen(true)
  }

  const handleCheckoutModalClose = () => {
    setIsCheckoutModalOpen(false)
  }

  const handleCheckout = (cardDetails: {
    number: string;
    expiry: string;
    cvv: string;
  }) => {
    alert('Checkout submitted with card details: ' + JSON.stringify(cardDetails));
    setIsCheckoutModalOpen(false);
  }


  return (
    <div>
      <Navbar/>
      <div className="container">
        <h1 className='cart-title'>My Cart</h1>
        <div className='cart-container'>
        <div className='cart-items'>
          {cart.items.length > 0 ? (
            cart.items.map((item, index) => (
              <div key={index} className='cart-item'>
                <h2>{item.name}</h2>
                {item.images.length > 0 && (
                  <img src={`http://localhost:2000/${item.images[0].path}`} alt={item.name} className='cart-image' />
                )}
                <p>{item.description}</p>
                <p>Price(Kshs): Kshs{item.price}</p>
                <button onClick={()=> removeFromCart(item)} className='removefromcart'>Remove</button>
              </div>
              
            ))
          ): (
            <div>
              <h2>Your Cart is Empty.</h2>
              <p><Link to={'/menu'}>Add Item to Cart</Link></p>
              </div>
          )}
          </div>
        </div>

        <div className='total-price'>
          <h2>Total: <span className='totalprice'>Kshs.{getTotalPrice(cart.items)}</span></h2>
        </div>
        <button className='checkout-button' onClick={handleCheckoutModalOpen}>Checkout Items</button>

        <CheckoutModal 
        isOpen={isCheckoutModalOpen}
        onClose={handleCheckoutModalClose}
        onCheckout={handleCheckout} 
        />
        </div>
    </div>
  )
}
