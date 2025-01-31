import { createContext } from "react";
import { IProduct } from "@/utils/utils";

export const ProductContext =createContext<{
    product: IProduct[];
}>({
    product: []
});