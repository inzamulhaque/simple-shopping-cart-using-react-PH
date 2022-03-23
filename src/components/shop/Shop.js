import React, { useEffect, useState } from 'react';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop-container'>
            <div className="products-container">
                products-container
            </div>
            <div className="cart container">
                cart container
            </div>
        </div>
    );
};

export default Shop;