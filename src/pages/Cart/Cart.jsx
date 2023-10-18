import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import ProjectContext from '../../Contexts/ProjectContext'
import CardProduct from '../../Components/CardProduct/CardProduct'
import { Link } from 'react-router-dom'
export default function Cart() {
  const projectContex = useContext(ProjectContext)
  const cartItems = projectContex.cartItems
 

  return (
    <>
      <div className="container px-4">
        <div className="h5 text-light my-4">
          سبد خرید شما
        </div>
        <div className="row">
          <div className="col-12 col-md-4 order-0 order-md-2 my-5 factor-container ">
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-price-title'>
                قیمت کالاها ({cartItems.length})
              </div>
              <div className='all-products-price'>
                {projectContex.allPayPrice.toLocaleString()} تومان
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-final-price-title text-light'>
                جمع سبد خرید
              </div>
              <div className='all-products-final-price text-light'>
                {projectContex.payCoast.toLocaleString()} تومان
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-final-price-title text-danger'>
                سود شما از خرید
              </div>
              <div className='all-products-final-price text-danger'>
                {projectContex.alloffsPrice.toLocaleString()} تومان
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 order-1 order-md-1 mt-5">
            {cartItems.map((product, index) => (
              <CardProduct  {...product} key={index} />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-end my-5">
       {projectContex.cartItems.length > 0 && <Link to={'/'} className='btn btn-primary' onClick={()=>{projectContex.setCartItems([])}}>
پرداخت</Link>}  
        </div>
      </div>
    </>
  )
}
