import React, { useEffect, useState } from 'react'
import { Button,Spinner } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'


function View() {
  const data=useParams()  //useparams give the path parameter and id is always present in key 'id' so we can destructure and give it as const {id}
  console.log(data);
  const {loading}=useSelector((state)=>state.productSlice)
  const {wishlist} = useSelector((state)=>state.wishlistSlice)

  const [product,setProduct] = useState({})

  const dispatch = useDispatch()

  useEffect(()=>{
    const products=JSON.parse(localStorage.getItem("products")) //get data from localstrg 
    setProduct(products.find(product=>product.id==data.id))
  },[])

  console.log(product);

  const handleWishlist = (product)=>{
    const existingProduct= wishlist.find(item=>item.id==product.id); //to avoid duplication
    if(existingProduct){
      alert("Product alredy added to Wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    
    <div className='container mt-5'>
    {  loading?<div className='text-center mt-5'> <Spinner animation="border" variant="info" />Loading...</div>
      :
      
        <div className="row mt-5 align-items-center">
          <div className="col-md-4">
            <img style={{height:'400px',width:'100%'}} src={product?.thumbnail} alt="product" />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
              <p>PID: {product?.id}</p>
              <h1>{product?.title}</h1>
              <h5 className='fw-bolder'>$ {product?.price}</h5>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description: </span>{product?.description}</p>
              <div className='d-flex justify-content-between mt-5'>
                  <Button onClick={()=>handleWishlist(product)} variant="outline-dark" className='btn fs-5'><i className="fa-solid fa-heart text-danger"></i>Wish list</Button>
                  <Button variant="outline-dark" className='btn fs-5'><i className="fa-solid fa-cart-plus text-success"></i>Cart</Button>
  
                </div>
          </div>
        </div>
      }
      </div>
    
  )
}

export default View