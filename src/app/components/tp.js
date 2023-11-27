import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const TreandingProducts=()=>{
   
   
     const product=[
        {
            img : "tp/3013694.jpg",
            name: "KiranaWorld",
            title:"Medium Prawns Jhinga Chingri",
            price : "191",
            price1 : "250",
            gross : "1 Kg",
            opt : "Options"
        },
        {
            img : "tp/3013697.jpg",
            name: "Kw NonVeg",
            title:"Premium Chicken Boneless curry cut",
            price : "288",
            price1 : "350",
            gross : "1 Kg",
            opt : "Options"
        },
        {
            img : "tp/3013700.jpg",
            name: "Kw Nonveg",
            title:"Premium Chicken Biryani Cut",
            price : "191",
            price1 : "250",
            gross : "1 kg",
            opt : "Add +"
        },
        {
            img : "tp/3013703.jpg",
            name: "Kw NonVeg",
            title:"Premium Chicken Boneless full Breast",
            price : "324",
            price1 : "420",
            gross : "1 kg",
            opt : "Add +"
        },
        {
            img : "tp/3013706.jpg",
            name: "Kw NonVeg",
            title:"Premium chicken Boneless Tikka cut",
            price : "300",
            price1 : "400",
            gross : "1 Kg",
            opt : "Options"
        },
        {
            img : "tp/3013709.jpg",
            name: "Kw Nonveg",
            title:"chicken Drumstick",
            price : "288",
            price1 : "350",
            gross : "1 Kg(approx 6pcs)",
            opt : "Options"
        },
        {
            img : "tp/3016119.jpg",
            name: "Kw Nonveg",
            title:"Desi Chicken Curry Cut",
            price : "720",
            price1 : "800",
            gross : "1 Kg dressed",
            opt : "Add +"
        }

     ]


    return (
        <div>
           <div className='hothead'>
              <h3>Treanding Products</h3>
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