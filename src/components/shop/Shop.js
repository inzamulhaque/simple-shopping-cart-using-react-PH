import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
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
                {
                    products.map(product => <Product product={product} key={product.id} />)
                }
            </div>
            <div className="cart container">
                cart container
            </div>
        </div>
    );
};

export default Shop;