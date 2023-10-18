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
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import ProjectContext from '../../Contexts/ProjectContext';
import { useRef } from 'react';

export default function NavBar() {
       const projectContex = useContext(ProjectContext)
       const products = useSelector((state) => state.products)
       const navigate = useNavigate()
       const [searchBarValue,setSearchBarValue] =useState('')
       const [searchBarFiltredProduct, setSearchBarFiltredProduct] = useState([])
       const [showSearchResaltsFlg,setShowSearchResaltsFlg] =  useState(false)
       const searchBarContainer = useRef()

       document.body.addEventListener('click',(e)=>{
              e.target !== searchBarContainer &&setShowSearchResaltsFlg(false)
              e.target !== searchBarContainer  && setSearchBarValue('')
       })


       const logOutHandler = () => {
              projectContex.setIsLogin(false)
              navigate('/')
       }

       const searchbarHandler = (e) => {
              setSearchBarValue(e.target.value)
              setSearchBarFiltredProduct([...products.filter(product => product.name.includes(e.target.value))])
              setShowSearchResaltsFlg(true)
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
                                                                      <Dropdown.Item onClick={() => { logOutHandler() }}>
                                                                             خروج
                                                                      </Dropdown.Item>
                                                               </Dropdown.Menu>
                                                        </Dropdown>) : (<NavLink className={'nav-items'} to={'/account/login'}>
                                                               ورود | عضویت
                                                        </NavLink>)

                                                 }



                                                 <Nav.Link className=' position-relative'>
                                                        <BsCart3 className='cart-icon' onClick={() => navigate('/cart')} />
                                                        {projectContex.cartItems.length > 0 && <div className=' position-absolute cart-badge bg-danger rounded-circle text-light d-flex-centering'>{projectContex.cartItems.length}</div>}
                                                 </Nav.Link>
                                          </Nav>
                                          <Nav  >


                                                 <div className='nav-searchbar-container position-relative ms-4 nav-link' ref={searchBarContainer}>
                                                        <input type="text" className=' form-control' placeholder='جستجو کنید ...' onChange={(e) => { searchbarHandler(e) }} 
                                                        value={searchBarValue}
                                                        />
                                                        <BiSearchAlt className=' position-absolute navbar-search-icon' />
                                                        {showSearchResaltsFlg && <div className="search-result-container position-absolute">
                                                               {searchBarFiltredProduct.map((product, index) => (
                                                                      <Link to={`products/product/${product._id}`} onClick={()=>{
                                                                             setSearchBarFiltredProduct([])
                                                                             setShowSearchResaltsFlg(false)
                                                                             setSearchBarValue('')
                                                                      }
                                                                             } key={index}>
                                                                      <div  className="search-result my-2 d-flex justify-content-around align-items-center w-100" >

                                                                             <div className="filtred-pr-title">
                                                                                    {product.cardName}
                                                                             </div>
                                                                             <img src={product.mainImg} className='img-fluid searchbar-filtred-product-img' alt="" />
                                                                      </div>
                                                                      </Link>
                                                               ))}

                                                        </div>}
                                                 </div>

                                          </Nav>
                                   </Navbar.Collapse>
                            </Container>
                     </Navbar>
              </>
       )
}
