import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart}=props

    let totalQuantity=0;
    let price=0;
    let shipping=0;
    let tax=0;

    for(const product of cart){
        price=price+product.price;
        shipping=shipping+product.shipping
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity=totalQuantity+product.quantity;
        if(price>=200){
            tax=price*.10;
        }
       


    }

    const totalBeforeTax=price+shipping;
    const totalaftertax=totalBeforeTax+tax

    return (
        <div className="cart-details">
            <h4 className="order">Items Ordered: {totalQuantity}</h4>
            <h4>items: $ {price.toFixed(2)}</h4>
            <h4>Shipping & handling: $ {shipping.toFixed(2)}</h4>
            <h4>Total Before Tax: $ {totalBeforeTax.toFixed(2)}</h4>
            <h4>Estimated Tax:{tax.toFixed(2)}</h4>
            <h3>Order Total: $ {totalaftertax.toFixed(2)}</h3>
            {props.children}
        </div>
    );
};

export default Cart;