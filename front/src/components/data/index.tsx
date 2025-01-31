/* eslint-disable @next/next/no-img-element */
"use client"

import { ButtonComponent } from "../button"
import { useContext, useRef  } from "react"
import { LoginContext } from "@/context/loginContext/LoginContext"
import { AvatarContext } from "@/context/avatarContext/AvatarContext"
import { Pencil } from 'lucide-react';


export function DataComponent() {

    const { estadoUser } = useContext(LoginContext)
    const { estadoAvatar, setEstadoAvatar } = useContext(AvatarContext)

    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const handlerAvatar = () =>{
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Abre el selector de archivos cuando se hace clic en el botón
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Captura el archivo seleccionado
        if (file) {
            const imageURL = URL.createObjectURL(file); // Crea una URL temporal para la imagen
            setEstadoAvatar(imageURL); // Actualiza el contexto con la nueva URL
            sessionStorage.setItem('userImage', imageURL); // Guarda la URL en sessionStorage
        }
    }

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-div p-4 gap-6">
            <div className="w-full md:w-3/4">
                <h1 className="ml-4 pt-4 font-bold text-xl" >Datos Personales</h1>

                <p className="ml-4 font-bold pt-4 text-base">Nombre</p>
                <p className="text-base pt-2 ml-4 text-slate-700"> {estadoUser?.name || "Nombre no disponible"}</p>

                <p className="ml-4 font-bold pt-4 text-base">Direccion</p>
                <p className="text-base pt-2 ml-4 text-slate-700"> {estadoUser?.address || "Direccion no disponible"}</p>


                <div className="pb-4">
                    <ButtonComponent
                        text="Editar"
                    />
                </div>

            </div>
            <div>
                <div className="ml-auto pt-4 mr-8 pl-8">
                    <img src={estadoAvatar} alt="Avatar" className="rounded-full w-36 h-36" />
                </div>
                <div className="flex">
                    <button className="mt-4 ml-10 font-black text-sm" onClick={handlerAvatar}>Actualizar Imagen </button> 
                    <Pencil size={16} className="ml-2 mt-4" />
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                />
            </div>
        </div>

    )


}