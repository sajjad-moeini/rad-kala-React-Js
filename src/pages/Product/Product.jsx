import React, { useEffect, useState } from 'react'
import './Product.css'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillStar, AiFillLike } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ProjectContext from '../../Contexts/ProjectContext'
import { useContext } from 'react'



export default function Product() {
  const [productId, setProductId] = useState()
  const products = useSelector(state => (state.products))
  const radKalaOptions = useSelector(state => (state.RadKalaOption))
  const cart = useSelector((state) => (state.CartItems))
  const [product, setProduct] = useState({})
  const [largeImgSrc, setLargeImgSrc] = useState('')
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const projectConte = useContext(ProjectContext)
  useEffect(() => {
    document.title = 'محصول'
    setProductId(document.location.pathname.slice(18))
    projectConte.setLogoSrc('../../images/logo1.png')

  })
  useEffect(() => {
    setProduct(products.filter(pr => pr._id == +productId))
  }, [productId])
  useEffect(() => {
    product[0] && setLargeImgSrc(`../../${product[0].mainImg}`)
  }, [product])



  return (
    <>

      {
        product[0] &&
        <>
          <div className="row product-page-contant mx-auto">
            <div className="col-12 col-md-4  mt-4  ">
              <div className='product-page-images-container-box p-2'>
                <div className="product-md-lg-img-container overflow-hidden">
                  <img src={largeImgSrc} className='img-fluid' alt="" />
                </div>
                <div className="product-md-sm-img-container container">
                  <div className="row">
                    {
                      product[0].allImages.map((img, index) => (
                        <div className="col-2 product-md-sm-img d-flex-centering" key={index}>
                          <img src={`../../${img}`} onMouseEnter={() => setLargeImgSrc(`../../${img}`)} className='img-fluid' alt="" />
                        </div>
                      ))

                    }
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-8 mt-4 px-5">
              <div className="product-title h1 text-light">
                {product[0].name}
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="d-flex text-light">
                    <div className=' d-flex-centering product-mini-infos'>
                      <AiFillStar className='text-warning' />{product[0].rate} (1077)
                    </div>
                    <div className='fs-2 mb-2 text-secondary mx-1'>.</div>
                    <div className=' d-flex-centering product-mini-infos'>
                      <a href="#product-comments">
                        {product[0].comments.length} دیدگاه
                      </a>
                    </div>
                    <div className='fs-2 mb-2 text-secondary mx-1'>.</div>
                    <div className=' d-flex-centering product-mini-infos'>
                      <a href="#product-questions
">
                        {product[0].questions
                          .length} پرسش
                      </a>
                    </div>
                  </div>
                  <div className='product-mini-infos'>
                    <AiFillLike className='text-success' /> 91%  (999 نفر)
                    از خریداران، این کالا را پیشنهاد کرده‌اند
                    <BsInfoCircleFill />
                  </div>
                  <hr className=' d-md-none text-light' />
                  {
                    product[0].colors && <div className="product-color- mt-4 ps-3">
                      <div className="row text-light color-box-title h2">
                        رنگ :    {product[0].colors.length} رنگ

                      </div>
                      <div className="all-color-boxes d-flex ">
                        {
                          product[0].colors.map((color, index) => (
                            <div className="color-box rounded-circle me-2 my-2" key={index}>
                              <div className='w-100 h-100 rounded-circle d-flex-centering' style={{ background: color }} onClick={(e) => {
                                !e.target.innerHTML ? (e.target.innerHTML = `✔`) : (e.target.innerHTML = ``)
                              }} >
                              </div>
                            </div>
                          ))
                        }

                      </div>
                    </div>
                  }
                  <div className=' d-md-none up-property-space'></div>

                  <div className="d-flex justify-content-between">
                    <div className='product-properties-container '>
                      <div className='property-section-title text-light h4'>
                        ویژگی ها
                      </div>
                      {
                        product[0].propertys.map((prop, index) => (
                          <div className=' d-flex text-secondary' key={index}>
                            <div className="property-title">
                              {prop.title}
                            </div>
                            <div className='mx-1 fw-bolder'> : </div>
                            <div className='property-sub'>
                              {prop.subTitle}
                            </div>
                          </div>
                        ))
                      }

                    </div>
                    <div className='product-properties-container '>
                      <div className='property-section-title text-light h4'>
                        مشخصات
                      </div>
                      {
                        product[0].Specifications.map((prop, index) => (
                          <div className=' d-flex text-secondary' key={index}>
                            <div className="property-title">
                              {prop.title}
                            </div>
                            <div className='mx-1 fw-bolder'> : </div>
                            <div className='property-sub'>
                              {prop.subtitle}
                            </div>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                  <hr />
                  <div className="p-2 text-secondary back-product">
                    <BsInfoCircleFill className='fs-4 me-2' />
                    امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="free-delivery mx-auto py-1 px-4 mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="h6 text-light">
                ارسال رایگان برای این کالا
              </div>
              <img src="../../images/bg/freeDelivery.svg" alt="" />
            </div>
          </div>
          <div className='radkala-options-container d-flex justify-content-around'>
            {
              radKalaOptions && radKalaOptions.map((option, index) => (
                <div className="d-flex" key={index}>

                  <div className='radkala-options-img-container'>
                    <img src={option.img} alt="" />
                  </div>
                  <div className='radkala-options-title'>
                    {option.title}
                  </div>
                </div>
              ))
            }

          </div>

          <div className="product-page-sections-container my-5 ps-4">
            <div className="d-flex w-25 justify-content-between">
              <a className='product-page-sections-link' href="#product-page-more-info-section ">
                اطلاعات
              </a>
              <a className='product-page-sections-link' href="#product-page-comments-container">
                کامنت ها
              </a>
              <a className='product-page-sections-link' href="#product-page-question-container">
                پرسش ها
              </a>
            </div>
          </div>

          <div id="product-page-more-info-section" className='px-4'>
            <div className="h4 product-page-more-info-section-title my-4">
              {product[0].moreInfo.title}
            </div>
            <p className='product-page-more-info-section-text'>
              {product[0].moreInfo.text}
            </p>
          </div>

          <div id='product-page-comments-container' className='px-4 '>
            <div className="h4 my-4 text-light">
              نظرات کاربران
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="your-comment-title">
                  لطفا نظر خود را ثبت کنید
                </div>
                <div className="user-new-comment-container mx-auto">
                  <select className='form-control my-4' >
                    <option value="-1">
                      امتیاز شما به کالا
                    </option>
                    <option value="1">
                      بسیار بد
                    </option>
                    <option value="2">
                      بد
                    </option>
                    <option value="3">
                      متوسط
                    </option>
                    <option value="4">
                      خوب
                    </option>
                    <option value="5">
                      بسیار خوب
                    </option>
                  </select>
                  <textarea cols="30" rows="10" className='form-control' placeholder='نظر شما ...'></textarea>
                  <div className=' d-flex justify-content-end mt-4'>
                    <a href="#" className='btn btn-primary ms-auto'>
                      ثبت نظر
                    </a>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9">
                {product[0].comments.map((comment, index) => (
                  <div className='comment-container mt-2' key={index}>
                    <div className="comment-rate text-light d-flex justify-content-start align-items-center fs-5">
                      <AiFillStar className='text-warning ms-3' />
                      <div className='me-3'>   {comment.rate} </div>
                      <div className="comment-user-name ms-5">
                        سجاد معینی راد
                      </div>
                    </div>
                    <div className="comment text-light my-3">
                      {comment.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div >

          <div id='product-page-question-container ' className='px-4 my-5'>
            <div className="h4 my-4 text-light">
              پرسش کاربران
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="your-comment-title">
                  لطفا پرسش خود را ثبت کنید
                </div>
                <div className="user-new-comment-container mx-auto mt-3">
                  <textarea cols="30" rows="10" className='form-control' placeholder='پرسش شما ...'></textarea>
                  <div className=' d-flex justify-content-end mt-4'>
                    <a href="#" className='btn btn-primary ms-auto'>
                      ثبت پرسش
                    </a>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9">
                {product[0].questions.map((quez, index) => (
                  <div className='comment-container mt-2' key={index}>
                    <div className="comment-rate text-light d-flex justify-content-start align-items-center fs-5">
                      <div className="comment-user-name ms-5">
                        سجاد معینی راد
                      </div>
                    </div>
                    <div className="comment text-light my-3">
                      {quez}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div >

          <div className="product-price bg-danger d-flex justify-content-around align-items-center">
            <div className="peoduct-price-container">

              {
                product[0].off > 0 ? (

                  <div className="h4 text-light product-page-final-price">
                    {(product[0].price * ((100 - product[0].off) / 100)).toLocaleString()} تومان
                  </div>
                ) : (
                  <div className="h4 text-light product-page-final-price">
                    {product[0].price.toLocaleString()} تومان
                  </div>
                )
              }

              {product[0].off > 0 &&
                (
                  <div className='product-page-price h6 text-center'>
                    {product[0].price.toLocaleString()} تومان

                  </div>
                )}
            </div>
            <button onClick={() => {

              let newCartItem = {
                id: projectConte.cartItems.length + 1,
                name: product[0].cardName,
                count: 1,
                price: product[0].price,
                off: product[0].off
              }
              projectConte.setCartItems(prev => ([...prev, newCartItem]))

              MySwal.fire({
                title:
                  ' محصول با موفقیت به سبد خرید اضافه شد'
                ,
                icon: 'success',
                confirmButtonText: 'ممنون',
                confirmButtonColor: '#0d50b5'


              }).then(res => {
                if (res.isConfirmed) {
                  navigate('/products/all')
                }
              })
            }} className='btn btn-primary'>
              افزودن به سبد خرید
            </button>
          </div>

        </>
      }

    </>
  )
}
