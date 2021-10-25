import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart()
    const [displayProducts, setDisplayProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const size = 10;

    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data.products)
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
            })
    }, [page]);

    // useEffect(() => {
    //     if (products.length) {
    //         const savedCart = getStoredCart();
    //         const storedCart = [];
    //         for (const key in savedCart) {
    //             const addedProduct = products.find(product => product.key === key);
    //             if (addedProduct) {
    //                 const quantity = savedCart[key];
    //                 addedProduct.quantity = quantity;
    //                 storedCart.push(addedProduct)
    //             }

    //         }
    //         setCarts(storedCart)
    //     }

    // }, [])



    const handleAddToCart = (product) => {

        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProduct);

    }

    const handleReviewOrder = () => {
        history.push("/rivew")
    }



    return (
        <div>
            <div className="search-field">
                <input onChange={handleSearch} type="text" placeholder="Type here to search product" /> 
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Total Products:{products.length}</h2>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                // click korle button er color change hbe
                                className={number === page ? 'selected' : ""}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <h2 className="order">Order Summary</h2>
                    <Cart cart={cart}>
                        <button onClick={handleReviewOrder} className="add-button">Review Order</button>
                    </Cart>

                </div>

            </div>
        </div>
    );
};

export default Shop;