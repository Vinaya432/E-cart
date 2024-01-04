import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {

  const cart=useSelector((state)=>state.cartReducer)
  return (
    <div className='container mt-5'>
      { cart?.length>0?<div className="row mt-5">
        <div className="col-lg-8 mt-5">
        <Table className='shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image </th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { cart.map((item,index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img style={{height:'100px',width:'100px'}} src={item.thumbnail} alt="product" /></td>
              <td>$ {item.price}</td>
              <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            )) }
          </tbody>
        </Table>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="border rounded shadow p-4">
            <h5>Total Product: <span className='fw-bolder'>3</span></h5>
            <h3>Total Amount: <span className='fw-bolder text-danger'>$ 560</span></h3>
            <hr />
            <div className="d-grid">
              <button className='btn btn-success'>CheckOut</button>
            </div>
          </div>
        </div>
      </div> :
      <div className='text-center mt-5'>
      <img src="https://metro-website-images.s3.eu-west-1.amazonaws.com/plugins/user/images/emptycart.png" alt="" />
      <h1>Your Cart is Empty</h1>
      <Link to={'/'} className='btn btn-sucess'>Click here to Shop More</Link>

    </div>
      }

    </div>
  )
}

export default Cart