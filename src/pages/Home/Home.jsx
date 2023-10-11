import React from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { useSelector} from 'react-redux/es/hooks/useSelector'
import { getAllProduct } from '../../Redux/ProductsReducer/ProductsReducer'
import { useDispatch } from 'react-redux'
import HomeOffsSlider from '../../Components/HomeOffsSlider/HomeOffsSlider'
export default function Home() {
       const HomeBg = useSelector((state) => (state.HomeBg))
       const dispatch = useDispatch()

       return (
              <>
                     <div className="homeHeaderBg ">
                            <div className='d-flex-centering w-100 h-100 homeHeaderBg-layout text-light'>
                                   <div className="h1 welcomeNote">
                                          <Typewriter
                                                 words={['به رادکالا خوش آمدید']}
                                                 loop={2}
                                                 cursor
                                                 cursorStyle='|'
                                                 typeSpeed={100}
                                                 deleteSpeed={50}
                                                 delaySpeed={1000}

                                          />
                                   </div>
                            </div>
                     </div>
                     <HomeOffsSlider />
                     {/* <Slider items={HomeBg.firstSlider} sliderHeight={'40vh'} /> */}
              </>
       )
}
