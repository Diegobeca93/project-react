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
                    <ItemCount stock={productos.stock} />
                </div>
            </div>  
            
        </div>
    )
}

export default ItemDetail
