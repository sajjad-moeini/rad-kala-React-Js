import React, { useEffect, useState } from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { BsCart3 } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import ProjectContext from '../../Contexts/ProjectContext';

export default function NavBar() {
       const projectContex = useContext(ProjectContext)
       const products = useSelector((state) => state.products)
const navigate = useNavigate()
const logOutHandler =() =>{
       projectContex.setIsLogin(false)
navigate('/')
}

       return (
              <>
                     <Navbar expand="lg" >
                            <Container>
                                   <Navbar.Brand href="#home">
                                          <img src={projectContex.logoSrc} className='img-fluid' style={{ width: '100px' }} alt="logo" />
                                   </Navbar.Brand>
                                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                   <Navbar.Collapse id="basic-navbar-nav">
                                          <Nav className="me-auto d-flex-centering ms-4">

                                                 <NavLink className={'nav-items'} to={'/'}>
                                                        صفحه اصلی
                                                 </NavLink>


                                                 <NavLink className={'nav-items'} to={'/products/all'}>
                                                        محصولات
                                                 </NavLink>

                                                 {
                                                  projectContex.isLogin && projectContex.isLogin ? (<Dropdown>
                                                        <Dropdown.Toggle className={'nav-items'} style={{ background: 'transparent', border: 'none' }} id="dropdown-basic">
                                                               حساب کاربری
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                               <Dropdown.Item >
                                                                      اطلاعات حساب کاربری
                                                               </Dropdown.Item>
                                                               <Dropdown.Item >
                                                                      سابقه خرید
                                                               </Dropdown.Item>
                                                               <Dropdown.Item >
                                                                      پیگیری خرید
                                                               </Dropdown.Item>
                                                               <Dropdown.Item onClick={()=>{logOutHandler()}}>
                                                                      خروج
                                                               </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                 </Dropdown>) : (<NavLink className={'nav-items'} to={'/account/login'}>
                                                                      ورود | عضویت
                                                               </NavLink>)
                                                        
                                                 }



                                                 <Nav.Link className=' position-relative'>
                                                        <BsCart3 className='cart-icon' onClick={()=>navigate('/cart')} />
                                                      {projectContex.cartItems.length > 0 && <div className=' position-absolute cart-badge bg-danger rounded-circle text-light d-flex-centering'>{projectContex.cartItems.length}</div>}  
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
