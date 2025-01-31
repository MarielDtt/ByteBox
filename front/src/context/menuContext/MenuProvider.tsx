'use client'
import { MenuContext } from "./MenuContext"
import { useState } from "react"

export const MenuProvider = ({children}: { children: React.ReactNode }) => {
    const [valueData, setValue] = useState("")

    const value = {
        valueData,
        setValue
    }

    return (
        <MenuContext.Provider value={value}>{ children }</MenuContext.Provider>
    )
}