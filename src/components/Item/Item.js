/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'


const Item = ({productos}) => {
    const urlItem = '/producto/' + productos.id;

    return (
        <div className="product">
            <span className="product__price">${productos.precio} </span>
            <img className="product__image" src={productos.src} />
            <h1 className="product__title">{productos.nombre}</h1>
            <Link to={urlItem}  className="product__btn"> 
                <Button className="product__btn__ui" variant="contained" color="primary">Comprar</Button> 
            </Link>
        </div>
    )
}

export default Item
