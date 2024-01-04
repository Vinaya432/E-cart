import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav, Badge} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const [wishlistCount,setWishlistCount]=useState(0);
  const [cartCount,setCartCount]=useState(0);
  const wishlist=useSelector((state)=>state.wishlistSlice.wishlist)
  const cart=useSelector((state)=>state.cartReducer)

  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])
  

  // useEffect(()=>{
  //   setWishlistCount(JSON.parse(localStorage.getItem("wishlist")).length)
  // },[wishlistCount])
  // console.log(wishlistCount);

  return (
    <>
      <Navbar className="bg-info position-fixed top-0 w-100 mb-5">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <h5 className='d-flex align-items-center' style={{height:'50px'}}>
              <i className="fa-solid fa-truck-fast fa-beat me-1"></i>               
               E Cart
            </h5>
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn border rounded'>
               <Link to={'/wishlist'} className='d-flex align-items-center' style={{color:'white',textDecoration:'none'}}> 
                  <i className="fa-solid fa-heart text-danger me-1" ></i>WishList
                  <Badge className='ms-2 rounded' bg='light'>{wishlistCount}</Badge>
               </Link>
              </Nav.Link>
              <Nav.Link className='btn border rounded'>
                <Link to={'/cart'} className='d-flex align-items-center' style={{color:'white',textDecoration:'none'}}> 
                    <i class="fa-solid fa-cart-shopping text-danger me-1"></i>Cart
                    <Badge className='ms-2 rounded' bg='light'>{cartCount}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> 
        </Container>
      </Navbar>


    </>
  )
}

export default Header