import React from 'react'
import { Col, Row ,Card,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function WishList() {
  return (
    <div style={{marginTop:'60px'}}>
      <Row  className='container mt-5'>
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card classNameshadow rounded style={{ width: '18rem' }}>
            <Link to={'/view/1'}><Card.Img style={{height:'180px'}} variant="top" src="holder.js/100px180" /></Link>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <div className='d-flex justify-content-between'>
                <Button  className='btn btn-light fs-5'><i className="fa-solid fa-heart-circle-minus text-danger"></i></Button>
                <Button className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default WishList