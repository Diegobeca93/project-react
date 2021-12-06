/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Style.css'

const Item = ({productos}) => {
    return (
        <div className="product">
            <span className="product__price"> {productos.precio} </span>
            <img className="product__image" src={productos.src} />
            <h1 className="product__title">{productos.nombre}</h1>
            <hr />
            <p>{productos.detail}</p>
            <button href="#" className="product__btn btn">Comprar</button>
        </div>
    )
}

export default Item
