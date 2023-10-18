import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import ProjectContext from '../../Contexts/ProjectContext'
import { Formik, Form, Field } from 'formik';
export default function Register() {

  const projectContext = useContext(ProjectContext)
  useEffect(() => {
    projectContext.setLogoSrc('../images/logo1.png')
  })

  return (
    <div className='register-container mx-auto my-5 '>
      <Formik
        validate={(values) => {
          const errors = {}
          if (values.userName.length < 6 || values.userName.length > 20) {
            errors.userName = 'تعداد کارکتر ها باید بین 6 تا 20 باشد'
          }
           if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email ='ایمیل وارد شده معتبر نیست'
          }
           if(!/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g.test(values.phone)){
            errors.phone='شماره وارد شده معتبر نیست'
          }
           if (values.password.length < 8 || values.password.length < 20) {
            errors.password = 'تعداد کارکتر ها باید بین 8 تا 20 باشد'
          }
           if (values.repassword !== values.password) {
            errors.repassword = 'تکرار رمز عبور با رمز عبور مطابقت ندارد'
          }
          return errors
        }}
       initialValues={{
        userName: '',
        fnamelname: '',
        email: '',
        phone: '',
        password: '',
        repassword: '',
       }}

      >
        {({errors,touched}) => (
         

          <Form className="d-flex justify-content-around flex-column w-100 h-100">
            {console.log(errors)}
            {console.log(touched)}
            <label className=' form-label text-light mt-2'>نام کاربری :</label>
            <Field type="text"  name='userName' placeholder='نام کاربری خود را انتخاب کنید' className='form-control ' />
            {touched.userName && (
             errors.userName && <span className='text-danger check-validate-text'>{errors.userName}</span>
            )}

            <label className=' form-label text-light mt-2'>نام و نام خانوادگی :</label>
            <Field type="text" name='fnamelname' placeholder='نام و نام خانوادگی خود را انتخاب کنید' className='form-control ' />
            {touched.fnamelname && (
             errors.fnamelname && <span className='text-danger check-validate-text'>{errors.fnamelname}</span>
            )}

            <label className=' form-label text-light mt-2'>ایمیل :</label>
            <Field type="text" name='email' placeholder='ایمیل خود را وارد کنید' className='form-control ' />
            {touched.email && (
             errors.email && <span className='text-danger check-validate-text'>{errors.email}</span>
            )}

            <label className=' form-label text-light mt-2'> شماره تماس :</label>
            <Field type="text" name='phone' placeholder='شماره موبایل خود را وارد کنید' className='form-control ' />
            {touched.phone && (
             errors.phone && <span className='text-danger check-validate-text'>{errors.phone}</span>
            )}

            <label className=' form-label text-light mt-2'>رمز ورود :</label>
            <Field type="password" name='password' placeholder='رمز عبور خود را انتخاب کنید' className='form-control ' />
            {touched.password && (
             errors.password && <span className='text-danger check-validate-text'>{errors.password}</span>
            )}

            <label className=' form-label text-light mt-2'>تکرار رمز ورود :</label>
            <Field type="password" name='repassword' placeholder='رمز عبور خود را مجددا وارد کنید' className='form-control ' />
            {touched.repassword && (
             errors.repassword && <span className='text-danger check-validate-text'>{errors.repassword}</span>
            )}

            <Link className='btn btn-primary align-self-end mt-2' >ثبت نام</Link>
          </Form>)}
      </Formik>
    </div>
  )
}
