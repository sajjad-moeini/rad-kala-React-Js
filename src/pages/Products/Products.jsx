import React, { useEffect, useState } from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import ProductsCard from '../../Components/ProductsCard/ProductsCard'
import { Link, NavLink } from 'react-router-dom';


export default function Products() {
       const allStoreProducts = useSelector(state => state.products)
       const categories = useSelector(state => state.HomeCategories)
       const [allProducts, setAllProducts] = useState([])
       const [showProducts,setShowProducts]= useState('همه')
       const [filtredProducts,setFiltredProducts] = useState()
     
       useEffect(() => {
              allStoreProducts.map(products => {
                     if (products.title == 'گوشی موبایل') {
                            products.products.map(product => {
                                   product.products.forEach(product => {
                                          setAllProducts(prev => ([...prev, product]))
                                   })
                            })
                     } else {
                            products.products.forEach(product => {
                                   setAllProducts(prev => ([...prev, product]))
                            })
                     }
              })
       }, [])
       useEffect(()=>{
              if(showProducts == 'همه'){
                     setFiltredProducts([])
                     setFiltredProducts([...allProducts])
              }
       },[allProducts])
       useEffect(()=>{
              setFiltredProducts([])
              allProducts &&   allProducts.forEach(product=>{
                     if(product.category.trim() === showProducts){                            
                            setFiltredProducts(prev => ([...prev, product]))
                     }
              })
              if(showProducts == 'همه'){
                     setFiltredProducts([])
                     setFiltredProducts([...allProducts])
              }
       },[showProducts])
      

       return (
              <>
              <div className='d-flex w-75 mx-auto my-5 justify-content-start align-items-center'>
                     <Dropdown className='product-page-category-selector mt-5'>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                   دسته بندی مورد نظر را انتخاب کنید
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='product-page-category-menu'>
                                   {
                                          categories.map((category, index) => (
                                                 <Dropdown.Item key={index} onClick={()=>setShowProducts(category.title)}>
                                                        {/* <NavLink to={category.path}> */}
                                                           {category.title}
                                                        {/* </NavLink> */}
                                                 </Dropdown.Item>
                                          ))
                                   }
                                   <Dropdown.Divider />
                                   <Dropdown.Item onClick={()=>setShowProducts('همه')}>
                                          {/* <NavLink to={'/products/all'}> */}
                                                 همه
                                          {/* </NavLink> */}
                                   </Dropdown.Item>
                            </Dropdown.Menu>
                     </Dropdown>
             
              </div>
              
                     {filtredProducts && <ProductsCard products={filtredProducts} />}

              </>
       )
}
