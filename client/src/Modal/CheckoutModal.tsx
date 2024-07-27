import './Checkouts.css'
import { useState } from 'react'


interface CheckoutModalProps {
    isOpen: boolean;
    onClose: ()=> void;
    onCheckout: (cardDetails: {
        number:string;
        expiry:string;
        cvv:string;
    }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps>= ({ isOpen, onClose, onCheckout}) => {
    const [cardDetails, setCardDetails] = useState({
        number:'',
        expiry:'',
        cvv:'',
      })

    const handleCardDetailsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCardDetails({
          ...cardDetails,
          [e.target.name]: e.target.value
        })
      }
    
    const handleCheckoutSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        onCheckout(cardDetails)
      };

      if(!isOpen) return null;

  return (
    <div className='checkout-modal'>
        <form onSubmit={handleCheckoutSubmit}>
            <label>
                Card Number:
                <input type='text' name='number' value={cardDetails.number} onChange={handleCardDetailsChange} required/>
            </label>
            <label>
                Expiry Date:
                <input type='text' name='expiry' value={cardDetails.expiry} onChange={handleCardDetailsChange} required/>
            </label>
            <label>
                CVV:
                <input type='text' name='cvv' value={cardDetails.cvv} onChange={handleCardDetailsChange} required/>
            </label>
            <button type='submit'>Submit Payment</button>
            <button type='button' onClick={onClose}>Cancel</button>
        </form>
    </div>
  )
}
