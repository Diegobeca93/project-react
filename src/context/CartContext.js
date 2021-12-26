import React, { useState, useContext, createContext} from 'react'

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [ itemsCart, setItemsCart ] = useState([]);
    
    const addItem = (item, qty) => {
        setItemsCart([...itemsCart,{...item, qty}])
    }

    const getQtyCart = () => {
        return itemsCart.reduce((total, item) =>{
            return (total + item.qty);
        },0)
    }
    return (
        <CartContext.Provider  value={ { itemsCart, addItem, getQtyCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext   
