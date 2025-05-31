import React from 'react';
import './cart.css'

const Cart = ({items,handleRemoveFromCart}) => {
    return (
        <div className={items.length>0?"cart":null}>
            {
             items.map(bottle=><div >
                 <img src={bottle.img} />
                 <button onClick={()=>handleRemoveFromCart(bottle.id)}>x</button>
             </div>)

            }
        </div>
    );
};

export default Cart;