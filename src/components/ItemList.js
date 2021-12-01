import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        
        <ul>
            {productos.map(producto => <Item key={ producto.id}  productos={producto} />)}
        </ul>
    )
}

export default ItemList
