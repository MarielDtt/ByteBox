'use client'

import { ICart } from "@/interfaces/Icart";
import { useEffect, useState } from "react"
import { useContext } from "react";
import { CartContex } from "./CartContext";
import { TokenContext } from "../tokenContext/TokenContext";

export const CartProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const { autenticado } = useContext(TokenContext); 
    
    const [cartState, setCartState] = useState<ICart[]>([]);

     // Cargar datos del carrito desde sessionStorage en el cliente
     useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = sessionStorage.getItem("cart");
            if (storedCart) {
                try {
                    setCartState(JSON.parse(storedCart));
                } catch (error) {
                    console.log("Error al parsear el carrito:", error);
                }
            }
        }
    }, []);

    
     // Guardar cambios en el carrito en sessionStorage
     useEffect(() => {
        if (typeof window !== "undefined") {
            if (cartState.length > 0) {
                sessionStorage.setItem("cart", JSON.stringify(cartState));
            } else {
                sessionStorage.removeItem("cart");
            }
        }
    }, [cartState]);
   

    const value = {
        cartState,
        setCartState,
        autenticado
    }

    return (
        <CartContex.Provider value={value}> {children} </CartContex.Provider>
    )
}