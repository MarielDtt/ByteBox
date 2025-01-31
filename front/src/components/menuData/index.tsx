'use client'

import { useContext } from "react";
import { MenuContext } from "@/context/menuContext/MenuContext";
export function MenuDataComponent() {
    const { setValue } = useContext(MenuContext)

    const handlerViewData = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = event.target as HTMLButtonElement

        setValue(
            value
        )
    }

    return (

        <div className="flex flex-col">
            <p className="text-2xl font-bold text-left">MIS DATOS</p>
            <button className="text-xl mt-8 text-left hover:text-cyan-400" onClick={handlerViewData} value={"data"} name="data">Datos Personales</button>
            <button className="text-xl mt-8 text-left hover:text-cyan-400" onClick={handlerViewData} value={"contacto"} name="contacto">Contacto</button>
            <button className="text-xl mt-8 text-left hover:text-cyan-400" onClick={handlerViewData} value={"credenciales"} name="credenciales">Credenciales</button>
        </div>

    )
}