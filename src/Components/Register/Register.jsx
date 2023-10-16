import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='register-container mx-auto my-5 '>
    <div className="d-flex justify-content-around flex-column w-100 h-100">
      <label className=' form-label text-light'>نام کاربری :</label>
           <input type="text" className='form-control ' placeholder='نام کاربری خود را انتخاب کنید'/>
           <label className=' form-label text-light mt-2'>ایمیل :</label>
           <input type="text" className='form-control' placeholder='ایمیل خود را وارد کنید'/>
           <label className=' form-label text-light mt-2'> شماره تماس :</label>
           <input type="text" className='form-control' placeholder='شماره موبایل خود را وارد کنید'/>
           <label className=' form-label text-light mt-2'>رمز ورود :</label>
           <input type="text" className='form-control' placeholder='رمز عبور خود را انتخاب کنید' />
           <label className=' form-label text-light mt-2'>تکرار رمز ورود :</label>
           <input type="text" className='form-control' placeholder='رمز عبور خود را مجددا وارد کنید' />
           <Link className='btn btn-primary align-self-end mt-2' >ثبت نام</Link>
    </div>
        </div>
  )
}
