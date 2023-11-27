import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const HotProduct=()=>{
   
   
     const product=[
        {
            img : "3016976.jpg",
            name: "Kw NonVeg",
            title:"Medium Prawns Jhinga Chingri",
            price : "135",
            price1 : "160",
            gross : "250grm",
            opt : "Options"
        },
        {
            img : "3011637.jpg",
            name: "Aashirvaad",
            title:"Aashirvaad Atta-Whole Wheat",
            price : "225",
            price1 : "256",
            gross : "5Kg",
            opt : "Options"
        },
        {
            img : "3011752.jpg",
            name: "Mithila Bhog",
            title:"Mithila Maidad",
            price : "21",
            price1 : "25",
            gross : "500gm",
            opt : "Out of Stock"
        },
        {
            img : "3007258.jpg",
            name: "KiranaWorld",
            title:"Suji",
            price : "60",
            price1 : "75",
            gross : "1 kg",
            opt : "Add +"
        },
        {
            img : "3007252.jpg",
            name: "Kiranaworld",
            title:"Sattu",
            price : "71",
            price1 : "90",
            gross : "500 g",
            opt : "Options"
        },
        {
            img : "dal.jpg",
            name: "Kiranaworld",
            title:"Premium Arhar/Tur dal",
            price : "161",
            price1 : "174",
            gross : "1 Kg",
            opt : "Options"
        },
        {
            img : "urad.jpg",
            name: "Kiranaworld",
            title:"Urad daal badi",
            price : "150",
            price1 : "210",
            gross : "1 Kg",
            opt : "Options"
        },

     ]


    return (
        <div>
           <div className='hothead'>
              <h3>Hot Products</h3>
              <span><hr /></span>
              <p>A virtual assistant collects the products from your list</p>
           </div>
    
       <div className='home-body'>
       <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
    //   slidesPerView={'auto'}
      navigation
       breakpoints={{
        600: {
            slidesPerView : 2,
        },
        900:{
            slidesPerView : 5
        }
       }}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            {
                product.map((p,i)=>{
                    return (
                        <SwiperSlide>
                         <div className='hotbody' key={p.i}>
                              <img src={p.img} alt='img' />
                            <div className='homename'>
                              {p.name}
                            </div>
                            <div className='hometitle'>
                              {p.title}
                            </div>
                            <div className='homeprice'>
                            <i class="bi bi-currency-rupee"></i>{p.price} <span><i class="bi bi-currency-rupee"></i>{p.price1}</span> 
                            </div>
                            <div className='homegross'>
                              {p.gross}
                              <span><button className='btn btn-primary'>{p.opt}</button></span>
                            </div>
                         </div>
                        </SwiperSlide>
                    )
                })
            }
             </Swiper>
           </div>
          
        </div>
    )
}