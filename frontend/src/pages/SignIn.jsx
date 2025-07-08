import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn(){

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signinError, setSigninError] = useState(false)

    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-max h-max text-center rounded-lg">
                <Heading label="Sign In"/>
                <SubHeading label="Enter your credentials to access your account" />
                <InputBox label="Email" placeholder="johndoe@example.com" onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <InputBox label="Password" placeholder="******" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <Button label="Sign In" onClick={async () => {
                    try{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                            username,
                            password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate('/dashboard')
                    } 
                    catch(err){
                        if(err.response){
                            setSigninError(true)
                        }
                    }
                }}/>
                {
                    signinError ? <div className="text-sm text-red-500">Signin error, please try again</div> : null
                }
                <BottomWarning label="Don't have an account?" buttonText="Sign Up" to="/signup"/>
            </div>
        </div>
        </>
    )
}