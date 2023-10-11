import React, { useEffect, useState } from 'react'
import './HomeOffsSlider.css'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {BsArrowLeftCircle} from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function HomeOffsSlider() {
       const allStoreProducts = useSelector(state => state.products)
       const allProducts = []
       const [offProducts, setOffProducts] = useState([])
       const [slidePerPage, setSlidePerPage] = useState()
       const [spaceBetweenCards, setSpaceBetweenCards] = useState()
       useEffect(() => {
              // offCardsCountGen()
              allStoreProducts.map(products => {
                     if (products.title == 'گوشی موبایل') {
                            products.products.map(product => {
                                   product.products.forEach(product => allProducts.push(product))
                            })
                     } else {
                            products.products.forEach(product => allProducts.push(product))
                     }
              })
              allProducts.forEach(product => {
                     if (product.off > 0) {
                            setOffProducts(prev => ([...prev, product]))
                     }
              })
       }, [])
       function offCardsCountGen() {
              if (window.innerWidth < 400) {
                     setSlidePerPage(2)
                     setSpaceBetweenCards(200)
              }
              if (window.innerWidth < 490) {
                     setSlidePerPage(2)
                     setSpaceBetweenCards(70)
              }
              if (window.innerWidth < 578) {
                     setSlidePerPage(2)
                     setSpaceBetweenCards(70)
              }
              if (window.innerWidth < 768) {
                     setSlidePerPage(3)
                     setSpaceBetweenCards(200)
              }
              if (window.innerWidth < 998) {
                     setSlidePerPage(3)
                     setSpaceBetweenCards(50)
              }
              if (window.innerWidth < 1200) {
                     setSlidePerPage(4)
                     setSpaceBetweenCards(80)
              }
              if (window.innerWidth > 1200) {
                     setSlidePerPage(4)
                     setSpaceBetweenCards(80)
              }
       }
       // window.onresize = () => {offCardsCountGen()}
       return (
              <>
                     <div className="offCards-container">
                            <div className="offCards-wrapper mx-auto overflow-hidden">
                                   <div className="container py-2">
                                          <Swiper
                                                slidesPerView={'auto'}
                                                spaceBetween={0}
                                               
                                                className="mySwiper"
                                          >
                                                  <SwiperSlide className=' h-100 swiper-offCard-first-slide '>
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
                                                               <Link className='off-swiper-first-slide-btn' to={'/products'}>
                                                               مشاهده همه <AiOutlineArrowLeft  />
                                                               </Link>
                                                        </div>
                                                        </SwiperSlide>
                                                 {
                                                        offProducts && offProducts.slice(0,10).map((product,index)=>(
<SwiperSlide className=' h-100 swiper-offCard-slide bg-light'>
       <Link to={'/products'}>
<div className='w-100 h-50  d-flex-centering ' >
<img src={product.mainImg} className=' offCard-img mt-3' alt="" />
</div>
<div className="row mb-4  mt-5">
              <div className="col-6 d-flex justify-content-center align-items-start">
              <div className="offCard-off-count ms-2 rounded-pill text-light">%{product.off}</div>
              </div>
              <div className="col-6 d-flex flex-column justify-content-start align-items-center">
              <div className="offCard-priceWithOff me-2">{(product.price * (100-product.off)/100).toLocaleString()} تومان</div>

       <div className="d-flex justify-content-end  offCard-main-price me-2 text-secondary mt-2">
              {product.price.toLocaleString()}
       </div>
              </div>
       </div>    
       </Link>
 </SwiperSlide>
                                                        ))
                                                 }
 
 <SwiperSlide className=' h-100 swiper-offCard-last-slide bg-light '>
       <Link to={'/products'} className='d-flex-centering flex-column h-100 w-100 swiper-offCard-last-slide-link'>
       <BsArrowLeftCircle className='last-offCardIcon mb-3' />
       مشاهده همه
       </Link>
 </SwiperSlide>
                                            
                                          </Swiper>
                                   </div>
                            </div>
                     </div>
              </>
       )
}

