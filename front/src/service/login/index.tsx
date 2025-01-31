import { apiURL } from "@/config";



export async function  loginService (email: string, password: string) {
  
    try {
        const response = await fetch(`${apiURL}/users/login` , {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
            
          })
          
          if (!response.ok) {
            throw new Error("Usuario o contraseña incorrectos");
        }
    
        const data = await response.json();
        return data; 

    } catch (error) {
        throw new Error (error as string || "Error al iniciar sesión" )     
    }

}