'use client'

import { createContext } from "react";


export const TokenContext = createContext <{
    estadoToken: string | null;
    setEstadoToken: React.Dispatch<React.SetStateAction<string | null>>;
    autenticado: boolean;
  }> ({
    estadoToken: "" ,
    setEstadoToken: () => {},
    autenticado: false
})