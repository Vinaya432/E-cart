import React from 'react'
import { Button } from 'react-bootstrap'


function View() {
  return (
    <div className='container mt-5'>
      <div className="row mt-5 align-items-center">
        <div className="col-md-4">
          <img style={{height:'400px',width:'100%'}} src="" alt="product" />
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
            <p>PID: djhfjdhft54g</p>
            <h1>Product Title</h1>
            <h5 className='fw-bolder'>$ 560</h5>
            <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam id enim repudiandae cupiditate rerum at facilis quaerat fugiat accusamus dignissimos voluptatem quisquam sunt ea eius earum, autem explicabo? Ut.</p>
            <div className='d-flex justify-content-between mt-5'>
                <Button variant="outline-dark" className='btn fs-5'><i className="fa-solid fa-heart text-danger"></i>Wish list</Button>
                <Button variant="outline-dark" className='btn fs-5'><i className="fa-solid fa-cart-plus text-success"></i>Cart</Button>

              </div>
        </div>
      </div>
    </div>
  )
}

export default View