/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { getProductos } from '../../productos';

const ItemDetailContainer = ({ ItemId = 1 }) => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        const list = getProductos(ItemId)
        list.then(list => {
            setProductos(list)
        })

        return (() => {
            setProductos([])
        })
    }, [])
    

    return (
        <ItemDetail productos={ productos }/>
    )
}

export default ItemDetailContainer
