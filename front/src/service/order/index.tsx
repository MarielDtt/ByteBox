import { apiURL } from "@/config";


export async function getOrders( estadoToken: string) {
    
      try {
        const responde = await fetch(`${apiURL}/users/orders` , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": estadoToken
              },
        });

        if (!responde.ok) {
            throw new Error(`Error: ${responde.statusText}`);
        }

        const orders = await responde.json();
        return orders
            
        } catch (error) {
            throw new Error (error as string)
        }
}


export async function orderService (userId: number, products:number[], estadoToken: string) {
    
    try {
        const response = await fetch (`${apiURL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": estadoToken
              },
              body: JSON.stringify({ userId, products })
        })

        if (!response.ok) {
            throw new Error("Orden no Cargada");
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        throw new Error (error as string || "Error al Cargar la Orden" )     
    }
    
}