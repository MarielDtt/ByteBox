/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect } from "react"
import { IRegister } from "./interfaceRegister"
import { validateRegister } from "@/helpers/validateRegister"
import { ButtonComponent } from "../button"
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function RegisterComponent() {
    const [registerData, setRegisterData] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        address: "",
        phone: ""
    })

    const [errors, setErrors] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        address: "",
        phone: ""
    })

    const [touchInput, setTouchInput] = useState<{ name: boolean; email: boolean; password: boolean; address: false; phone: false; confirmpassword: false }>({
        name: false,
        email: false,
        password: false,
        confirmpassword: false,
        address: false,
        phone: false
    });

    const [loginStatus, setLoginStatus] = useState<string>("");
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name: inputName, value } = event.target;

        setRegisterData({
            ...registerData,
            [inputName]: value
        })

        const errors = validateRegister(registerData);

        setErrors(validateRegister(registerData))
    }

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formularioErrors = validateRegister(registerData);
        setErrors(formularioErrors);

        const hasErrors = Object.values(formularioErrors).some(error => error !== "");
        if (hasErrors) {
            toast.error('Hay errores en el formulario. Por favor, corrígelos antes de continuar.', {
                className: "bg-red-500 text-white"
            })
            return;
        }

        const { name, email, password, confirmpassword, address, phone } = registerData;


        if (!name || !email || !password || !confirmpassword || !address || !phone) {
            setLoginStatus("Todos los Campos Son Obligatorios para Continuar")

            setTimeout(() => {
                setLoginStatus("");
            }, 3000);

            return;
        }

        try {
            const response = await fetch('http://localhost:3001/users/register', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            })

            if (!response.ok) {
                setLoginStatus("Hubo un error al registrar tu cuenta. Intenta nuevamente.");

                setTimeout(() => {
                    setLoginStatus("");
                }, 3000);

                return;
            }

            const data = await response.json();
            toast.success("¡Usuario Creado con Exito! Sera Redirigido para Ingresar a Sistema.", {
                className: "bg-green-500 text-white"
            });

            const timer = setTimeout(() => {
                router.push('/login');
            }, 4000);


            setRegisterData(
                {
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    address: "",
                    phone: ""
                })
        } catch (error) {
            toast.error("Ocurrió un problema. Por favor, intenta más tarde.", {
                className: "bg-red-500 text-white"
            })
        }


    }

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target

        setTouchInput({
            ...touchInput,
            [name]: true
        })

        setErrors(validateRegister(registerData))
    }

    return (
        <>
            <div className="pt-4 text-2xl flex justify-center ml-6 mb-4">
                Creá tu cuenta y comprá desde donde estés
            </div>
            <div className="text-xl flex justify-start ml-4 font-bold">
                DATOS PERSONALES
            </div>
            <div className="text-sm flex justify-start ml-4">
                Necesitamos estos pocos datos para poder registrar tu cuenta
            </div>

            <form onSubmit={handleOnSubmit} className="flex flex-col items-start m-4">
                <div>
                    <input
                        className="w-72 h-10 mb-2 rounded pl-2"
                        placeholder="Nombre y Apellido"
                        type="text"
                        value={registerData.name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touchInput.name && <p className="mb-4 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <input
                        className="w-72 h-10 mb-2 rounded pl-2"
                        placeholder="Domicilio"
                        type="text"
                        value={registerData.address}
                        name="address"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touchInput.address && <p className="mb-4 text-xs text-red-600">{errors.address}</p>}
                </div>
                <div>
                    <input
                        className="w-72 h-10 mb-2 rounded pl-2"
                        placeholder="Telefono"
                        type="number"
                        value={registerData.phone}
                        name="phone"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touchInput.phone && <p className="mb-4 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div className="text-xl flex justify-start mt-4 font-bold">
                    DATOS DE ACCESO
                </div>
                <div className="text-sm flex justify-start mb-4">
                    Necesitarás estos datos para acceder a la página
                </div>


                <div>
                    <input
                        className="w-72 h-10 mb-2 rounded pl-2"
                        placeholder="E-Mail"
                        type="email"
                        value={registerData.email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touchInput.email && <p className="mb-4 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                    <input
                        className="w-72 h-10 mb-2 rounded pl-2"
                        placeholder="Contraseña"
                        type="password"
                        value={registerData.password}
                        name="password"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touchInput.password && <p className="mb-4 text-xs text-red-600">{errors.password}</p>}
                </div>
                <div>
                    <input
                        className="w-72 h-10 mb-2 rounded pl-2"
                        placeholder="Confirmar Contraseña"
                        type="password"
                        value={registerData.confirmpassword}
                        name='confirmpassword'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touchInput.confirmpassword && <p className="mb-4 text-xs text-red-600">{errors.confirmpassword}</p>}
                </div>
                {loginStatus && <p className="text-red-600 text-xs mt-2">{loginStatus}</p>}
                <ButtonComponent
                    text="Crear Cuenta"
                />

                <p className="mt-6 text-xs text-center">
                    ¿Ya tenes cuenta? <a href="/login" className="text-blue-600 ml-1">Ingresa aquí</a>
                </p>
            </form>
        </>
    )
}

