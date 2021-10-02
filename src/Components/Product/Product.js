import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const features=props.product.features;
    const {name,seller,price,stock,img,star}=props.product
   
   
    return (
        <div className="products">
            <img src={img} alt="" />

            <div >
            <h3>{name}</h3>
              <div className="product-info">
              <div>
              
              <p>
                  by: {seller}
              </p>
              <p>$ {price}</p>
              <p><small>only {stock} left in stock - order soon</small></p>
             
              <button onClick={()=>props.handleAddToCart(props.product)}  className="add-button"><i class="fas fa-shopping-cart"></i>  Add to Cart</button>
              
            </div>
              <div>
              <Rating className="rating"
                  initialRating={star}
                  readonly
                  emptySymbol="far fa-star rating-icons"
                  fullSymbol="fas fa-star rating-icons"/>
                {
                    features.map(feature=><ul><li>{feature.description} {feature.value}</li></ul>)
                }

              </div>
              </div>
            </div>

            
        </div>
    );
};

export default Product;