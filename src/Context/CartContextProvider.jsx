import { createContext, useState } from "react";

export const CartProvider = createContext();

export default function CartContextProvider({children}){
    const [cartProduct, setCartProduct] = useState({});

    return (
        <CartProvider.Provider value={{cartProduct, setCartProduct}}>
            {children}
        </CartProvider.Provider>
    )

}