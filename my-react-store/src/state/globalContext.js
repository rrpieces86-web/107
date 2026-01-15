import { createContext } from 'react'

const GlobalContext= createContext({
    cart: [], //default cart is an empty array, will hold product object later
    user: {}, // default user is an empty obj, can store user info like name, email, etc.

    addProductToCart: () => {}, // placeholder function to add a product to the cart
    clearCart: () => {}, // placeholder function to remove all items from the cart
    removeProductFromCart: () => {} // placeholder function to remove a specific item from the cart
})

//export the context so it can be used in another component
export default GlobalContext