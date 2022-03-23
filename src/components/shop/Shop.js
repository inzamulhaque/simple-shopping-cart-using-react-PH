import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    }

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product handleClick={handleAddToCart} product={product} key={product.id} />)
                }
            </div>
            <div className="cart container">
                <h1>Order Summary</h1>
                Selected Items: {cart.length}
            </div>
        </div>
    );
};

export default Shop;