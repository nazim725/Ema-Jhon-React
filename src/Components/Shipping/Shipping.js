import React from 'react';
import { useForm } from "react-hook-form";
import './Shipping.css'
import useAuth from './../../hooks/useauth';
import PlaceOrder from './../PlaceOrder/PlaceOrder';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

const Shipping = () => {
    const { user } = useAuth()
    console.log(user)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully')
                    reset()
                    clearTheCart()
                }
            })
    };
    return (
        <div className="shipping">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />


                <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Your Address" defaultValue="" {...register("address")} />
                <input placeholder="Your Phone" defaultValue="" {...register("phone")} />
                <input placeholder="Your City" defaultValue="" {...register("city")} />
                <br />

                <button className="add-button">Place Order</button>
            </form>
        </div>
    );
};

export default Shipping;