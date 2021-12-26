import React from 'react'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useCartContext from '../context/CartContext';

const CartShopping = styled.div`
    margin-left: 25px;
`

function CartWidget() {
    const { getQtyCart } = useCartContext();
    return (
        
        <CartShopping>
            <Badge 
            badgeContent={ getQtyCart()} 
            color="primary">
            <ShoppingCartOutlinedIcon />
            </Badge>    
        </CartShopping>
        
    )
}

export default CartWidget
