import React, { useEffect, useState } from 'react'
import './NavBar.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import {BsCart3} from 'react-icons/bs'
export default function NavBar() {

       const products = useSelector((state) => state.products)
       useEffect(() => {
              console.log(products)
       }, [])
       return (
              <>
                     <Navbar expand="lg" className="bg-secondary">
                            <Container>
                                   <Navbar.Brand href="#home">
                                          <img src="images/logo1.png" className='img-fluid' style={{ width: '100px' }} alt="logo" />
                                   </Navbar.Brand>
                                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                   <Navbar.Collapse id="basic-navbar-nav">
                                          <Nav className="me-auto">
                                                 <Nav.Link href="#home">
                                                        صفحه اصلی
                                                 </Nav.Link>
                                                 <Nav.Link href="#link">
                                                        محصولات
                                                 </Nav.Link>
                                                 <NavDropdown title="دسته بندی ها" id="basic-nav-dropdown">
                                                        {products.map((product, index) => (
                                                               <NavDropdown.Item key={index}>
                                                                      {product.title}
                                                               </NavDropdown.Item>
                                                        ))}
                                                 </NavDropdown>
                                                
                                          </Nav>
                                          <Nav >
                                          <Nav.Link href="#home">
                                                        ورود | عضویت
                                                 </Nav.Link>
                                                 <Nav.Link href="#home">
                                                   <BsCart3 />
                                                 </Nav.Link>
                                          </Nav>
                                   </Navbar.Collapse>
                            </Container>
                     </Navbar>
              </>
       )
}
