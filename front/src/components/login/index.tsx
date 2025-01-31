'use client'
import React, { useState } from "react";
import { ILogin } from "./interfaceLogin";
import { validateLogin } from "../../helpers/validateLogin";
import { ButtonComponent } from "../button";
import { useRouter } from 'next/navigation';
import { useContext } from "react";
import { TokenContext } from "@/context/tokenContext/TokenContext";
import { loginService } from "../../service/login"
import { LoginContext } from "@/context/loginContext/LoginContext";

function LoginComponet() {
  const router = useRouter();
  const { setEstadoToken } = useContext(TokenContext)
  const { setEstadoUser } = useContext(LoginContext)

  const [userData, setUserData] = useState<ILogin>({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState<ILogin>({
    email: "",
    password: ""
  })

  const [loginStatus, setLoginStatus] = useState<string>("");

  const [touchInput, setTouchInput] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const { name, value } = event.target;

    const actualizaUserData = {
      ...userData,
      [name]: value
    }
    setUserData(actualizaUserData);

    setErrors(validateLogin(actualizaUserData));

  }

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = userData;

    if (!email || !password) {
      setLoginStatus("Todos los Campos Son Obligatorios para Continuar")

      setTimeout(() => {
        setLoginStatus("");
      }, 3000);
      return
    }

    try {
      const dataLogin = await loginService(email, password)
      console.log("aca va la data de login", dataLogin)
      console.log("aca va la data de user", dataLogin.user)
      console.log("aca va la data de order", dataLogin.user.order)

      if (!dataLogin.token) {
        throw new Error("Token no recibido");
      } else {

        router.push('/dashboard')

        sessionStorage.setItem("userToken", dataLogin.token)
        sessionStorage.setItem("user", dataLogin.user)

        setEstadoToken(dataLogin.token)
        setEstadoUser(dataLogin.user)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error durante el inicio de sesión."; // evalúa si un objeto es una instancia de una clase o tipo constructor.

      setLoginStatus(errorMessage);

      setUserData({
        email: "",
        password: ""
      })

      setErrors({
        email: "",
        password: ""
      })

      setTimeout(() => {
        setLoginStatus("");
      }, 3000);
    }

  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target

    setTouchInput({
      ...touchInput,
      [name]: true
    })

    setErrors(validateLogin(userData))
  }

  return (
    <>
      <div className="pt-4 text-2xl flex justify-center mb-4">
        ¿Tiene una Cuenta?
      </div>

      <form onSubmit={handleOnSubmit} className="flex flex-col items-center">
        <div>
          <input
            className="w-72 h-10 m-2 rounded pl-2"
            placeholder="Ingrese su E-Mail"
            type="email"
            value={userData.email}
            name='email'
            onChange={handleInputChange}
            onBlur={handleBlur}
          />

          {touchInput.email && <p className="ml-2 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <input
            className="w-72 h-10 m-2 rounded pl-2"
            placeholder="Ingrese su Contraseña"
            type="password"
            value={userData.password}
            name='password'
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {touchInput.password && <p className="ml-2 text-xs text-red-600">{errors.password}</p>}
        </div>

        {loginStatus && <p className="text-red-600 text-xs mt-2">{loginStatus}</p>}
        <ButtonComponent
          text="Ingresar"
        />
        <p className="mt-2 text-xs text-center mb-4">
          ¿Aún no tenes cuenta? <a href="/register" className="text-blue-600 ml-1">Ingresa aquí</a>
        </p>
      </form>
    </>

  )
}
export default LoginComponet;