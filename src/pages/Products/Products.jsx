import React, { useEffect, useState } from 'react'
import './Products.css'
import { useSelector } from 'react-redux'

import ProductsCard from '../../Components/ProductsCard/ProductsCard'
export default function Products() {
       const allStoreProducts = useSelector(state => state.products)
       const [allProducts,setAllProducts] = useState([])
       const [offProducts, setOffProducts] = useState([])
       const [newProducts, setNewProducts] = useState([])
       useEffect(() => {
              allStoreProducts.map(products => {
                     if (products.title == 'گوشی موبایل') {
                            products.products.map(product => {
                                   product.products.forEach(product => {
                                          setAllProducts( prev =>([...prev , product]))
                                   })
                            })
                     } else {
                            products.products.forEach(product =>{
                                   setAllProducts( prev =>([...prev , product]))
                            })
                     }
              })
              allProducts.forEach((product, index) => {
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
             {allProducts && <ProductsCard products={allProducts} />}
             
             </>
       )
}
