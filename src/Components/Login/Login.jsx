import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login-container mx-auto my-5'>
<div className="d-flex justify-content-around align-items-center flex-column w-100 h-100">
       <input type="text" className='form-control ' placeholder='نام کاربری خود را وارد کنید'/>
       <input type="text" className='form-control ' placeholder='رمز عبور خود را وارد کنید' />
       <Link className='btn btn-primary align-self-end'>ورود</Link>
</div>
    </div>
  )
}
