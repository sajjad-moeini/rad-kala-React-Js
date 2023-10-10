import React from 'react'
import './Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom'
export default function Slider({ items ,sliderHeight}) {
       console.log(items)
       return (
              <>
                     <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            style={{height:sliderHeight}}
                     >
                            {items.map((item, index) => (
                                 
                                          <SwiperSlide key={index}>
                                                   <NavLink to={item.path} >
                                                 <img src={item.imgSrc} className='img-fluid' alt="" />
                                          
                                          </NavLink>
                                          </SwiperSlide>

                            ))}
                     </Swiper>

              </>
       )
}
