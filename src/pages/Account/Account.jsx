import React from 'react'
import './Account.css'
import { NavLink, Outlet } from 'react-router-dom'
export default function Account() {
  return (
    <>
    <div className="row account-sections-container mt-5">
       <NavLink to={'login'} className={(item)=>item.isActive ? ("col-6 d-flex-centering h5 account-sections-title  account-sections-title-active") :("col-6 d-flex-centering h5 account-sections-title  ")}>      
              ورود
       </NavLink>
       <NavLink to={'register'} className={(item)=>item.isActive ? ("col-6 d-flex-centering h5 account-sections-title  account-sections-title-active") :("col-6 d-flex-centering h5 account-sections-title  ")}>
              عضویت
       </NavLink>
    </div>
    <Outlet />
    </>
  )
}
