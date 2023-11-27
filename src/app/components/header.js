import React from 'react';
import Link from 'next/link';

const Header=()=>{
    return (
        <div>        
       <div className='home-container'>
        <Link href='/'>
           <div className='home-head'>
             <img src='Logo KiranaWorld.png' alt='Logo' />
           </div>
           </Link>
           <div className='home-loc'>
              <select className='form-control' style={{color:"#0e947a",fontWeight:"600"}}>
              <option>Your Location</option>
              </select> 
           </div>
           <div className='home-inp'>
             <input type='text' className='form-control s' placeholder='search for me...' />
             <span className='home-sear'><i class="bi bi-search"></i></span>
           </div>
           <div className='home-log'>
              <span className='home-p'><i class="bi bi-telephone"></i></span>
              <span className='home-c'><i class="bi bi-cart3"></i></span>
              <span className='home-l'><i class="bi bi-person-circle"></i> Login</span>
           </div>
       </div>
       <div className='home-cat d-md-none'>
        <ul>
         <Link href='/' style={{textDecoration:"none", color:"white"}}>
         <i class="bi bi-house-door"></i>
         <li>Home</li>
         </Link>
         <Link href='/category' style={{textDecoration:"none", color:"white"}}>
         <i class="bi bi-bookmark"></i>
         <li>Category</li>
         </Link>
         <Link href='/search' style={{textDecoration:"none", color:"white"}}>
         <i class="bi bi-search"></i>
         <li>search</li>
         </Link>
         <Link href='/mywish' style={{textDecoration:"none", color:"white"}}>
         <i class="bi bi-heart"></i>
         <li>My Wish</li>
         </Link>
         <Link href='/card' style={{textDecoration:"none", color:"white"}}>
         <i class="bi bi-cart3"></i> <span className='home-zero'>0</span>
         <li>Card</li>
         </Link>
         
        </ul>
         
   </div>
   </div>
    )
}

export default Header;