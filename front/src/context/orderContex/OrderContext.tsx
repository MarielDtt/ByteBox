'use client'
import { createContext } from "react";
import { IOrder } from "../../utils/utils"

export const OrderContext = createContext<{
    estadoOrder: IOrder[];
    setEstadoOrder: React.Dispatch<React.SetStateAction<IOrder[]>>;
  }>  ({
    estadoOrder: [],
    setEstadoOrder: () => {},

})