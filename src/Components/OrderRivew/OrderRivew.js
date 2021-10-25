import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from './../Products/Products';
import RivewItem from './RivewItem/RivewItem';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart();
    const history=useHistory()

    const handleRemove=key=>{
    const newCart= cart.filter(product=>product.key !==key);
    setCart(newCart);
    removeFromDb(key);
        
    }

    const handlePlaceOrder=()=>{
        history.push('/shipping');
        // setCart([]);
        // clearTheCart()
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product=><RivewItem 
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}></RivewItem>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                 <button onClick={handlePlaceOrder} className="add-button">Proceed to  Shipping</button>
                </Cart>

            </div>
           
        </div>
    );
};

export default OrderReview;