import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'
import Cart from '../cart/Cart';
import { getItemsToCartLocalStorage, removeItemsToCartLocalStorage, setItemsToCartLocalStorage } from '../../utilities/localStorage';

const Bottles = ({bottlepromise2 }) => {

    const bottlesinfo2=use(bottlepromise2);
    // const bottlesinfo1=use(bottlepromise1);
    // console.log(bottlesinfo1)
    // console.log(bottlesinfo2)
    const [items,setitems]=useState([]);
    const handleAddToCart=(bottle)=>{
        // console.log(bottle.id)
        const additems=[...items,bottle]
        setitems(additems)
        setItemsToCartLocalStorage(bottle.id);
        
    }
    useEffect(() => {
        const getItem=getItemsToCartLocalStorage();

        const storebottleinfo=[];

        for(const id of getItem){
           const storageValue= bottlesinfo2.find(bottle=>bottle.id===id)
           if(storageValue){
          storebottleinfo.push(storageValue)

           }
        }
        setitems(storebottleinfo)

    },[bottlesinfo2])
    // console.log(items.length)
    const handleRemoveFromCart=(itemsId)=>{
                // const getItem=getItemsToCartLocalStorage();
                const remainingCartItems=items.filter(bottle=>bottle.id !== itemsId);
                setitems(remainingCartItems);
                removeItemsToCartLocalStorage(itemsId);


    }

    return (
       <div>
        <div>
            <h3>Add to cart items : {items.length} </h3>
        </div>
        <div className=''>
           {
           <Cart key={items.id} items={items} handleRemoveFromCart={handleRemoveFromCart}></Cart>            
           }
        </div>
         <div className='bottles'>
            {
                bottlesinfo2.map(bottle=><Bottle key={bottle.id}
                    handleAddToCart={handleAddToCart}
                    bottle={bottle}></Bottle>)
            }
            
        </div>
       </div>
    );
};

export default Bottles;