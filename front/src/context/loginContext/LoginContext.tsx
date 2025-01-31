'use client'
import { createContext } from "react";
import { IUser } from "../../utils/utils"

export const LoginContext = createContext<{
    estadoUser: IUser ;
    setEstadoUser: React.Dispatch<React.SetStateAction<IUser>>;
  }>  ({
    estadoUser: { 
      id: 0,
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      orders: []},
    setEstadoUser: () => {},

})