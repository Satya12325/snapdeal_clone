import { createContext, useState } from "react";

const CartProvider = createContext();

export default function CartContextProvider({children}){
    const [cartProduct, setCartProduct] = useState([]);

    return (
        <CartProvider.Provider value={{cartProduct, setCartProduct}}>
            {children}
        </CartProvider.Provider>
    )

}