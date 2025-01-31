import { ICart } from "@/interfaces/Icart";
import { createContext } from "react";

export const CartContex = createContext<{
    cartState: ICart[],
    setCartState: React.Dispatch<React.SetStateAction<ICart[]>>;
}> ({

    cartState: [],
    setCartState: () => {}
})