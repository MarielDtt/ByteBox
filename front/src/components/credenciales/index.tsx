'use client'

import { ButtonComponent } from "../button"
import { useContext } from "react"
import { LoginContext } from "@/context/loginContext/LoginContext"

export function CredencialesComponent () {
    const { estadoUser } = useContext(LoginContext)
  
        return(
            <div className="bg-div w-3/4">   
            
                <h1 className="ml-4 pt-4 font-bold text-xl" >Credenciales</h1>
    
                <p className="ml-4 font-bold pt-4 text-base">Usuario</p>
                <p className="text-base pt-2 ml-4 text-slate-700"> {estadoUser?.email || "Usuario no disponible"}</p>
    
                <p className="ml-4 font-bold pt-4 text-base">Contraseña</p>
                <p className="text-base pt-2 ml-4 text-slate-700"> {"Contraseña no disponible contacte con Soporte"}</p>
                
    
                <div className="pb-4">
                    <ButtonComponent
                        text="Editar"
                    />
                </div>
            </div>
    )
}