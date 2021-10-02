import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [carts,setCarts]=useState([])
    const [displayProducts,setDisplayProducts]=useState([])

    const history=useHistory()

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>{
            setDisplayProducts(data)
            setProducts(data)})
    },[]);

    useEffect(()=>{
      if(products.length){
        const savedCart=getStoredCart();
        const storedCart=[];
        for(const key in savedCart){
            const addedProduct=products.find(product=>product.key===key);
            if(addedProduct){
                const quantity=savedCart[key];
                addedProduct.quantity=quantity;
                storedCart.push(addedProduct)
            }
           
        }
        setCarts(storedCart)
      }

    },[products])

  

    const handleAddToCart=(product)=>{
        
       const newCart=[...carts,product]
       setCarts(newCart)
       addToDb(product.key)
    }

    const handleSearch=(event)=>{
        const searchText=event.target.value;
        const matchProduct=  products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProduct);

    }

    const handleReviewOrder=()=>{
        history.push("/rivew")
    }



    return (
        <div>
           <div className="search-field">
                <input onChange={handleSearch} type="text" placeholder="Type here to search product" />  <i class="fas fa-shopping-cart sp-icon"></i><small className="sp-number"> {carts.length}</small>
           </div>
           <div className="shop-container">
               <div className="product-container">
                <h2>Total Products:{products.length}</h2>
                {
                    displayProducts.map(product=><Product 
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
                }
               </div>
               <div className="cart-container">
                <h2 className="order">Order Summary</h2>
                <Cart cart={carts}>
                    <button onClick={handleReviewOrder} className="add-button">Review Order</button>
                </Cart>
                
               </div>

           </div>
        </div>
    );
};

export default Shop;