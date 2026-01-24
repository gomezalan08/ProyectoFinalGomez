import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart size="1.5rem" color="white" />
            <div className="qty-display">3</div>
        </div>
    );
};

export default CartWidget;