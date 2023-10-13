import React, { useEffect } from 'react'

export default function Product() {
  useEffect(()=>{
    document.title = 'محصول'
})
  return (
    <div>Product</div>
  )
}
