/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { getProductos } from '../../productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()
        
    useEffect(function () {
        let list = getProductos(Number(id));


        list
        .then(()=> {
            setProducto(list)
        })
        .catch((error) =>{
            console.log(error)
        })

        return (() => {
            setProducto([])
        })
    }, [id])
    

    return (
        <ItemDetail productos={ producto }/>
    )
}

export default ItemDetailContainer
