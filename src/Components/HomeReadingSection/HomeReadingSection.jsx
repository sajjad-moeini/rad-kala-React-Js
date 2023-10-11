import React, { useEffect } from 'react'
import './HomeReadingSection.css'
import { useSelector } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HomeReadingSection() {
       const articels = useSelector((state) => (state.HomeReadingSection))
       
       useEffect(()=>{
              AOS.init();
       },[])
       return (
              <>
              <div className=' text-light reading-section-header'>
                            خواندنی ها 
                     </div>
                     <div className="row w90 mx-auto">
                            {
                                   articels.map((article, index) => (
                                          <div className="col-12 col-sm-6 col-md-3 reading-box p-4" key={index} data-aos={article.anim} data-aos-duration="1000">
                                                 <div className="reading-box-container overflow-hidden  mx-auto">
                                                        <img src={article.imgSrc} className=' img-fluid reding-box-img' alt="" />
                                                        <div className='reding-box-text-container' >
                                                               <p className='reding-box-text text-light'>
                                                                      {article.title}
                                                               </p>
                                                        </div>
                                                 </div>
                                          </div>
                                   ))
                            }

                     </div>
              </>
       )
}
