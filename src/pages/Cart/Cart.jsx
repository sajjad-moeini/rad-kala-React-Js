import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import ProjectContext from '../../Contexts/ProjectContext'
import CardProduct from '../../Components/CardProduct/CardProduct'
export default function Cart() {
  const projectContex = useContext(ProjectContext)
  const cartItems = projectContex.cartItems
  const [allPrice,setAllPrice ]= useState([])
  const [alloffs,setAlloffs ]= useState([])
  const [payCoast,setPayCoast] =useState([])
const  getAllPrice = (price,id)=>{
  let newPrice = {price,id}
  allPrice.forEach(pricee=>{
    pricee && pricee.id !== id ? setAllPrice( (prev) => ([...prev , newPrice])) : pricee.price = price
   
  })
  console.log(allPrice)
}
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
                {allPrice.toLocaleString()} تومان
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-final-price-title text-light'>
                جمع سبد خرید
              </div>
              <div className='all-products-final-price text-light'>
                {payCoast.toLocaleString()} تومان
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-final-price-title text-danger'>
                سود شما از خرید
              </div>
              <div className='all-products-final-price text-danger'>
                {alloffs.toLocaleString()} تومان
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 order-1 order-md-1 mt-5">
            {cartItems.map((product,index)=>(
              <CardProduct getAllPrice={getAllPrice} {...product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
