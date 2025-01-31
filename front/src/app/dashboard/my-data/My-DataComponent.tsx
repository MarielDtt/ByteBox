'use client'
import { ContactoComponent } from "@/components/contacto";
import { CredencialesComponent } from "@/components/credenciales";
import { DataComponent } from "@/components/data";
import { MenuDataComponent } from "@/components/menuData";
import { useContext } from "react";
import { MenuContext } from "@/context/menuContext/MenuContext";

export function MyDataComponent() {

    const { valueData } = useContext(MenuContext)
    return (
        <div className="flex" >
            <div className="ml-8">
                <MenuDataComponent />
            </div>
            <div className="w-1/2 h-auto m-auto">
                {valueData === "data" && <DataComponent />}
                {valueData === "contacto" && <ContactoComponent />}
                {valueData === "credenciales" &&  <CredencialesComponent />}
            </div>
        </div>

    )
}