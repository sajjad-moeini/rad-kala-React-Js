import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import ProjectContext from '../../Contexts/ProjectContext'
import CardProduct from '../../Components/CardProduct/CardProduct'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, useNavigate } from 'react-router-dom'


export default function Cart() {
  const projectContex = useContext(ProjectContext)
  const cartItems = projectContex.cartItems
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
const payBtnAction =()=>{
  console.log(projectContex.isLogin)
  if(projectContex.isLogin){
    projectContex.setCartItems([])
    navigate('/')
  }else{
    MySwal.fire({
      title:
        'لطفا وارد حساب کاربری شوید'
      ,
      icon: 'info',
      confirmButtonText: 'باشه',
      confirmButtonColor: '#0d50b5'
  
  
    }).then(res => {
      if (res.isConfirmed) {
        navigate('/account/login')
      }
    })
  }
  
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
              <div className='all-products-price-title fs1r'>
                قیمت کالاها ({cartItems.length})
              </div>
              <div className='all-products-price fs1r'>
                {projectContex.allPayPrice.toLocaleString()} تومان
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-final-price-title text-light fs1r'>
                جمع سبد خرید
              </div>
              <div className='all-products-final-price text-light fs1r'>
                {projectContex.payCoast.toLocaleString()} تومان
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className='all-products-final-price-title text-danger fs1r'>
                سود شما از خرید
              </div>
              <div className='all-products-final-price text-danger fs1r'>
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
       {projectContex.cartItems.length > 0 && <button  className='btn btn-primary' onClick={()=>{payBtnAction()}}>
پرداخت</button>}  
        </div>
      </div>
    </>
  )
}
