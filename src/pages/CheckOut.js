import React from 'react'
import { useStateValue } from '../components/StateProvider';
import "./CheckOut.css";
import image from "./ad.png"
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';



const CheckOut = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>

      <img className='checkout_ad'
        src={image}
        alt=''
      />
      {
        cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty!</h2>
            <p>You have no items in your cart. To buy one or more items,click "Add to Cart" next to the item.</p>
          </div>
        ) : (
          <div>
            <h2 className='checkout_title'>Your Shopping Cart</h2>
            {/* List of all checkout products */}
            {
              cart?.map((item) => {
                return (
                  <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />

                );
              })}

          </div>
        )
      }
    </div>
    {
      cart.length>0 && (
        <div className='checkout_left'>
          <Subtotal/>
        </div>
      )
    }
    </div>
  )
}

export default CheckOut