import React from 'react'
import './HomeCompanyLogos.css'
import { useSelector } from 'react-redux'
export default function HomeCompanyLogos() {
       const logos = useSelector((state)=>(state.HomeCompanyLogo))
  return (
    <>
    <div className="row company-logo-container">
{
       logos.map((logo,index)=>(
              <div className="col-4 col-sm-3 col-md-2 mx-auto d-flex-centering" key={index}>
                     <img src={logo} className='img-fluid company-logo'  alt="" />
              </div>
       ))
}
    </div>
    </>
  )
}
