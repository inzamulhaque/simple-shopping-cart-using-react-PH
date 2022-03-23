import React from 'react';
import "./Product.css";

const Product = ({ product }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <div className="cartHeader">
                <img src={img} alt="Product Image" />
                <p className='productName'> {name} </p>
                <p className='price'>Price: ${price}</p>
                <p className='footertext'>Manufacturer: {seller}</p>
                <p className='footertext'>Rating: {ratings} start</p>
            </div>
            <button className='cartBtn'>Add to Cart</button>
        </div>
    );
};

export default Product;