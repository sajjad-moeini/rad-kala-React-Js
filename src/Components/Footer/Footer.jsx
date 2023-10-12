import React from 'react'
import './Footer.css'
import { useSelector } from 'react-redux'
import {TfiInstagram} from 'react-icons/tfi'
import {AiFillGithub,AiTwotoneMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import {BsFillTelephonePlusFill} from 'react-icons/bs'
export default function Footer() {
       const footerUls = useSelector(state => state.FooterItems)
       return (
              <>
                     <div className="row" id='footer'>
                            {
                                   footerUls.map((ul, index) => (
                                          <div className="col-12 col-md-4" key={index}>
                                                 <ul className='footer-ul'>
                                                        {ul.map((li, index) => (
                                                               <li key={index} className='text-secondary footer-ul-item'>{li}</li>
                                                        ))}
                                                 </ul>
                                          </div>
                                   ))
                            }
                            <div className="col-12 col-md-4" >
                                   <ul className='footer-ul' dir='ltr'>
<li className='footer-ul-item-social'>
       <a href="https://instagram.com/thisisajjad" dir='ltr' className='footer-social-link'>
       <TfiInstagram className='text-light' />   thisisajjad
       </a>
</li>
<li className='footer-ul-item-social'>
       <a href="https://github.com/sajjad-moeini" dir='ltr' className='footer-social-link'>
       <AiFillGithub className='text-light' />   sajjad-moeini
       </a>
</li>
<li className='footer-ul-item-social'>
       <a href="https://linkedin.com/thisisajjad" dir='ltr' className='footer-social-link'>
       <AiFillLinkedin className='text-light' />   sajjad-moeini
       </a>
</li>
<li className='footer-ul-item-social'>
       <a href="https://t.me/sajjad_moeini" dir='ltr' className='footer-social-link'>
       <FaTelegram className='text-light' />   sajjad_moeini
       </a>
</li>
<li className='footer-ul-item-social'>
       <a href="" dir='ltr' className='footer-social-link'>
       <AiTwotoneMail className='text-light' /> sajjadmoeini97@gmail.com
       </a>
</li>
<li className='footer-ul-item-social'>
       <a href="" dir='ltr' className='footer-social-link'>
       <BsFillTelephonePlusFill className='text-light' />   (+98) 9195805686
       </a>
</li>
                                   </ul>
                            </div>
                     </div>
              </>
       )
}
