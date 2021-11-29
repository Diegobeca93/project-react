import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'


const Container = styled.div`
    height: 300px;
    width: 500px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: gainsboro;
    margin: 0 auto;
`;
const Count = styled.div`
    display: flex;
    width: 300px;
    background-color: #fff;
    justify-content: space-between;

`;
const Restar = styled.button`
    width: 10%;
    color: black;
    background-color: transparent;
    font-size: 20px;
`;
const Sumar = styled.button`
    width: 10%;
    color: black;
    background-color: transparent;
    font-size: 20px;
`
const AddCarrito= styled.button`
    margin: 20px;
    padding: 8px 100px;
    background: lightgreen;
`

const ItemCount = () => {
    const [contador, setcontador] = useState(0);
    const [stock, setstock] = useState(10);

    const sumarClick = () => {

        if (contador < stock){
            setcontador(contador + 1 )
        } else {
            alert("Solo puedes añadir hasta 10 productos.")
            setstock(stock)   
        }
        
    }
    const restarClick = () => {

        if (contador > 0) {
            setcontador(contador - 1 )
        }
    }
   

    return (
        <Container>
            <Count>
                <Restar onClick={ restarClick }>-</Restar>
                <h4>{ contador }</h4>
                <Sumar onClick={ sumarClick }>+</Sumar>
            </Count>
            <AddCarrito>Agregar Carrito</AddCarrito>

        </Container>
    )
}

export default ItemCount
