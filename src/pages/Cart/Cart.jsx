import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import ProjectContext from '../../Contexts/ProjectContext'
export default function Cart() {
  const projectContex = useContext(ProjectContext)
  console.log(projectContex.cartItems)
  return (
    <div>Cart</div>
  )
}
