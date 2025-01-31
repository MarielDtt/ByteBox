import { ILogin } from "../app/login/types"

export const validateLogin = (input: ILogin) => {
    const errors: ILogin = {username: "", password:""};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!input.username) {
        errors.username = "Campo Requerido"
    }else if(!emailRegex.test(input.username)){
        errors.username = "Email Invalido, Formato Esperado: xxxx@xxxx.com.ar"
    }

    if(!input.password) {
        errors.password = "Campo Requerido"
    }

    
    return errors;
   

}