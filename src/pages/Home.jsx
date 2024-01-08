import React, { useEffect } from 'react'
import { Col, Row ,Card,Button,Spinner } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlice'
import {useDispatch, useSelector} from 'react-redux'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart } from '../Redux/Slices/cartSlice'



function Home() {

  const dispatch = useDispatch()
  const {loading,products,error} = useSelector((state)=>state.productSlice)
  const {wishlist} = useSelector((state)=>state.wishlistSlice)
  const cart= useSelector((state)=>state.cartReducer)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const handleWishlist = (product)=>{
    const existingProduct= wishlist.find(item=>item.id==product.id); //to avoid duplication
    if(existingProduct){
      alert("Product alredy added to Wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
    <div className='ms-5' style={{marginTop:'60px'}}>
      {
        loading? <div className='text-center mt-5'> <Spinner animation="border" variant="info" />Loading...</div>
        :   <Row  className='container mt-5'>
        {products.length>0?products.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Link to={`/view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
              <Card.Body>
                <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                <div className='d-flex justify-content-between'>
                  <Button onClick={()=>handleWishlist(product)}  className='btn btn-light fs-5'><i className="fa-solid fa-heart text-danger"></i></Button>
                  <Button onClick={()=>dispatch(addtoCart(product))} className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )):
        <div >
          <h3 className='text-center text-info'>Product Not Found!!!</h3>
        </div>}
      </Row>
      }
    
    </div>
  )
}

export default Home