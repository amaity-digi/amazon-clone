import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../components/StateProvider';
import { getCartTotal } from '../components/reducer';



const Subtotal = () => {
    const [{ cart },dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat

          renderText={(value) => (
           
            <>
            <p>Your order is eligible for FREE Delivery. Select this option at checkout.</p>
            <p className='subtotal_item'>Subtotal({cart.length} items):<strong>{value}</strong></p>
             
            <small className='subtitle_gift'>
                <input type="checkbox"/>This Order Contains a gift 
            </small>

            </> 
          )}

        decimalScale={2}
        value={getCartTotal(cart)}
        
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        
        />
            <button>Process to Checkout</button>
        </div>
  )
}

export default Subtotal