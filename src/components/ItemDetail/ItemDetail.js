import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount'

const ItemDetail = ({ productos }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="container_img">
                        <img src={productos.src} alt={productos.nombre} />
                </div> 
                <div className="inf">
                    <h1 className="product__title">{productos.nombre}</h1>
                    <p>{productos.detail}</p>
                    <span className="product__price"> ${productos.precio} </span>
                    <select name="" id="">
                        <option>talle</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <ItemCount stock={productos.stock} />
                </div>
            </div>  
            
        </div>
    )
}

export default ItemDetail
