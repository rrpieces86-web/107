import React from "react";
import { useState } from "react";

import GlobalContext from "./globalContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name: "reece", id: 63})

    function addProductToCart(product) {
        setCart([...cart, product])
    }

    // clear cart
    function clearCart() {
        setCart([])
    }

    // remove product from cart
    function removeProductFromCart(productId) {
        console.log("removing ", productId);

        const updatedCart = cart.filter(item => item._id !== productId)
        setCart(updatedCart)
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}

        </GlobalContext.Provider>
    )
}

export default GlobalProvider