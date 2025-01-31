'use client'
import { createContext } from "react";

export const AvatarContext = createContext<{
    estadoAvatar: string
    setEstadoAvatar: React.Dispatch<React.SetStateAction<string>>;
  }>  ({
    estadoAvatar: "",
    setEstadoAvatar: () => {},

})