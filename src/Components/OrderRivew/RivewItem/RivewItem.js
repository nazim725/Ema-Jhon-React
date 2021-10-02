import React from 'react';

const RivewItem = (props) => {
    const {name,price,quantity,key}=props.product;
    const {handleRemove}=props;
    return (
        <div>
            <h4>{name}</h4>
            <p>$ {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>handleRemove(key)} className="add-button">Remove</button>
        </div>
    );
};

export default RivewItem;