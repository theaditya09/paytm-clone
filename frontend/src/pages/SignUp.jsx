import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp(){

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    return(
        <>
        <div className="min-h-screen flex justify-center items-center px-4">
            <div className="glass-card w-full max-w-md text-center rounded-2xl animate-fade-in-up glass-field">
                <Heading label="Sign Up"/>
                <SubHeading label="Enter your information to create an account" />
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value)
                }} label="First Name" placeholder="John"/>
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                }} label="Last Name" placeholder="Doe"/>
                <InputBox type="email" onChange={(e) => {
                    setEmail(e.target.value)
                }} label="Email" placeholder="johndoe@example.com"/>
                <InputBox type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} label="Password" placeholder="******"/>
                <Button onClick={async () => {
                    try{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username : email,
                            password,
                            firstName,
                            lastName
                        })
                        localStorage.setItem("token",response.data.token)
                        navigate('/dashboard')
                    }
                    catch(err){
                        if(err.response){
                            setError(true);
                        }
                    }
                }} label="Sign Up" />
                { error ? <div className="text-sm text-red-400 animate-fade-in-up">Signup error, please try again</div> : null }
                <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin"/>
            </div>
        </div>
        </>
    )
}