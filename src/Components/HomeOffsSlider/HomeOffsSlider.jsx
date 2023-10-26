import React, { useEffect, useState } from 'react'
import './HomeOffsSlider.css'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsArrowLeftCircle } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeOffsSlider({ products, offCard, bgColor }) {
       useEffect(() => {
              AOS.init();
            }, [])


       return (
              <>
                     <div className="offCards-container">
                            <div className="offCards-wrapper mx-auto overflow-hidden" data-aos="flip-down" data-aos-duration="1500" style={{ backgroundColor: bgColor }}>
                                   <div className="container py-2">
                                          <Swiper
                                                 slidesPerView={'auto'}
                                                 spaceBetween={0}

                                                 className="mySwiper"
                                          >
                                                 {offCard ? (<SwiperSlide className=' h-100 swiper-offCard-first-slide '>
                                                        <div className="d-flex flex-column">
                                                               <div className=' d-flex flex-column'>
                                                                      <div className=' d-flex-centering off-swiper-first-slide-title text-light fw-bolder'>
                                                                             پیشنهاد
                                                                      </div>
                                                                      <div className=' d-flex-centering off-swiper-first-slide-title text-light fw-bolder'>
                                                                             شگفت
                                                                      </div>
                                                                      <div className=' d-flex-centering off-swiper-first-slide-title text-light fw-bolder'>
                                                                             انگیز
                                                                      </div>

                                                               </div>
                                                               <img src="images/offBox/offBox.webp"
                                                                      className='off-swiper-first-slide-img my-1' alt="" />
                                                               <Link className='off-swiper-first-slide-btn' to={'/products/all'}>
                                                                      مشاهده همه <AiOutlineArrowLeft />
                                                               </Link>
                                                        </div>
                                                 </SwiperSlide>) : (
                                                        <SwiperSlide className='which-card-get-border ' style={{width:0}}></SwiperSlide>
                                                 )}
                                                 {
                                                        products && products.slice(0, 10).map((product, index) => (
                                                               <SwiperSlide className=' h-100 swiper-offCard-slide bg-light which-card-get-border' key={index} >
                                                                      <Link to={`products/product/${product._id}`}>
                                                                             <div className='w-100 h-50  d-flex-centering ' >
                                                                                    <img src={product.mainImg} className=' offCard-img mt-3' alt="" />
                                                                             </div>
                                                                             <div className="row mb-4  mt-5">
                                                                                    <div className='offCard-product-name mb-2'>{product.cardName}</div>
                                                                                    <div className="col-6 d-flex justify-content-center align-items-start">
                                                                                           {product.off > 0 ? (
                                                                                                  <div className="offCard-off-count ms-2 rounded-pill text-light">%{product.off}</div>
                                                                                           ) : null}
                                                                                    </div>
                                                                                    <div className="col-6 d-flex flex-column justify-content-start align-items-center">

                                                                                           {
                                                                                                  product.off > 0 ? (
                                                                                                         <div className="offCard-priceWithOff me-2">{(product.price * (100 - product.off) / 100).toLocaleString()} تومان</div>
                                                                                                  ) : (
                                                                                                         <div className="offCard-priceWithOff me-2 mt-2">{product.price.toLocaleString()} تومان</div>
                                                                                                  )
                                                                                           }


                                                                                           <div className="d-flex justify-content-end  offCard-main-price me-2 text-secondary ">
                                                                                                  {product.off > 0 && product.price.toLocaleString()}
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </Link>
                                                               </SwiperSlide>
                                                        ))
                                                 }
                                                 {
                                                        offCard ? (
                                                               <SwiperSlide className=' h-100 swiper-offCard-last-slide bg-light which-card-get-border'>
                                                                      <Link to={'/products/all'} className='d-flex-centering flex-column h-100 w-100 swiper-offCard-last-slide-link'>
                                                                             <BsArrowLeftCircle className='last-offCardIcon mb-3' />
                                                                             مشاهده همه
                                                                      </Link>
                                                               </SwiperSlide>
                                                        ) : null
                                                 }


                                          </Swiper>
                                   </div>
                            </div>
                     </div>
              </>
       )
}

