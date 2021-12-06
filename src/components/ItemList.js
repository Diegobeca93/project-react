import React from 'react';
import Item from './Item/Item';
import styled from 'styled-components';

const  Container= styled.ul`
    display: flex;
    margin: 50px auto;
    padding: 0 50px;
`;

const ItemList = ({ productos= [] }) => {
    return (
        
        <Container>
            {productos.map(producto => 
            <Item 
                key={ producto.id}  
                productos={producto} 
            />)}
        </Container>
    )
}

export default ItemList
