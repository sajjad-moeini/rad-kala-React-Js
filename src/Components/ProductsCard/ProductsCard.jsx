import React, { useEffect, useState } from 'react'
import './ProductsCard.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import ProjectContext from '../../Contexts/ProjectContext';

export default function ProductsCard({ category }) {
       const projectContext = useContext(ProjectContext)
       const products = useSelector((state) => (state.products))
       const [filtredProducts, setFiltredProduct] = useState([])
useEffect(()=>{
       projectContext.setLogoSrc('../images/logo1.png')
})
       useEffect(()=>{
               AOS.init();
              
       },[])
       useEffect(() => {
              setFiltredProduct([])
              products.forEach(product => {
                     if (product.category == category) {
                            setFiltredProduct(prex => ([...prex, product]))
                     }
                     if(category == 'all'){
                            setFiltredProduct(prex => ([...prex, product]))
                     }
              })

       },[category])

       return (
              <>

                     <div className='row products-cards-container mx-auto py-5'>
                            {filtredProducts.map((product, index) => (
                                   <div className=" col-12 col-md-6 col-lg-4 col-xl-3  product-card-container" key={index} data-aos={(((index + 1) % 4 == 0) && "fade-down-right") || (((index + 1) % 4 == 1) && "fade-down-left") || 'fade-up'} data-aos-duration="1500">
                                          <Link to={`../product/${product._id}`}>
                                                 <div className="product-card p-1 px-2 position-relative" style={{width:'80%'}}>
                                                        <div className="product-card-img-container mx-auto">
                                                               <img src={`../${product.mainImg}`} className='img-fluid product-card-img ' alt="" />
                                                        </div>
                                                        <div className="product-card-name mt-3 ">
                                                               {product.cardName}
                                                        </div>
                                                        <div className="product-card-price-infos mt-4 position-absolute ">
                                                               <div className={product.off > 0 ? ('d-flex justify-content-between align-items-center') : ('d-flex justify-content-end align-items-start mb-4')}>

                                                                      {product.off > 0 ? (
                                                                             <>
                                                                                    <div className="product-card-off rounded-pill">
                                                                                           %{product.off}-
                                                                                    </div>
                                                                                    <div className='product-card-final-price'>{(product.price * ((100 - product.off) / 100)).toLocaleString()} تومان</div>
                                                                             </>
                                                                      ) : (
                                                                             <div className='product-card-final-price'>{product.price.toLocaleString()} تومان</div>
                                                                      )}
                                                               </div>
                                                               {product.off > 0 ? (

                                                                      <div className="product-card-main-price d-flex justify-content-end">
                                                                             {product.price.toLocaleString()} تومان
                                                                      </div>
                                                               ) : null}
                                                        </div>
                                                 </div>
                                          </Link>
                                   </div>
                            ))}
                     </div>
              </>
       )
}
