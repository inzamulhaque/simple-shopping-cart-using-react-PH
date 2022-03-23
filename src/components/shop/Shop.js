import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
            <div className="cartContainer">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;