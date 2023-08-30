import React from 'react'
import './CheckOutProduct.css';
import { useStateValue } from '../components/StateProvider';


const CheckOutProduct = ({id,title,image,price,rating}) => {
  const [{cart},dispatch]=useStateValue();

  console.log(id,title,image,price,rating+"Hello");
  const removeFromCart=()=>{
     dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
     });
  }

  return (
    <div className='checkOutProduct'>
     <img className='checkoutProduct_image' src={image} alt=''></img>
     <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>

        <p className='checkoutProduct__price'>
        <small>₹</small>
        <strong>{price}</strong>
        </p> 

        <div className='checkoutProduct__rating'>
       {
        Array(rating)
        .fill()
        .map((_) => (
            <p>⭐</p>
        ))}
        </div>

        <button onClick={removeFromCart}>Remove from Cart</button>

     </div>
    </div>
  )
}

export default CheckOutProduct