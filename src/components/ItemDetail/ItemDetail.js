import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount'
// import { useState } from 'react'
import useCartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'


const ItemDetail = ({ productos }) => {
    // const [ qtyInCary, setQtyInCart ] = useState(0);
    const { addItem, isInCart } = useCartContext();

    function onAdd(qty) {
        // setQtyInCart(qty);
        addItem(productos, qty);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="container_img"
                style={{backgroundImage:`url(${productos.src})`, backgroundSize: "cover" }} 
                />
                        {/* <img src={productos.src} alt={productos.nombre} /> */}
                
                <div className="inf">
                    <h1 className="inf__title">{productos.nombre}</h1>
                    <p>{productos.detail}</p>
                    <span className="inf__price"> ${productos.precio} </span>
                    <div className="size">
                        <h3>Size :</h3> 
                        <div className="size__option">
                            {/* {
                                productos.talles.map((talle, index)=>(
                                    <button key={index}>{talle}</button>
                                ))
                            } */}
                        </div>
                    </div>
                    {isInCart(productos.id) ?
                    <Link 
                        to="/" 
                        className="finish"> 
                            <Button className="finish__buying" variant="contained" color="secondary">
                                Finalizar compra
                            </Button>
                    </Link>
                    :
                    <ItemCount 
                        stock={productos.stock} 
                        onAdd={onAdd}
                        initial={1}
                    />
                    }

                </div>
            </div>  
        </div>
    )
}

export default ItemDetail
