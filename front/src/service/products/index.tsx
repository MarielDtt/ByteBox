import { apiURL } from "@/config";
import { IProduct } from "@/utils/utils";

export async function  productService () {
    try {
        const responde = await fetch(`${apiURL}/products` , {
            method: "GET",
            cache: "no-cache"
        });

        if (!responde.ok) {
            throw new Error(`Error: ${responde.statusText}`);
        }

        const products: IProduct[] = await responde.json();
        return products
        
    } catch (error) {
        throw new Error (error as string)
    }

}