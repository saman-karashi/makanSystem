import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from "swiper";


const Carousels = () => {
  return (
  <div className='carousel--wrapper'>
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{clickable:true}}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
              <div className='carousel-body text-white text-lg-end text-center p-sm-7 p-2'>
                  <h1 className='mb-4 display-3 carousel-title'>
                      عنوان
                  </h1>
                  <p className='fs-3 w-50 carousel-text'>
                      شرکت داده پرداز ماکان سیستم دانشمند در راستای اهداف عالیه صنعت برق و انرژی در سال 1388 با موضوع مشاوره و تهیه نرم افزار در حوزه صنعت برق و دیگر صنایع
                  </p>
              </div>
      </SwiperSlide>
      <SwiperSlide>
              <div className='carousel-body text-white text-lg-end text-center p-sm-7 p-2'>
                  <h1 className='mb-4 display-3 carousel-title'>
                      عنوان
                  </h1>
                  <p className='fs-3 w-50 carousel-text'>
                      شرکت داده پرداز ماکان سیستم دانشمند در راستای اهداف عالیه صنعت برق و انرژی در سال 1388 با موضوع مشاوره و تهیه نرم افزار در حوزه صنعت برق و دیگر صنایع
                  </p>
              </div>
      </SwiperSlide>
  
    </Swiper>
  </div>
  )
}

export default Carousels