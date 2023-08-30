import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {

    const[product,setProduct]=useState([]);
    const {productId}=useParams();
    useEffect(()=>{
    const fetchData=async()=>{
      const responseObject=await axios.get("http://localhost:3000/products/"+productId);
      setProduct(responseObject.data);
   }
   fetchData();
 },[]);


  return (
    <>
        <div className='product_details'>
        <div className="col-md-6">
          <img src={product.image} height="300px" width="200px" />
        </div>
        
        <div className="col-md-6">
          <h1 height="200px" width="280px">{product.title} </h1>
          <h3 height="200px" width="190px"> Price:₹{product.price} </h3>
          <h3 className="color"><h3>Color: </h3>{product.color}</h3>
          <h3 className="warranty"><h3>Warranty:</h3>{product.warranty}</h3>
          <h2 className="rating"> <h3>Rating: </h3>
            {Array(product.rating).fill().map((_) => (<p>⭐</p>))}</h2>
          <h4 className="specification"><h2>Description	: </h2>{product.details}</h4>
          
       
        </div>
        </div>
      </>
  )
}

export default ProductDetails
