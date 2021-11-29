import React from 'react'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const CartShopping = styled.div`
    margin-left: 25px;
`

function CartWidget() {
    return (
        
        <CartShopping>
            <Badge 
            badgeContent={4} 
            color="primary">
            <ShoppingCartOutlinedIcon />
            </Badge>    
        </CartShopping>
        
    )
}

export default CartWidget
