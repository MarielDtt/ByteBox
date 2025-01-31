/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react"
import { ProductContext } from "../productContext/ProductContext"
import { productService } from "@/service/products"
import { IProduct } from "@/utils/utils"


export const  ProductProvider  = ({children}: React.PropsWithChildren<unknown>) => {

    const [product, setProduct] = useState<IProduct[]>([]);

    const [error, setError] = useState("");
    

    const value = {
        product, 
        setProduct
    }

    useEffect(() => {
       const fetchProducts = async () => {
           try {
                const products = await productService();
                setProduct(products)       
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Error al cargar los productos. Intenta nuevamente.")
            }
        }
        
       fetchProducts()
    }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>

    )

}