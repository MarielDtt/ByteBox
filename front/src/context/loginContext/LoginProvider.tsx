'use client'
import { IUser } from "@/utils/utils"
import { LoginContext } from "./LoginContext"
import { useState, useEffect } from "react"

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
    const [estadoUser, setEstadoUser] = useState<IUser | null>(() => {
        // Verificamos si hay algo en sessionstorage bajo la clave "user"
        const storedUser = sessionStorage.getItem("user");

        // Si encontramos el valor, intentamos parsearlo y devolverlo como objeto
        if (storedUser) {
            try {
                //Convertimos el string de sessionstorage a un objeto
                return JSON.parse(storedUser);
            } catch (error) {
                console.log(error)
                return null;
            }
        }
        return null;
    });


    useEffect(() => {

        if (estadoUser) {
            // Si el estadoUser es un objeto (como debe ser), lo convertimos a cadena JSON
            const userString = JSON.stringify(estadoUser);
            sessionStorage.setItem("user", userString); // Lo guardamos en sessionStorage
        } else {

            sessionStorage.removeItem("userToken");

        }

    }, [estadoUser])


    const value = {
        estadoUser,
        setEstadoUser
    }


    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    )
}