import { RegisterComponent } from "@/components/register";

function Register() {

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-full lg:w-1/2 sm:w-full h-full m-8 bg-div">
                    <RegisterComponent />
                </div>
            </div>
        </>

    )
}

export default Register;


