import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export const Slides=()=>{

    const b =[
         "sidespiller/fruits.jpg",
         "sidespiller/grocery.jpg",
         "sidespiller/sfruits.jpg",
        "sidespiller/veg.jpg"
    ]

    return (
   <div className='homesides'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
       autoplay={{delay : 3000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {
        b.map((sides,i)=>(
             <SwiperSlide className='home-side' key={sides.i}>
                <Link href='/category'>
                <img src={sides} alt='image' />
                </Link>
            </SwiperSlide>            
          
        ))
     }
    </Swiper>
</div>
    )
}