'use client'
import { TokenContext } from "./TokenContext"
import { useState, useEffect } from "react"
export const TokenProvider = ({ children }: { children: React.ReactNode }) =>{
    const [estadoToken, setEstadoToken] = useState(sessionStorage.getItem("userToken") ?? null)
    const [autenticado, setAutenticado] = useState<boolean>(() => !!sessionStorage.getItem("userToken"));

    //Se ejecuta solo en el cliente para evitar que se ejecute el código relacionado con sessionStorage en el servidor 
    useEffect(() => {
        if (typeof window !== "undefined") { // Solo se ejecuta en el cliente
          const token = sessionStorage.getItem("userToken");
          setEstadoToken(token);
          setAutenticado(token ? true : false);
        }
      }, []);

    //Depende de estadoToken. Cada vez que el valor de estadoToken cambie, este efecto se ejecutará.
    useEffect(() =>{
      
      if (typeof window !== "undefined") {
        if (estadoToken) {
            sessionStorage.setItem("userToken", estadoToken);
            setAutenticado(true);
        } else {
            sessionStorage.removeItem("userToken");
            setAutenticado(false);
        }
    }
    }, [estadoToken])

    const value = {
        estadoToken,
        setEstadoToken,
        autenticado,
        setAutenticado,
    }

    return(
        <>
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>

        </>
    )
}