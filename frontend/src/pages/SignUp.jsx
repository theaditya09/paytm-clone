import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";

export function SignUp(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-max h-max text-center rounded-lg">
                <Heading label="Sign Up"/>
                <SubHeading label="Enter your information to create an account" />
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value)
                }} label="First Name" placeholder="John"/>
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                }} label="Last Name" placeholder="Doe"/>
                <InputBox onChange={(e) => {
                    setEmail(e.target.value)
                }} label="Email" placeholder="johndoe@example.com"/>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label="Password" placeholder="******"/>
                <Button onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username : email,
                        password,
                        firstName,
                        lastName
                    })
                    localStorage.setItem("token",response.data.token)
                }} label="Sign Up"/>
                <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin"/>
            </div>
        </div>
        </>
    )
}