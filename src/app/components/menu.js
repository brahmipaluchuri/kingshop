import React from 'react';
import { Slides } from './slides';
import { HotProduct } from './hotproduct';
import { TreandingProducts } from './tp';
import { SubCategories } from './subcate';

const Menu=()=>{
    return (
         <div>
              <Slides />
              <HotProduct />
              <TreandingProducts />
              <SubCategories />
         </div>
    )
}

export default Menu;