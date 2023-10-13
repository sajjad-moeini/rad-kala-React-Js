import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
export default function Product() {
  const [productId,setProductId]= useState()
  const products = useSelector(state=>(state.products))
  const [product,setProduct] = useState({})
  useEffect(()=>{
    document.title = 'محصول'
    setProductId(document.location.pathname.slice(18))
    
})
useEffect(()=>{
  setProduct(products.filter(pr=>pr._id == +productId))  
},[productId])

product[0] && console.log(product[0])


  return (
   <></>
  )
}
