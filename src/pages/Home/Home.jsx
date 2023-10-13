import React, { useState, useEffect } from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import HomeOffsSlider from '../../Components/HomeOffsSlider/HomeOffsSlider'
import HomeCategoryItems from '../../Components/HomeCategoryItems/HomeCategoryItems'
import HomeReadingSection from '../../Components/HomeReadingSection/HomeReadingSection'
import HomeCompanyLogos from '../../Components/HomeCompanyLogos/HomeCompanyLogos'
export default function Home() {
       const allStoreProducts = useSelector(state => state.products)
       const [offProducts, setOffProducts] = useState([])
       const [newProducts, setNewProducts] = useState([])
       useEffect(() => {
              allStoreProducts.forEach((product, index) => {
                     if (product.off > 0) {
                            setOffProducts(prev => ([...prev, product]))
                     }
                     if (index % 7 == 0) {
                            setNewProducts(prev => ([...prev, product]))
                     }
              })
       }, [])

       return (
              <>
                     <div className="homeHeaderBg ">
                            <div className='d-flex-centering w-100 h-100 homeHeaderBg-layout text-light'>
                                   <div className="h1 welcomeNote">
                                          <Typewriter
                                                 words={['به رادکالا خوش آمدید']}
                                                 loop={2}
                                                 cursor
                                                 cursorStyle='|'
                                                 typeSpeed={100}
                                                 deleteSpeed={50}
                                                 delaySpeed={1000}

                                          />
                                   </div>
                            </div>
                     </div>
                     <HomeOffsSlider products={offProducts} offCard={true} bgColor={'#ef394e'} />
                     <div className="home-second-bg mt-5">
                     </div>
                     <HomeCategoryItems />
                     <div className="home-third-bg mt-5">
                     </div>
                     <div className=' d-flex-centering text-light new-product-header'>
                            جدیدترین کالاها
                     </div>
                     <HomeOffsSlider products={newProducts} offCard={false} bgColor={'rgb(19, 52, 151)'} />
                     <HomeReadingSection />
                     <div className="news-register-section p-5 my-5">
                            <div className=' d-flex-centering my-5'>
                                   <input type="email" placeholder='ایمیل خود را وارد کنید ...' className='form-control' style={{ width: '30%' }} />
                                   <a href="#" className='btn btn-outline-primary news-register-btn ms-4'>
                                          دریافت آخرین اخبار
                                   </a>
                            </div>
                     </div>
                     <HomeCompanyLogos />
              </>
       )
}
