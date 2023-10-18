import React, { useContext, useEffect, useRef, useState } from 'react'
import './CardProduct.css'
import { AiFillMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsFillClipboard2CheckFill, BsShieldFillCheck, BsTrash } from 'react-icons/bs'
import ProjectContext from '../../Contexts/ProjectContext'


export default function CardProduct({ _id, name, count, price, off, color, image }) {
  const [countt, setCount] = useState(count)
  const allPrice = (+price) * countt
  const allOff = +off
  const finalPrice = (+price * ((100 - allOff) / 100)) * countt
  const offCount = (+price * (allOff / 100)) * countt
  const projectContex = useContext(ProjectContext)

  const countChangeHandler = (action) => {
    let cartItems = [...projectContex.cartItems]
    if (action == 'minus') {
      setCount(countt - 1)
    cartItems.forEach(product=>{
      if(product._id == _id){
       return product.count=product.count-1
      }
    })
    projectContex.setCartItems([])
    projectContex.setCartItems([...cartItems])
    }
    if (action == 'plus') {
      setCount(countt + 1)
    cartItems.forEach(product=>{
      if(product._id == _id){
       return product.count=product.count+1
      }
    })
    projectContex.setCartItems([])
    projectContex.setCartItems([...cartItems])
    }
  }

  return (
    <>


      <div className="row cart-product mb-5 me-3">
        <div className="col-3 d-flex justify-content-around flex-column">
          <img src={image}
            className='img-fluid rounded-3' alt="" />
          <div className=' d-flex justify-content-around align-items-center count-container mt-5 w-75 mx-auto'>
            <AiOutlinePlusCircle className=' fs-3 text-danger cp' onClick={() => countChangeHandler('plus')} />
            <div className="product-cart-box-count fs-4 text-primary">{countt}</div>

            {countt < 2 ? <BsTrash className=' fs-3 text-danger cp' onClick={() => {
              projectContex.setCartItems(prev => (prev.filter(product => product.name !== name)))
            }} /> : <AiFillMinusCircle className=' fs-3 text-danger cp' onClick={() => countChangeHandler('minus')} />}

          </div>
        </div>
        <div className="col-9">
          <div className="h6 text-light">{name}</div>
          {color && <div className="cart-product-color d-flex justify-content-start align-items-center">
            <div className="color-layout rounded-circle" style={{ background: color }}></div>
            <div className="color-name text-secondary ms-2">رنگ</div>
          </div>}
          <div className="cart-product-color d-flex justify-content-start align-items-center">
            <BsShieldFillCheck className='text-secondary' />
            <div className="color-name text-secondary ms-2">
              گارانتی 18 ماهه رادکالا
            </div>
          </div>
          <div className="cart-product-color d-flex justify-content-start align-items-center">
            <BsFillClipboard2CheckFill className='text-secondary' />
            <div className="color-name text-secondary ms-2">
              موجود در انبار رادکالا
            </div>
          </div>
          <div className="cart-product-price d-flex justify-content-center align-items-start flex-column">
            {off > 0 && <div className="off-count-price text-danger ms-2">
              {offCount.toLocaleString()} تومان تخفیف
            </div>}
            {off > 0 ? (
              <div className="product-final-price h5 text-light">{finalPrice.toLocaleString()} تومان</div>
            ) : (
              <div className="product-final-price h5 text-light" data-price={`${allPrice}`} >{allPrice.toLocaleString()} تومان</div>
            )}


          </div>
        </div>
      </div>



    </>
  )
}
