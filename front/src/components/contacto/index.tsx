'use client'

import { ButtonComponent } from "../button"
import { useContext } from "react"
import { LoginContext } from "@/context/loginContext/LoginContext"

export function ContactoComponent () {
    const { estadoUser } = useContext(LoginContext)
  
        return(
            <div className="bg-div w-3/4">   
            
                <h1 className="ml-4 pt-4 font-bold text-xl" >Contacto</h1>
    
                <p className="ml-4 font-bold pt-4 text-base">Telefono</p>
                <p className="text-base pt-2 ml-4 text-slate-700"> {estadoUser?.phone || "Telefono no disponible"}</p>
    
                <p className="ml-4 font-bold pt-4 text-base">Email</p>
                <p className="text-base pt-2 ml-4 text-slate-700"> {estadoUser?.email || "Email no disponible"}</p>
                
    
                <div className="pb-4">
                    <ButtonComponent
                        text="Editar"
                    />
                </div>
            </div>
    )
}