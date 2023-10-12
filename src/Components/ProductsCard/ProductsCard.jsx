import React from 'react'
import './ProductsCard.css'
import { Link } from 'react-router-dom'
export default function ProductsCard({products}) {
       console.log(products)
  return (
    <>
    
     <div className='row products-cards-container mx-auto py-5'>
     { products.map((product,index)=>(
       <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" key={index}>
                            <Link>
                            <div className="product-card p-1 px-2 position-relative">
                                   <div className="product-card-img-container mx-auto">
                                          <img src='images/camera/1/114000898.webp' className='img-fluid product-card-img ' alt="" />
                                   </div>
                                   <div className="product-card-name mt-3 ">
                                         {product.cardName}
                                   </div>
                                   <div className="product-card-price-infos mt-3 position-absolute ">
                                          <div className="d-flex justify-content-between align-items-center">
                                         {product.off > 0 ? (
                                          <>
                                          <div className="product-card-off rounded-pill">
                                          %{product.off}-
                                   </div>
                                   <div className='product-card-final-price'>{product.price * ((100 - product.off)/100)} تومان</div>
                                   </>
                                         ): (
                                          <div className='product-card-final-price'>{product.price} تومان</div>
                                         )} 
                                          <div className="product-card-main-price d-flex justify-content-end">
                                          {product.price} تومان
                                         </div>

                                          </div>
                                
                                   </div>
                            </div>
                            </Link>
                     </div>
    ))}
              </div>
    </>
  )
}
