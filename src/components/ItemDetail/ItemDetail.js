import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount'
import { useState } from 'react'
import useCartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
    const [ qtyInCary, setQtyInCart ] = useState(0);
    const { addItem } = useCartContext();

    function onAdd(qty) {
        setQtyInCart(qty);
        addItem(productos.producto, qty);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="container_img">
                        <img src={productos.src} alt={productos.nombre} />
                </div> 
                <div className="inf">
                    <h1 className="inf__title">{productos.nombre}</h1>
                    <p>{productos.detail}</p>
                    <span className="inf__price"> ${productos.precio} </span>
                    <div className="size">
                        <h3>Size :</h3>
                        <span className="size__option">S</span>
                        <span className="size__option">M</span>
                        <span className="size__option">L</span>
                        <span className="size__option">XL</span>
                    </div>
                    {qtyInCary ?
                    <Link to="/cart">  Finalizar compra</Link>
                    :
                    <ItemCount stock={productos.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>  
            
        </div>
    )
}

export default ItemDetail
