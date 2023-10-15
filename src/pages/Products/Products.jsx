import React, { useEffect, useState } from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink,Outlet } from 'react-router-dom';



export default function Products() {
       const store = useSelector(state=>state)      
       const categories = useSelector(state => state.HomeCategories)
       useEffect(()=>{
              document.title = 'محصولات'
       })
      
      

       return (
              <>
              <div className="products-page-categories mx-auto d-flex-centering mt-5">
              <NavLink className={(item)=>item.isActive ? ('btn btn-primary products-page-category-item-active m-1'):('btn btn-primary products-page-category-item m-1')}  to={'all'}>                                      
                               همه محصولات
                         </NavLink>
                     {
                             
                            categories.length > 0 &&
                            categories.map((category,index)=>(
                                   <NavLink className={(item)=>item.isActive ? ('btn btn-primary products-page-category-item-active m-1'):('btn btn-primary products-page-category-item m-1')}  key={index} to={category.path}>
                                        
                                   {category.title}
                            </NavLink>
                            ))
                     }
                    
              </div>
              
                     {<Outlet />}

              </>
       )
}
