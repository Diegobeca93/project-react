import React from 'react';
import { useState, useEffect } from 'react'
import ItemList from './ItemList';  
import { getProductos } from '../productos'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams()

    
    useEffect(() => {
        const list = getProductos(categoriaId)

        list.then(list => {
            setProductos(list)
        })
        .catch((error) =>{
            console.log(error)
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


