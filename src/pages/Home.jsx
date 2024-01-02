import React, { useEffect } from 'react'
import { Col, Row ,Card,Button,Spinner } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlice'
import {useDispatch, useSelector} from 'react-redux'



function Home() {

  const dispatch = useDispatch()
  const {loading,products,error} = useSelector((state)=>state.productSlice)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <div style={{marginTop:'60px'}}>
      {
        loading? <div className='text-center mt-5'> <Spinner animation="border" variant="info" />Loading...</div>
        :   <Row  className='container mt-5'>
        {products.length>0&&products.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card classNameshadow rounded style={{ width: '18rem' }}>
              <Link to={`/view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
              <Card.Body>
                <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                <div className='d-flex justify-content-between'>
                  <Button  className='btn btn-light fs-5'><i className="fa-solid fa-heart text-danger"></i></Button>
                  <Button className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      }
    
    </div>
  )
}

export default Home