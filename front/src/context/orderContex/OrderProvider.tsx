import { useState } from "react"
import { OrderContext } from "./OrderContext"
import { IOrder } from "@/utils/utils"

export const OrderProvider = ({ children }: { children: React.ReactNode }) =>{
    const [estadoOrder , setEstadoOrder] = useState<IOrder[]>([])

    const value = {
        estadoOrder,
        setEstadoOrder
    }

    return <OrderContext.Provider value={value}> {children} </OrderContext.Provider>
}