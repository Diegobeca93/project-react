import React from 'react';
import { useState, useEffect } from 'react'
import ItemList from './ItemList';  
import { getProductos } from '../productos'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        const list = getProductos()
        list.then(list => {
            setProductos(list)
        })

        return (() => {
            setProductos([])
        })
    }, [])
    
    return (
        <div>
            <ItemList productos={ productos } />
        </div>
    )
    
}

export default ItemListContainer


