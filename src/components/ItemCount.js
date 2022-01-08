import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '@material-ui/core'

const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;
const Count = styled.div`
    display: flex;
    width: 300px;
    background-color: #fff;
    justify-content: space-between;
    margin-bottom: 15px;

`;
const Restar = styled.button`
    width: 10%;
    color: black;
    background-color: tomato;
    font-size: 20px;
`;
const Sumar = styled.button`
    width: 10%;
    color: black;
    background-color: springgreen;
    font-size: 20px;
`
const Number = styled.h4`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemCount = ({onAdd, stock, initial}) => {
    const [contador, setcontador] = useState(initial);
    

    const sumarClick = () => {

        if (contador < stock){
            setcontador(contador + 1 )
        } else {
            alert("Solo puedes añadir hasta 10 productos.")  
        }
        
    }
    const restarClick = () => {

        if (contador > 1) {
            setcontador(contador - 1 )
        }
    }
   
    
    return (
        <Container>
            <Count>
                <Restar onClick={ restarClick }>-</Restar>
                <Number>{ contador }</Number>
                <Sumar onClick={ sumarClick }>+</Sumar>
            </Count>
            <Button className="finish__buying" variant="contained" color="primary"
            onClick={()=>{onAdd(contador)}}>
                Agregar Carrito
            </Button>
        
        </Container>
    )
}

export default ItemCount
