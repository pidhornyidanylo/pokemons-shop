import { createContext, useState, useEffect } from "react";


const addCartItem = ( pokemons, pokemonToAdd ) => {
    const existingPokemon = pokemons.find(
        pokemon => pokemon.id === pokemonToAdd.id
    )

    if(existingPokemon) {
        return pokemons.map((pokemon) => pokemon.id === pokemonToAdd.id 
        ? { ...pokemon, quantity: pokemon.quantity + 1 } 
        : pokemon 
        )
    }

    return [...pokemons, { ...pokemonToAdd, quantity: 1 }];
}

const removeCartItem = ( pokemons, pokemonToRemove ) => {
    const existingPokemon = pokemons.find(
        pokemon => pokemon.id === pokemonToRemove.id
    )

    if(existingPokemon.quantity === 1) {
        return pokemons.filter(pokemon => pokemon.id !== pokemonToRemove.id)
    }

    return pokemons.map(pokemon => pokemon.id === pokemonToRemove.id ? { ...pokemon, quantity: pokemon.quantity - 1 } : pokemon)
}

const deleteCartItem = (pokemons, pokemonToDelete) => {
    return pokemons.filter(pokemon => pokemon.id !== pokemonToDelete.id);
}


export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartCount: 0,
    setCartCount: () => {}
});

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    

    useEffect(() => {
        const newCartCount = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setCartCount(newCartCount);
      }, [cartItems]);

    const addItemToCart = (pokToAdd) => {
        setCartItems(addCartItem(cartItems, pokToAdd));
    }

    const removeItemFromCart = (pokToRemove) => {
        setCartItems(removeCartItem(cartItems, pokToRemove))
    }

    const clearItemFromCart = (pokToDelete) => {
        setCartItems(deleteCartItem(cartItems, pokToDelete))
    }


    const value = { 
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        setCartCount
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}