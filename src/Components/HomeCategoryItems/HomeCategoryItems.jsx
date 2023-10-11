import React from 'react'
import './HomeCategoryItems.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function HomeCategoryItems() {
       const categories = useSelector((state) => (state.HomeCategories))
       return (
              <div className="home-categories mt-5">
                     <div className=' d-flex-centering '>
                            <div className="h2 text-light">
                                   خرید بر اساس دسته بندی
                            </div>
                     </div>
                     <div className="row mt-5 p-5">
                            {
                                   categories.map((category, index) => (
                                          <div className="col-2 col-sm-4 col-md-3 mt-4 " key={index}>
                                                 <Link  to={category.path} className='d-flex-centering flex-column'>
                                                        <div className="home-category-box-img-container  overflow-hidden">
                                                               <img src={category.imgSrc} alt="" className='img-fluid home-category-box-img' />
                                                        </div>
                                                        <div className='home-category-box-title text-light'>
                                                               {category.title}
                                                        </div>
                                                 </Link>
                                          </div>
                                   ))
                            }

                     </div>
              </div>
       )
}
