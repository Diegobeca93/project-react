import React, { useState, useContext, createContext} from 'react'

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [ itemsCart, setItemsCart ] = useState([]);
    
    const isInCart = (id) => {
        return itemsCart.some((item)=> {
            return item.id === id;
         })
    }

    const addItem = (item, qty) => {
        if(isInCart(item.id)) {
            let itemToAdd = itemsCart.find( (itemInCart) => {
                return itemInCart.id === item.id
            });
            itemToAdd.qty =+ qty;
            
            let filteredCart = itemsCart.filter( (itemInCart) => {
                return itemInCart.id !== item.id
            });

            setItemsCart([...filteredCart, itemToAdd]);
        }
            setItemsCart([...itemsCart, {...item, qty}]);
    }



    // const addItem = (item, qty) => {
    //     if (isInCart(item.id)) {
    //             setItemsCart(itemsCart.map(( itemCart)=> {
    //                 if (itemCart.id === item.id){
    //                     itemsCart.qty += qty;
    //                 }
    //                 return itemCart;
    //             }))   
    //         }
    //     else setItemsCart([...itemsCart, {...item,qty}])
    // }


    const getQtyCart = () => {
        return itemsCart.reduce((total, item) =>{
            return (total + item.qty);
        },0)
    }

    return (
        <CartContext.Provider  value={ { itemsCart, addItem, getQtyCart, isInCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext   
