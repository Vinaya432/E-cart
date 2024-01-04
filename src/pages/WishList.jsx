import React from 'react'
import { Col, Row ,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'

function WishList() {
  const dispatch = useDispatch()
  const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
  return (
    <div style={{marginTop:'60px'}}>
      <Row  className='container mt-5'>
        {wishlist?.length>0?wishlist?.map(item=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card classNameshadow rounded style={{ width: '18rem' }}>
            <Link to={`/view/${item.id}`}><Card.Img style={{height:'180px'}} variant="top" src={item.thumbnail} /></Link>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(removeFromWishlist(item.id))}  className='btn btn-light fs-5'><i className="fa-solid fa-heart-circle-minus text-danger"></i></Button>
                <Button className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        )) :
          <div className='text-center'>
            <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="" />
            <h1>Your Wishlist is Empty</h1>
          </div>
          }
      </Row>
    </div>
  )
}

export default WishList