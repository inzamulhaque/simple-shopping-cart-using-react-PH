import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Order Summary</h1>
            Selected Items: {cart.length}
        </div>
    );
};

export default Cart;