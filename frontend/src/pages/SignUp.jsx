import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function SignUp(){
    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-max h-max text-center rounded-lg">
                <Heading label="Sign Up"/>
                <SubHeading label="Enter your information to create an account" />
                <InputBox label="First Name" placeholder="John"/>
                <InputBox label="Last Name" placeholder="Doe"/>
                <InputBox label="Email" placeholder="johndoe@example.com"/>
                <InputBox label="Password" placeholder="******"/>
                <Button label="Sign Up"/>
                <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin"/>
            </div>
        </div>
        </>
    )
}