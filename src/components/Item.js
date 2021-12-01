/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Item = ({productos}) => {
    return (
        <div className="product">
            <span className="product__price"> {productos.precio} </span>
            <img className="product__image" src={productos.img} />
            <h1 className="product__title">{productos.nombre}</h1>
            <hr />
            <p>The Nike Roshe One Print Men's Shoe offers breathability, lightweight cushioning and bold style with an injected unit midsole and colorful mesh upper. </p>
            <button href="#" className="product__btn btn">Buy Now</button>
        </div>
    )
}

export default Item
