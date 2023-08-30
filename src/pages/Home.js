import React from 'react'
import './Home.css'
import Product from './Product'
import {products} from "../db"

const Home = () => {

  return (
    <div className='home'>
      <img className='home_image' src='https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg' alt='' />

      <div className='home_row'>
        {
          products.map(({id,title,price,rating,image})=>(
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
            />     
          ))
        }
        
      </div>
      
    </div>
  )
}

export default Home
