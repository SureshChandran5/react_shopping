import React from 'react'
import api from '../api/post'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Product = () => {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    })
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
    .catch((e)=>console.log(e))
  },[])


  const cardItem = (item) => {
    return (
      <div className="card py-4 my-5" key={item.id} style={{width: "18rem"}}>
        <img src={item.image} className="card-img-top" alt={item.title} width="200px" height="200px"/>
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <NavLink to={`/product/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
          </div>
      </div>
    );
  }

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr />
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-around'>
            {data.map(cardItem)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;

