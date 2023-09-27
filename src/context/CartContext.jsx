import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.idx)) {
            let cartItem = cart.find(itemCart => itemCart.idx === item.idx);
            cartItem.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.idx !== id);
        setCart([...newCart]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.idx === id);
    }

    const cantTotalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador += item.quantity, 0);
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio * item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cantTotalProductos, sumaTotalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;