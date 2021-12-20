import React from 'react';
import { useState, useEffect } from 'react'
import ItemList from './ItemList';  
import { getProductos, getProductosByCategoty } from '../productos'
import { useParams } from 'react-router-dom';
// import { List } from '@material-ui/core';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams()
   
    useEffect(() => {
        const list = categoriaId? getProductosByCategoty(categoriaId): getProductos();

        list.then(List => {
            setProductos(List)
        })
        .catch((error) =>{  
            console.log(error)
        })

        return (() => {
            setProductos([])
        })
    }, [categoriaId])
    
    
    return (
        <div>
            <ItemList productos={ productos } />
        </div>
    )
    
}

export default ItemListContainer


