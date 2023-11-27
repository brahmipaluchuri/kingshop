import React from 'react';


export const SubCategories=()=>{

    const sub = [
        {
            name : "Atta",
            img : "sub/atta.png",
            opy : "Shop Now"
        },
        {
            name : "Rice",
            img : "sub/rice.png",
            opy : "Shop Now"
        },
        {
            name : "Organic and healthy",
            img : "sub/organic.png",
            opy : "Shop Now"
        },
        {
            name : "Other Pulses",
            img : "sub/otherpulse.png",
            opy : "Shop Now"
        },
        {
            name : "Other flours",
            img : "sub/otherflour.png",
            opy : "Shop Now"
        },
        {
            name : "Poha and cereals",
            img : "sub/poha.png",
            opy : "Shop Now"
        }
    ]
    return (
        <>
         <h3 className='home-rice'>Rice,Atta And Dals Sub-Categories</h3>
         <div className='home-sub'>
          {
            sub.map((sub,i)=>{
                return (
                    <div key={sub.i}>
                      <div className='home-subbody'>
                         <h6>{sub.name}</h6>
                         <img src={sub.img} />
                      </div>
                      <div className='home-btn'>
                         <button className='btn btn-primary'>{sub.opy}</button>
                      </div>
                    </div>
                )
            })
          }
          </div>
        </>
    )
}