import React from 'react'
import './Product.css';
import { useStateValue } from '../components/StateProvider';
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({id,title,price,rating,image}) => {

  const [{cart},dispatch]=useStateValue();
  const addToCart=()=>{
    toast("Item added to cart")
    dispatch({
      type:'ADD_TO_CART',
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image,
      }
    })
  }

  return (
    <div className='product'>
        <div className='product__info'> 
    <Link to={`products/${id}`}> <p className='product_title'>{title}</p></Link>
     <p className='product__price'>
        <small>₹</small>
        <strong>{price}</strong>
        </p> 
        <div className='product__rating'>
       {
        Array(rating)
        .fill()
        .map((_) => (
            <p>⭐</p>
        ))}
        </div>
        </div>
        <img src={image} height="900px"  alt=''></img>
        <button onClick={addToCart}>Add to Cart</button> <ToastContainer/>
    </div>
   
  )
}

export default Product