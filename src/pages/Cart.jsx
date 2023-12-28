import React from 'react'
import { Table } from 'react-bootstrap'


function Cart() {
  return (
    <div className='container mt-5'>
      <div className="row mt-5">
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
            <tr>
              <td>1</td>
              <td><img style={{height:'100px',width:'100px'}} src="" alt="product" /></td>
              <td></td>
              <td></td>
              <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
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
      </div>

    </div>
  )
}

export default Cart