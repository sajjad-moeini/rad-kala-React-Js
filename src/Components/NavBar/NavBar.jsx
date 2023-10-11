import React, { useEffect, useState } from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { BsCart3 } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
export default function NavBar() {

       const products = useSelector((state) => state.products)
       return (
              <>
                     <Navbar expand="lg" >
                            <Container>
                                   <Navbar.Brand href="#home">
                                          <img src="images/logo1.png" className='img-fluid' style={{ width: '100px' }} alt="logo" />
                                   </Navbar.Brand>
                                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                   <Navbar.Collapse id="basic-navbar-nav">
                                          <Nav className="me-auto d-flex-centering ms-4">
                                                 
                                                        <NavLink className={(item)=>(item.isActive ? 'nav-items navbar-active-item' :'nav-items')} to={'/'}>
                                                               صفحه اصلی
                                                        </NavLink>

                                                 
                                                        <NavLink className={(item)=>(item.isActive ? 'nav-items navbar-active-item' :'nav-items')} to={'/products'}>
                                                               محصولات
                                                        </NavLink>
                                                 

                                                 
                                                        <NavLink className={(item)=>(item.isActive ? 'nav-items navbar-active-item' :'nav-items')} to={'/account'}>
                                                               ورود | عضویت
                                                        </NavLink>
                                                 
                                                 <Nav.Link >
                                                        <BsCart3 className='cart-icon' />
                                                 </Nav.Link>
                                          </Nav>
                                          <Nav  >


                                                 <Nav.Link className='nav-searchbar-container position-relative ms-4'>
                                                        <input type="text" className=' form-control' placeholder='جستجو کنید ...' />
                                                        <BiSearchAlt className=' position-absolute navbar-search-icon' />
                                                 </Nav.Link>

                                          </Nav>
                                   </Navbar.Collapse>
                            </Container>
                     </Navbar>
              </>
       )
}
