import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DATA from './api/data'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addItem, delItem} from '../redux/actions/index';
import axios from 'axios'



const ProDetail = () => {


  const [cartBtn, setCartBtn] = useState("Add to Cart")
  const proid = useParams();
  const proDetail = DATA.filter(x=>x.id == proid.id)
  
  const selProduct = proDetail[0];
  // console.log(selProduct);
  console.log(DATA);
  
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   axios({
  //     method:"GET",
  //     url:`https://fakestoreapi.com/products/${proid.id}`
  //   })
  //   .then((res)=>{
  //     console.log(res.data);
  //     // setData(res.data)
  //   })
  //   .catch((e)=>console.log(e))
  // },[proid.id])
  
  const handleCart = (selProduct) => {
    if (cartBtn === "Add to Cart") {
     dispatch(addItem(selProduct))
     setCartBtn("Remove from Cart")
    }
    else{
     dispatch(delItem(selProduct))
     setCartBtn("Add to Cart")
    }
}

  return (
    <>
      <div className='container my-5 py-3'>
        <div className='row'>
            <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                <img src={proDetail[0].image} alt={proDetail[0].title} height='450px' width='450px' />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
                <h1 className='display-5 fw-bold'>{proDetail[0].title}</h1>
                <hr/>
                <h2 className='my-4 price'>{proDetail[0].price}</h2>
                <p className='lead'>{proDetail[0].description}</p>
                <span>Rating : {proDetail[0].rating.rate} out of 5 </span>
                <button onClick={()=>handleCart(selProduct)} className='btn btn-outline-primary mt-3'>{cartBtn}</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProDetail
