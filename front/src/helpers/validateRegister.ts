import { IRegister } from "../components/register/interfaceRegister";

export const validateRegister = (input: IRegister) => {
    const errors = {name:"", email:"", password:"",  confirmpassword: "", address:"", phone:""}
    const nameRegex = /^[A-Za-z]{1,29}\s[A-Za-z]{1,29}$/;    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /^[a-zA-Z]+ \d+ [a-zA-Z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const phoneRegex = /^[1-9]\d{9}$/


    if(!input.name) {
        errors.name = "Campo Requerido"
    }else if(!nameRegex.test(input.name)){
        errors.name = "Nombre y Apellido Invalido, Formato Esperado: Solo Letras Nombre y Apellido"
    }

    if(!input.email) {
        errors.email = "Campo Requerido"
    }else if(!emailRegex.test(input.email)){
        errors.email = "Email Invalido, Formato Esperado: xxxx@xxxx.com.ar"
    }

    if(!input.password) {
        errors.password = "Campo Requerido"
    }else if(!passwordRegex.test(input.password)){
        errors.password = "Contraseña Invalida, Formato Esperado: Una Letra Mayuscula, Al menos un numero, Seis Carateres minimo"
    }

    if(!input.confirmpassword) {
        errors.confirmpassword = "Campo Requerido"
    }else if(input.password !== input.confirmpassword){
        errors.confirmpassword= "La contraseña de verificación no coincide."
    }


    if(!input.address) {
        errors.address = "Campo Requerido"
    }else if(!addressRegex.test(input.address)){
        errors.address = "Domicilio Invalido, Formato Esperado: Calle NRO Localidad"
    }

    if(!input.phone) {
        errors.phone = "Campo Requerido"
    } else if(!phoneRegex.test(input.phone)){
        errors.phone = "Telefono Invalido, Formato Esperado: Ingresar 10 digitos Sin Cero en la caracteristica ni 15"
    }

    return errors;

}